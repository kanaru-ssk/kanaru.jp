import Link from "next/link";
import { LANGS, type Lang } from "@/libs/lang";

type LangSwitcherProps = {
	currentLang: Lang;
};

export function LangSwitcher({ currentLang }: LangSwitcherProps) {
	return (
		<div className="space-x-2">
			{LANGS.map((lang) => (
				<Link
					key={lang}
					href={lang}
					className={lang === currentLang ? "underline" : ""}
				>
					{lang}
				</Link>
			))}
		</div>
	);
}
