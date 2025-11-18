import Image from "next/image";
import ProfileImg from "@/assets/profile.webp";
import { env } from "@/env";
import { getDictionary, type Lang } from "@/libs/lang";
import { Description } from "./description";
import { LangSwitcher } from "./lang-switcher";
import { SocialLinks } from "./social-links";

type RootContentProps = {
  lang: Lang;
};

export async function RootContent({ lang }: RootContentProps) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col">
      <header className="flex items-center justify-between p-5">
        <Image
          src={`${env.NEXT_PUBLIC_BASE_URL}/logo.svg`}
          alt="logo"
          priority
          fetchPriority="high"
          width={104}
          height={48}
        />
        <LangSwitcher currentLang={lang} />
      </header>

      <main className="flex-1 space-y-4 p-5">
        <Image
          src={ProfileImg}
          alt="profile"
          priority
          fetchPriority="high"
          width={256}
          height={256}
          className="my-12 rounded-full"
        />
        <h1 className="font-bold text-3xl">{dictionary.title}</h1>
        <Description
          descriptionBefore={dictionary.descriptionBefore}
          descriptionAfter={dictionary.descriptionAfter}
        />
        <SocialLinks />
      </main>

      <footer className="p-8 text-center text-sm">
        &copy; 2025 {dictionary.title}
      </footer>
    </div>
  );
}
