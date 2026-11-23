#!/bin/sh
# Puts the newest version from GitHub online:  cd /opt/lessons && ./deploy/update.sh
# Saves a backup first, downloads the new code, rebuilds and restarts (about 30-60 seconds offline).
# Pupils, their progress and admin edits are kept. If something breaks: ./deploy/restore.sh
#   ./deploy/update.sh --if-changed   does nothing when GitHub has no new version (for cron).
set -e
cd "$(dirname "$0")/.."
git fetch -q origin "$(git rev-parse --abbrev-ref HEAD)"
if [ "$1" = "--if-changed" ] && [ "$(git rev-parse HEAD)" = "$(git rev-parse FETCH_HEAD)" ]; then
  exit 0
fi
echo "Now running: $(git log -1 --format='%h %cd %s' --date=short)"
./deploy/backup.sh before-update
git merge -q --ff-only FETCH_HEAD
echo "Updating to: $(git log -1 --format='%h %cd %s' --date=short)"
docker compose up -d --build
./deploy/wait-ready.sh
docker image prune -f >/dev/null
echo "Updated. If anything looks wrong: ./deploy/restore.sh $(ls -1t backups/lessons-*-before-update.db | head -n1)"
