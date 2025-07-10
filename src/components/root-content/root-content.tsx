import { getDictionary, type Lang } from "@/dictionaries";
import { LangSwitcher } from "./lang-switcher";

type RootContentProps = {
	lang: Lang;
};

export async function RootContent({ lang }: RootContentProps) {
	const dictionary = await getDictionary(lang);

	return (
		<div>
			<LangSwitcher currentLang={lang} />
			<h1>{dictionary.title}</h1>
			<p>{dictionary.description}</p>
			<a href="https://github.com/kanaru-ssk">GitHub</a>
		</div>
	);
}
