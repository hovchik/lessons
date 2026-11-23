#!/bin/sh
# Waits until the app answers (the seed runs first, so a start takes 30-60 seconds).
# Used by setup.sh, update.sh and restore.sh. Exits 1 and shows the app's log if it doesn't start.
cd "$(dirname "$0")/.."
printf 'Waiting for the app to start'
i=0
while [ $i -lt 60 ]; do
  if docker compose exec -T app node -e '
    fetch("http://127.0.0.1:3000/en").then((r) => process.exit(r.ok ? 0 : 1), () => process.exit(1));
  ' >/dev/null 2>&1; then
    echo " ready."
    exit 0
  fi
  printf '.'
  sleep 5
  i=$((i + 1))
done
echo
echo "The app did not start within 5 minutes. Its last log lines:"
docker compose logs --tail 40 app
exit 1
