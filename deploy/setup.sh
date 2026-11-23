#!/usr/bin/env bash
# One-time setup of a fresh Ubuntu 24.04 (or Debian 12) server. Run it as root:
#
#   curl -fsSL https://raw.githubusercontent.com/hovchik/lessons/main/deploy/setup.sh -o setup.sh
#   bash setup.sh lessons.example.am
#
# It installs security updates, Docker, a firewall and fail2ban, downloads the app to /opt/lessons,
# makes the admin password, starts the site with HTTPS and turns on nightly backups.
# Running it again is safe: it keeps the existing passwords, database and settings.
set -euo pipefail

DIR=/opt/lessons
REPO=${LESSONS_REPO:-https://github.com/hovchik/lessons.git}
BRANCH=${LESSONS_BRANCH:-main}
DOMAIN="${1:-}"

say() { printf '\n\033[1;34m==> %s\033[0m\n' "$*"; }
warn() { printf '\033[1;33m!! %s\033[0m\n' "$*"; }
die() { printf '\033[1;31mxx %s\033[0m\n' "$*" >&2; exit 1; }

[ "$(id -u)" = 0 ] || die "Run this as root (or with sudo)."
command -v apt-get >/dev/null || die "This script is for Ubuntu or Debian."

if [ -z "$DOMAIN" ] && [ -f "$DIR/.env" ]; then
  DOMAIN=$(sed -n 's/^DOMAIN=//p' "$DIR/.env" | head -n1)
fi
if [ -z "$DOMAIN" ]; then
  read -rp "Web address of the site (for example lessons.example.am): " DOMAIN </dev/tty
fi
DOMAIN=$(printf '%s' "$DOMAIN" | tr 'A-Z' 'a-z' | sed 's#^https\?://##; s#/.*##')
printf '%s' "$DOMAIN" | grep -Eq '^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$' ||
  die "\"$DOMAIN\" does not look like a web address."

say "Installing updates and tools"
export DEBIAN_FRONTEND=noninteractive
apt-get update -q
apt-get upgrade -y -q
apt-get install -y -q ca-certificates curl git ufw fail2ban unattended-upgrades cron

# Security updates install by themselves every night.
cat >/etc/apt/apt.conf.d/20auto-upgrades <<'EOF'
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
EOF
# Server clock in Armenian time, so the times in /etc/cron.d/lessons are local times.
timedatectl set-timezone Asia/Yerevan 2>/dev/null || true
# fail2ban's default jail blocks addresses that keep guessing the SSH password.
systemctl enable --now fail2ban >/dev/null 2>&1 || true

# Swap gives the build some room on servers with little memory.
if ! swapon --show | grep -q . ; then
  say "Adding 2 GB of swap"
  fallocate -l 2G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=2048
  chmod 600 /swapfile
  mkswap /swapfile >/dev/null
  swapon /swapfile
  grep -q '^/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >>/etc/fstab
fi

if ! command -v docker >/dev/null; then
  say "Installing Docker"
  curl -fsSL https://get.docker.com | sh
fi
# Keep container logs small (Docker keeps them forever otherwise).
if [ ! -f /etc/docker/daemon.json ]; then
  mkdir -p /etc/docker
  echo '{ "log-driver": "json-file", "log-opts": { "max-size": "10m", "max-file": "3" } }' >/etc/docker/daemon.json
  systemctl restart docker
fi
systemctl enable --now docker >/dev/null 2>&1 || true

say "Turning on the firewall (SSH, HTTP and HTTPS only)"
ufw allow OpenSSH >/dev/null
ufw allow 80/tcp >/dev/null
ufw allow 443/tcp >/dev/null
ufw allow 443/udp >/dev/null
ufw --force enable >/dev/null

say "Downloading the app to $DIR"
if [ -d "$DIR/.git" ]; then
  git -C "$DIR" pull --ff-only
else
  git clone -b "$BRANCH" "$REPO" "$DIR"
fi
cd "$DIR"

# .env holds the web address (read by docker-compose.yml); other lines in it are kept.
touch .env
if grep -q '^DOMAIN=' .env; then
  sed -i "s#^DOMAIN=.*#DOMAIN=$DOMAIN#" .env
else
  echo "DOMAIN=$DOMAIN" >>.env
fi
# One app worker per core, leaving one core for Caddy and the database.
if ! grep -q '^WEB_CONCURRENCY=' .env; then
  cores=$(nproc)
  echo "WEB_CONCURRENCY=$(( cores > 2 ? cores - 1 : 1 ))" >>.env
fi
# .env.production holds the secrets. It is made once and never overwritten.
if [ ! -f .env.production ]; then
  cat >.env.production <<EOF
ADMIN_PASSWORD=$(openssl rand -base64 18 | tr -d '/+=' | cut -c1-20)
ADMIN_SESSION_SECRET=$(openssl rand -base64 32)
ANTHROPIC_API_KEY=
EOF
  NEW_SECRETS=1
fi
chmod 600 .env .env.production
chmod +x deploy/*.sh

# Caddy can only get the HTTPS certificate once the domain points at this server.
SERVER_IP=$(curl -4 -fsS --max-time 10 https://api.ipify.org || true)
DOMAIN_IP=$(getent ahostsv4 "$DOMAIN" | awk 'NR==1 {print $1}' || true)
if [ -n "$SERVER_IP" ] && [ "$SERVER_IP" != "$DOMAIN_IP" ]; then
  warn "$DOMAIN points to '${DOMAIN_IP:-nothing}', but this server is $SERVER_IP."
  warn "Add an A record $DOMAIN -> $SERVER_IP at your domain registrar."
  warn "The site starts anyway and gets its certificate by itself once the record works (often 5-30 minutes)."
fi

say "Building and starting the site (the first time takes 5-10 minutes)"
docker compose up -d --build
./deploy/wait-ready.sh

say "Turning on nightly backups and clean-ups"
cat >/etc/cron.d/lessons <<EOF
# Lessons app (made by deploy/setup.sh)
SHELL=/bin/sh
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
15 3 * * * root cd $DIR && ./deploy/backup.sh >>/var/log/lessons-backup.log 2>&1
40 4 * * 0 root docker image prune -f >/dev/null 2>&1; docker builder prune -f --filter until=168h >/dev/null 2>&1
EOF
chmod 644 /etc/cron.d/lessons

say "Done"
echo "Site:         https://$DOMAIN"
echo "Admin panel:  https://$DOMAIN/admin"
if [ "${NEW_SECRETS:-}" = 1 ]; then
  echo "Admin password (save it in a password manager now):"
  echo "    $(sed -n 's/^ADMIN_PASSWORD=//p' .env.production)"
else
  echo "Admin password: unchanged (see: grep ADMIN_PASSWORD $DIR/.env.production)"
fi
echo "Update later with:  cd $DIR && ./deploy/update.sh"
