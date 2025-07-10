import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getDictionary, type Lang } from "@/libs/lang";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
	const lang = (await params).lang;
	const dictionary = await getDictionary(lang);

	return {
		alternates: {
			canonical: "https://kanaru.jp/en",
			languages: {
				en: "https://kanaru.jp/en",
				ja: "https://kanaru.jp/ja",
			},
		},
		title: dictionary.title,
		description: dictionary.description,
		openGraph: {
			type: "website",
			url: "https://kanaru.jp",
			title: dictionary.title,
			description: dictionary.description,
			siteName: dictionary.title,
			images: [{ url: "https://kanaru.jp/ogp.png" }],
		},
	};
}

export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ lang: Lang }>;
}) {
	return (
		<html lang={(await params).lang}>
			<body className="bg-black text-white">{children}</body>
		</html>
	);
}
