# Deploying the app

One server runs everything: the app (Next.js + the SQLite file) and Caddy, which gets a free
HTTPS certificate and compresses pages. Tested sizes and costs are in the capacity report; in
short, a 4-core / 8 GB VPS in Germany or Austria (about €10 a month) is plenty for a school.

## 1. Get a server and a domain

1. Order a VPS with Ubuntu 24.04 (for example netcup VPS 1000 G12 in Nuremberg or Vienna).
2. Point your domain at it: an `A` record for `lessons.example.am` → the server's IPv4 address.
   Wait until `ping lessons.example.am` shows that address.

## 2. Install Docker on the server

```sh
ssh root@lessons.example.am
curl -fsSL https://get.docker.com | sh
ufw allow OpenSSH && ufw allow 80 && ufw allow 443 && ufw --force enable
```

## 3. Get the code and the settings

```sh
git clone https://github.com/hovchik/lessons.git /opt/lessons
cd /opt/lessons
echo "DOMAIN=lessons.example.am" > .env
cat > .env.production <<EOF
ADMIN_PASSWORD=$(openssl rand -base64 15)
ADMIN_SESSION_SECRET=$(openssl rand -base64 32)
ANTHROPIC_API_KEY=
EOF
chmod 600 .env.production
grep ADMIN_PASSWORD .env.production   # your admin password: keep it in a password manager
```

The admin login allows 10 wrong passwords per 15 minutes from one address. After changing
`ADMIN_PASSWORD`, run `docker compose up -d`; every admin session is then signed out.

If the repository is private, `git clone` asks for a login: use your GitHub username and a
[personal access token](https://github.com/settings/tokens) with read access to this repository.

`ADMIN_SESSION_SECRET` signs every login cookie. Keep it the same between deploys, or everybody
is logged out.

## 4. Start it

```sh
docker compose up -d --build
docker compose logs -f app     # wait for "Ready on http://0.0.0.0:3000"
```

The first start builds the image (3–5 minutes) and seeds the database (about 25 seconds).
Open `https://lessons.example.am`; the admin panel is at `/admin`.

## 5. Back up every night

```sh
crontab -e
# add:
15 3 * * * cd /opt/lessons && ./deploy/backup.sh >> /var/log/lessons-backup.log 2>&1
```

Backups land in `/opt/lessons/backups` (14 days kept). Copy them off the server too, for example
with the provider's snapshot feature or `rclone` to cloud storage: a backup on the same disk does
not survive losing the server.

To restore: `docker compose stop app`, `docker compose cp backups/lessons-YYYY-MM-DD.db app:/data/lessons.db`,
`docker compose start app`.

## Updating to a new version

```sh
cd /opt/lessons
git pull
docker compose up -d --build
```

The app restarts with the new code and re-seeds the course content. Re-seeding keeps pupils, their
progress and lessons edited in the admin panel. The site is down for about half a minute while it
starts.

## Using more cores

`WEB_CONCURRENCY` sets how many app workers run (one per core helps; measured: 1 worker ≈ 45
requests/s, 2 ≈ 86, 3 ≈ 127). Keep it at **1** while the live class quiz keeps its games in server
memory: with several workers, pupils in one game would land on different workers. When the game
state moves into the database, set `WEB_CONCURRENCY=3` in `.env` on a 4-core server and run
`docker compose up -d`.
