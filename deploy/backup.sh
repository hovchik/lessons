#!/bin/sh
# Daily database backup. Run from the repository folder on the server, e.g. from cron:
#   15 3 * * * cd /opt/lessons && ./deploy/backup.sh >> /var/log/lessons-backup.log 2>&1
# Writes a consistent copy (safe while pupils are using the app) to ./backups and keeps 14 days.
set -e
mkdir -p backups
name="lessons-$(date +%Y-%m-%d).db"
docker compose exec -T app node -e '
  const { createClient } = require("@libsql/client");
  const c = createClient({ url: "file:" + process.env.DATABASE_PATH });
  c.execute({ sql: "VACUUM INTO ?", args: ["/data/backup.db"] }).then(() => console.log("ok"));
'
docker compose cp app:/data/backup.db "backups/$name"
docker compose exec -T app rm -f /data/backup.db
find backups -name 'lessons-*.db' -mtime +14 -delete
echo "Saved backups/$name"
