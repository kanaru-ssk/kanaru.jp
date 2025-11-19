import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import type { AstroIntegration } from "astro";

export default defineConfig({
  site: "https://kanaru.jp",
  integrations: [
    sitemap({
      lastmod: new Date(),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          ja: "ja-JP",
        },
      },
    }),
    stripTagWhitespace(),
  ],
});

/**
 * dist 以下の .html を再帰的に走査して
 * `>\s+<` を `><` に置き換える integration
 * 公式で提供されていないので自前で実装
 * 参考: https://github.com/withastro/astro/issues/6011
 */
function stripTagWhitespace(): AstroIntegration {
  return {
    name: "strip-tag-whitespace",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        await processDir(outDir);
      },
    },
  };

  async function processDir(dirPath: string): Promise<void> {
    const entries = await readdir(dirPath);
    await Promise.all(
      entries.map(async (name) => {
        const fullPath = join(dirPath, name);
        const s = await stat(fullPath);
        if (s.isDirectory()) {
          await processDir(fullPath);
        } else if (name.endsWith(".html")) {
          const src = await readFile(fullPath, "utf8");
          const out = src.replace(/>\s+</g, "><");
          if (out !== src) {
            await writeFile(fullPath, out, "utf8");
          }
        }
      })
    );
  }
}
