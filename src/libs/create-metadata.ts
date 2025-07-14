import type { Metadata } from "next";
import { LANGS } from "@/libs/lang";

export function createMetadata(
	title: string,
	description: string,
	pathname: string = "",
): Metadata {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
	const url = `${baseUrl}${pathname}`;
	const languages = Object.fromEntries(
		LANGS.map((lang) => [lang, `${baseUrl}/${lang}`]),
	);

	return {
		title: title,
		description: description,
		openGraph: {
			type: "website",
			url: baseUrl,
			title: title,
			description: description,
			siteName: title,
			images: [{ url: `${baseUrl}/ogp.png` }],
		},
		alternates: {
			canonical: url,
			languages: {
				...languages,
				"x-default": `${baseUrl}`,
			},
		},
	};
}
