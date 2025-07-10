import Image from "next/image";
import ProfileImg from "@/assets/profile.png";
import { getDictionary, type Lang } from "@/libs/lang";
import { LangSwitcher } from "./lang-switcher";
import { Skills } from "./skills";
import { SocialLinks } from "./social-links";

type RootContentProps = {
	lang: Lang;
};

export async function RootContent({ lang }: RootContentProps) {
	const dictionary = await getDictionary(lang);

	return (
		<div className="space-y-2 max-w-3xl mx-auto p-5">
			<LangSwitcher currentLang={lang} />
			<h1>{dictionary.title}</h1>
			<Image
				src={ProfileImg}
				alt="profile"
				priority
				width={256}
				height={256}
				className="rounded-full my-8"
			/>
			<p>{dictionary.description}</p>
			<SocialLinks />
			<Skills />
		</div>
	);
}
