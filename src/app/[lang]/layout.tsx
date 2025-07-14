import "../globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { EMAIL } from "@/constants/email";
import { getDictionary, type Lang } from "@/libs/lang";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
	const { lang } = await params;
	const dictionary = await getDictionary(lang);
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
	const url = `${baseUrl}/${lang}`;

	return {
		title: dictionary.title,
		description: dictionary.description,
		openGraph: {
			type: "website",
			url: baseUrl,
			title: dictionary.title,
			description: dictionary.description,
			siteName: dictionary.title,
			images: [{ url: `${baseUrl}/ogp.png` }],
		},
		alternates: {
			canonical: url,
			languages: {
				en: `${baseUrl}/en`,
				ja: `${baseUrl}/ja`,
				"x-default": `${baseUrl}`,
			},
		},
	};
}

export default async function Layout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ lang: Lang }>;
}) {
	const { lang } = await params;
	const dictionary = await getDictionary(lang);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: dictionary.title,
		description: dictionary.description,
		email: EMAIL,
		logo: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.svg`,
	};

	return (
		<html lang={lang}>
			<body className="bg-black text-white">
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: for structured data
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
					}}
				/>
				{children}
			</body>
		</html>
	);
}
