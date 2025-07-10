export const LANG = {
	ENGLISH: "en",
	JAPANESE: "ja",
} as const;
export const LANGS = Object.values(LANG);
export type Lang = (typeof LANGS)[number];
