// see: https://nextjs.org/docs/app/guides/internationalization
import "server-only";

const dictionaries = {
	en: () => import("./en.json").then((module) => module.default),
	ja: () => import("./ja.json").then((module) => module.default),
};

export const getDictionary = async (lang: "en" | "ja") => dictionaries[lang]();
