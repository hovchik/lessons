#!/bin/sh
# Puts a backup back:  cd /opt/lessons && ./deploy/restore.sh backups/lessons-2026-11-23.db
# Without a file name it lists the backups. The current database is saved first as
# backups/lessons-<date>-before-restore.db, so a restore can be undone the same way.
set -e
cd "$(dirname "$0")/.."
file="$1"
if [ -z "$file" ]; then
  echo "Backups (newest first):"
  ls -1t backups/lessons-*.db 2>/dev/null || echo "  none yet"
  echo "Usage: ./deploy/restore.sh backups/<file>.db"
  exit 1
fi
[ -f "$file" ] || { echo "No such file: $file"; exit 1; }
src=$(realpath "$file")
./deploy/backup.sh before-restore || echo "(could not back up the current database; continuing)"
docker compose stop app
# Remove the write-ahead log too, or SQLite would replay old changes onto the restored file.
docker compose run --rm --no-deps -T -v "$src:/restore.db:ro" --entrypoint sh app -c \
  'cp /restore.db /data/lessons.db && rm -f /data/lessons.db-wal /data/lessons.db-shm && chown node:node /data/lessons.db'
docker compose start app
./deploy/wait-ready.sh
echo "Restored $file"
