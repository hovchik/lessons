# Production image: builds the app, then seeds the database and starts the server on every start.
# Re-seeding is safe: it upserts course content and keeps pupils, their progress and admin edits.
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
# Dev dependencies stay: the seed script runs with tsx at start-up.
RUN npm ci --include=dev --no-audit --no-fund
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build && rm -rf .next/cache

FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 NEXT_COMPRESS=off PORT=3000 DATABASE_PATH=/data/lessons.db
COPY --from=build /app ./
# The app runs as the unprivileged "node" user, so a bug in it can't take over the container.
# Start-up hands /data to that user first (a volume made by an older image belongs to root),
# then drops root. Next may write its cache under .next.
RUN mkdir -p /data && chown node:node /data && chown -R node:node /app/.next
VOLUME /data
EXPOSE 3000
CMD ["sh", "-c", "chown -R node:node /data && exec setpriv --reuid=node --regid=node --init-groups env HOME=/home/node sh -c 'npm run db:seed && exec node server.mjs'"]
