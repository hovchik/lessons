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
VOLUME /data
EXPOSE 3000
CMD ["sh", "-c", "npm run db:seed && exec node server.mjs"]
