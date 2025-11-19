import Link from "next/link";
import { DEFAULT_LANG, LANGS, type Lang } from "@/libs/lang";

type LangSwitcherProps = {
  currentLang: Lang;
};

export function LangSwitcher({ currentLang }: LangSwitcherProps) {
  return (
    <div>
      {LANGS.map((lang) => (
        <Link
          key={lang}
          hrefLang={lang}
          href={lang === DEFAULT_LANG ? "/" : lang}
          prefetch
          className={`p-2 ${lang === currentLang ? "cursor-default" : "text-neutral-300 underline"}`}
        >
          {lang}
        </Link>
      ))}
    </div>
  );
}
