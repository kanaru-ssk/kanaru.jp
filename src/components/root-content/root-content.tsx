import Image from "next/image";
import ProfileImg from "@/assets/profile.webp";
import { getDictionary, type Lang } from "@/libs/lang";
import { LangSwitcher } from "./lang-switcher";
import { SocialLinks } from "./social-links";

type RootContentProps = {
	lang: Lang;
};

export async function RootContent({ lang }: RootContentProps) {
	const dictionary = await getDictionary(lang);

	return (
		<div className="min-h-svh flex flex-col max-w-3xl mx-auto">
			<header className="flex justify-between items-center p-5">
				<Image
					src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.svg`}
					alt="logo"
					priority
					fetchPriority="high"
					width={104}
					height={48}
				/>
				<LangSwitcher currentLang={lang} />
			</header>

			<main className="flex-1 p-5 space-y-4">
				<Image
					src={ProfileImg}
					alt="profile"
					priority
					fetchPriority="high"
					width={256}
					height={256}
					className="rounded-full my-12"
				/>
				<h1 className="font-bold text-3xl">{dictionary.title}</h1>
				<p className="whitespace-pre-wrap">{dictionary.description}</p>
				<SocialLinks />
			</main>

			<footer className="text-sm p-8 text-center">
				&copy; 2025 {dictionary.title}
			</footer>
		</div>
	);
}
