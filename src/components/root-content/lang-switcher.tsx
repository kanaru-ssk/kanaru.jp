import Link from "next/link";
import { LANGS, type Lang } from "@/dictionaries";

type LangSwitcherProps = {
	currentLang: Lang;
};

export function LangSwitcher({ currentLang }: LangSwitcherProps) {
	return LANGS.map((lang) => (
		<Link
			key={lang}
			href={lang}
			aria-disabled={lang === currentLang}
			className="p-2"
		>
			{lang}
		</Link>
	));
}
