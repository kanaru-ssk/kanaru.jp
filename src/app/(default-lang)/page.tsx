import { RootContent } from "@/components/root-content";
import { DEFAULT_LANG } from "@/libs/lang";

export default async function Page() {
	return <RootContent lang={DEFAULT_LANG} />;
}
