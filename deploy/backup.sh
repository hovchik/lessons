#!/bin/sh
# Database backup. setup.sh runs it every night at 03:15 (see /etc/cron.d/lessons); by hand:
#   cd /opt/lessons && ./deploy/backup.sh            -> backups/lessons-YYYY-MM-DD.db
#   ./deploy/backup.sh before-update                 -> backups/lessons-YYYY-MM-DD-HHMMSS-before-update.db
# Writes a consistent copy (safe while pupils are using the app), checks it, and keeps 14 days.
# Off-site copy: set BACKUP_REMOTE in .env to an rclone remote (deploy/README.md, "Backups").
set -e
cd "$(dirname "$0")/.."
mkdir -p backups
# Labelled copies carry the time too, so they never replace another backup (e.g. the one being restored).
if [ -n "$1" ]; then name="lessons-$(date +%Y-%m-%d-%H%M%S)-$1.db"; else name="lessons-$(date +%Y-%m-%d).db"; fi
docker compose exec -T -u node app node -e '
  const { createClient } = require("@libsql/client");
  (async () => {
    await createClient({ url: "file:" + process.env.DATABASE_PATH })
      .execute({ sql: "VACUUM INTO ?", args: ["/data/backup.db"] });
    const copy = createClient({ url: "file:/data/backup.db" });
    const check = (await copy.execute("PRAGMA quick_check")).rows[0][0];
    const users = (await copy.execute("SELECT count(*) FROM users")).rows[0][0];
    if (check !== "ok") throw new Error("backup check failed: " + check);
    console.log("Checked backup: " + users + " accounts");
  })().catch((e) => { console.error(e.message); process.exit(1); });
'
docker compose cp app:/data/backup.db "backups/$name"
docker compose exec -T -u node app rm -f /data/backup.db
find backups -name 'lessons-*.db' -mtime +14 -delete
echo "$(date '+%F %T') saved backups/$name ($(du -h "backups/$name" | cut -f1))"

remote=$(sed -n 's/^BACKUP_REMOTE=//p' .env 2>/dev/null | head -n1)
if [ -n "$remote" ]; then
  rclone copy "backups/$name" "$remote"
  rclone delete --min-age 30d --include 'lessons-*.db' "$remote" || true
  echo "Copied to $remote"
fi
