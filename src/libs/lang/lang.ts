export const LANG = {
	ENGLISH: "en",
	JAPANESE: "ja",
} as const;
export const LANGS = Object.values(LANG);
export const DEFAULT_LANG = LANG.ENGLISH;
export type Lang = (typeof LANGS)[number];
