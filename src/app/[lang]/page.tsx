import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { RootContent } from "@/components/root-content";
import { createMetadata } from "@/libs/create-metadata";
import { getDictionary, LANGS, type Lang } from "@/libs/lang";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
	const { lang } = await params;
	const dictionary = await getDictionary(lang);

	return createMetadata(dictionary.title, dictionary.description, `/${lang}`);
}

export async function generateStaticParams() {
	return LANGS.map((lang) => ({ lang }));
}

export default async function Page({
	params,
}: {
	params: Promise<{ lang: Lang }>;
}) {
	const { lang } = await params;
	const dictionary = await getDictionary(lang);

	return (
		<html lang={lang}>
			<body className="bg-black text-white">
				<JsonLd title={dictionary.title} description={dictionary.description} />
				<RootContent lang={lang} />
			</body>
		</html>
	);
}
