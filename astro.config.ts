import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kanaru.jp",
  integrations: [
    sitemap({
      lastmod: new Date(),
      i18n: {
        defaultLocale: "en",
        locales: { en: "en-US", ja: "ja-JP" },
      },
    }),
  ],
});
