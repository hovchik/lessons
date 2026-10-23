#!/bin/bash
# Linux: run ./start.sh (or double-click and choose "Run in terminal").
cd "$(dirname "$0")" || exit 1
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Install Node.js 20+ (https://nodejs.org), then run this again."
  read -r -p "Press Enter to close…"
  exit 1
fi
node start.mjs "$@"
