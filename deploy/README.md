# Putting the app online

One server runs everything: the app (Next.js and the SQLite database file) and Caddy, which gets a
free HTTPS certificate, renews it by itself and compresses pages. Four scripts in this folder do
the server work:

| Script | What it does |
| --- | --- |
| `setup.sh` | Once, on a new server: updates, Docker, firewall, the app, the admin password, nightly backups |
| `update.sh` | Puts the newest version from GitHub online (backs up first) |
| `backup.sh` | Saves a checked copy of the database (runs every night by itself) |
| `restore.sh` | Puts a backup back |

## 1. Buy a server

A 4-core / 8 GB VPS in Germany, Austria or the Netherlands is plenty for a school (about 250
pupils clicking at once per core; see the capacity report). From Armenia these are 55–75 ms away.

Recommended: **netcup VPS 1000 G12.5** (4 cores, 8 GB, 128 GB, unlimited traffic, no setup fee).
Late 2026 price: about €10.35 a month before VAT on a 24-month contract, €12.18 on 12 months,
about €14 month to month; VAT is added for EU customers. Choose:

- Operating system: **Ubuntu 24.04**
- Location: "No preference Europe" (free) or Nuremberg/Vienna
- Network: IPv4 + IPv6

netcup emails the server's **IP address** and **root password**. The 2-core / 4 GB VPS 500 also
works for a start (a few hundred pupils); building a new version is slower on it.

## 2. Get a domain and point it at the server

Buy a domain at any registrar (a `.am` domain at an Armenian registrar, or a `.com`/`.org`
anywhere). In the registrar's DNS settings add:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` (or a sub-name such as `lessons`) | the server's IPv4 address |
| AAAA (optional) | the same name | the server's IPv6 address |

Check it on your computer: `ping lessons.example.am` should show the server's address. This can
take from a few minutes to a few hours.

## 3. Run the setup script

From Windows open **PowerShell** (macOS: Terminal) and log in with the root password:

```sh
ssh root@SERVER-IP
```

Then, on the server, with your own domain:

```sh
curl -fsSL https://raw.githubusercontent.com/hovchik/lessons/main/deploy/setup.sh -o setup.sh
bash setup.sh lessons.example.am
```

It takes about 10 minutes. At the end it prints the site address and the **admin password**:
save it in a password manager. The admin panel is at `https://your-domain/admin`.

If the domain did not point at the server yet, the script says so and the site still starts;
Caddy gets the HTTPS certificate by itself as soon as the DNS record works.

What the script sets up:

- security updates that install every night, fail2ban against SSH password guessing, a firewall
  that only lets in SSH, HTTP and HTTPS, 2 GB of swap, small Docker logs;
- the app in `/opt/lessons`, with the web address and worker count in `.env` and the secrets in `.env.production`
  (`ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, `ANTHROPIC_API_KEY`). Running `setup.sh` again keeps them;
- `/etc/cron.d/lessons`: a backup every night at 03:15 Armenian time, and a weekly clean-up of old
  Docker images.

`ADMIN_SESSION_SECRET` signs every login cookie: keep it the same, or everybody is logged out.
After changing `ADMIN_PASSWORD` run `docker compose up -d`; admin sessions are then signed out. The
admin login allows 10 wrong passwords per 15 minutes from one address.

The AI tutor stays off until `ANTHROPIC_API_KEY` is filled in (it is paid per use; at most
`TUTOR_DAILY_LIMIT` questions a day, 3000 by default). Edit `.env.production` and run `docker compose up -d`.

## 4. Updating to a new version

```sh
ssh root@SERVER-IP
cd /opt/lessons && ./deploy/update.sh
```

It saves `backups/lessons-<date>-before-update.db`, downloads the new code, rebuilds and restarts.
The site is offline for 30–60 seconds while the new version starts. Pupils, their progress and
lessons edited in the admin panel are kept (the course content is re-seeded on every start).

To update by itself every night when GitHub has a new version, add this line to
`/etc/cron.d/lessons` (only do this if `main` is always ready to go live):

```
30 4 * * * root cd /opt/lessons && ./deploy/update.sh --if-changed >>/var/log/lessons-update.log 2>&1
```

## 5. Backups

Every night `backup.sh` writes `/opt/lessons/backups/lessons-<date>.db` (about 25 MB), checks that
it opens, and keeps 14 days. Log: `/var/log/lessons-backup.log`. A backup on the same server does
not survive losing the server, so keep copies elsewhere too, with one or more of these:

- **Download to your computer** (PowerShell, any time; asks for the root password):
  `scp "root@SERVER-IP:/opt/lessons/backups/*.db" .`
- **Server snapshots** in the netcup control panel (SCP → your server → Snapshots) before big changes.
- **Automatic off-site copy** with [rclone](https://rclone.org) to cloud storage (Google Drive,
  Backblaze B2, any S3 storage): `apt install rclone`, `rclone config` to add a remote (for
  example `gdrive`), then add `BACKUP_REMOTE=gdrive:lessons-backups` to `/opt/lessons/.env`. Each
  nightly backup is then copied there too, and copies older than 30 days are deleted there.

To put a backup back:

```sh
cd /opt/lessons
./deploy/restore.sh                                    # lists the backups
./deploy/restore.sh backups/lessons-2026-11-23.db
```

The current database is saved first as `lessons-<date>-before-restore.db`, so a restore can be undone.

## Everyday commands

Run these in `/opt/lessons`:

| Task | Command |
| --- | --- |
| Is it running? | `docker compose ps` |
| App log | `docker compose logs --tail 100 app` |
| Restart | `docker compose restart app` |
| Stop / start | `docker compose stop` / `docker compose up -d` |
| Disk space | `df -h /` and `docker system df` |

If the site shows an error after an update, read the app log first. To go back to the old
version: `update.sh` printed "Now running: <code>" before it updated; run
`git reset --hard <code> && docker compose up -d --build`, then `./deploy/restore.sh` with the
`before-update` backup.

## Using more cores

`WEB_CONCURRENCY` in `.env` sets how many app workers run. `setup.sh` sets it to one less than
the number of cores (3 on a 4-core server, 1 on 2 cores). After a change run `docker compose up -d`. All workers share the
database, live class quizzes included, so a pupil can land on any of them.
