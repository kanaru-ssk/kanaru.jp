import { RootContent } from "@/components/root-content";
import { LANGS, type Lang } from "@/libs/lang";

export async function generateStaticParams() {
	return LANGS.map((lang) => ({ lang }));
}

export default async function Page({
	params,
}: {
	params: Promise<{ lang: Lang }>;
}) {
	const { lang } = await params;
	return <RootContent lang={lang} />;
}
