import "../globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DEFAULT_LANG, getDictionary } from "@/libs/lang";

export async function generateMetadata(): Promise<Metadata> {
	const dictionary = await getDictionary(DEFAULT_LANG);

	return {
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

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang={DEFAULT_LANG}>
			<body className="bg-black text-white">{children}</body>
		</html>
	);
}
