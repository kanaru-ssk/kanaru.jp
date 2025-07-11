// see: https://nextjs.org/docs/app/guides/internationalization
import "server-only";

const dictionaries = {
	en: () => import("./en.json").then((module) => module.default),
	ja: () => import("./ja.json").then((module) => module.default),
};

export async function getDictionary(lang: "en" | "ja") {
	const dictionary = await dictionaries[lang]();

	// Rendering years dynamically
	dictionary.description = dictionary.description.replace(
		"$YEARS_OF_EXPERIENCE",
		getYearsOfExperience().toString(),
	);

	return dictionary;
}

function getYearsOfExperience() {
	const careerStartedAt = new Date("2021-02");
	const now = new Date();
	const diffMZ = now.getTime() - careerStartedAt.getTime();
	const yearsOfExperience = Math.floor(diffMZ / (1000 * 60 * 60 * 24 * 365));
	return yearsOfExperience;
}
