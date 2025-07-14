import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { RootContent } from "@/components/root-content";
import { createMetadata } from "@/libs/create-metadata";
import { DEFAULT_LANG, getDictionary } from "@/libs/lang";

export async function generateMetadata(): Promise<Metadata> {
	const dictionary = await getDictionary(DEFAULT_LANG);

	return createMetadata(dictionary.title, dictionary.description);
}

export default async function Page() {
	const dictionary = await getDictionary(DEFAULT_LANG);

	return (
		<html lang={DEFAULT_LANG}>
			<body className="bg-black text-white">
				<JsonLd title={dictionary.title} description={dictionary.description} />
				<RootContent lang={DEFAULT_LANG} />
			</body>
		</html>
	);
}
