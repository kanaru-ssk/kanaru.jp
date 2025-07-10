import Image from "next/image";
import ProfileImg from "@/assets/profile.png";
import { getDictionary, type Lang } from "@/libs/lang";
import { LangSwitcher } from "./lang-switcher";

type RootContentProps = {
	lang: Lang;
};

const EMAIL = "kanaru.ssk@gmail.com";

export async function RootContent({ lang }: RootContentProps) {
	const dictionary = await getDictionary(lang);

	return (
		<div className="space-y-2 max-w-3xl mx-auto p-5">
			<LangSwitcher currentLang={lang} />
			<h1>{dictionary.title}</h1>
			<Image
				src={ProfileImg}
				alt="profile"
				width={256}
				height={256}
				className="rounded-full my-8"
			/>
			<p>{dictionary.description}</p>
			<div className="space-x-4">
				<a
					href="https://github.com/kanaru-ssk"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"
				>
					GitHub
				</a>
				<a href={`mailto:${EMAIL}`} className="underline">
					{EMAIL}
				</a>
			</div>
		</div>
	);
}
