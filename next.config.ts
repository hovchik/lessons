import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  serverExternalPackages: ["@libsql/client", "libsql"],
  // Behind Caddy (docker-compose.yml) the proxy compresses pages, which frees about 13% of the
  // app's CPU for rendering. Run on its own (npm start, start.mjs), Next compresses them itself.
  compress: process.env.NEXT_COMPRESS !== "off",
};

export default withNextIntl(nextConfig);
