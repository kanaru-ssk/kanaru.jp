import Image from "next/image";
import LogoImg from "@/assets/logo.svg";
import ProfileImg from "@/assets/profile.png";
import { getDictionary, type Lang } from "@/libs/lang";
import { LangSwitcher } from "./lang-switcher";
import { SocialLinks } from "./social-links";

type RootContentProps = {
	lang: Lang;
};

export async function RootContent({ lang }: RootContentProps) {
	const dictionary = await getDictionary(lang);

	return (
		<div className="space-y-2 max-w-3xl mx-auto p-5">
			<div className="flex justify-between">
				<Image src={LogoImg} alt="logo" priority width={104} height={48} />
				<LangSwitcher currentLang={lang} />
			</div>
			<Image
				src={ProfileImg}
				alt="profile"
				priority
				width={256}
				height={256}
				className="rounded-full my-12"
			/>
			<h1 className="font-bold text-3xl">{dictionary.title}</h1>
			<p className="whitespace-pre-wrap">{dictionary.description}</p>
			<SocialLinks />
		</div>
	);
}
