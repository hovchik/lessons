import type { MetadataRoute } from "next";

/**
 * Web app manifest so the site can be added to a phone or tablet home screen
 * and opens full-screen like an app. Served at /manifest.webmanifest.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lessons · Դասեր · Уроки",
    short_name: "Lessons",
    description: "Grades 1–12 courses in English, Armenian and Russian.",
    start_url: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#eef2ff",
    theme_color: "#4f46e5",
    lang: "en",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
