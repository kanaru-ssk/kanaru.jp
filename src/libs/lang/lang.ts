export const LANG = {
  ENGLISH: "en",
  JAPANESE: "ja",
} as const;
export const LANGS = Object.values(LANG);
export const DEFAULT_LANG = LANG.ENGLISH;
export type Lang = (typeof LANGS)[number];
export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && LANGS.includes(value as Lang);
}
