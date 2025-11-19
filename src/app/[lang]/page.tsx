import type { Metadata } from "next";
import { BaseLayout } from "@/components/base-layout";
import { RootContent } from "@/components/root-content";
import { createDescription } from "@/libs/create-description";
import { createMetadata } from "@/libs/create-metadata";
import { getDictionary, LANGS } from "@/libs/lang";
import { toLang } from "@/libs/lang/to-lang";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = toLang((await params).lang);
  const dictionary = await getDictionary(lang);

  const description = createDescription(
    dictionary.descriptionBefore,
    dictionary.descriptionAfter,
  );
  return createMetadata(dictionary.title, description, `/${lang}`);
}

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const lang = toLang((await params).lang);
  const dictionary = await getDictionary(lang);
  const description = createDescription(
    dictionary.descriptionBefore,
    dictionary.descriptionAfter,
  );

  return (
    <BaseLayout lang={lang} title={dictionary.title} description={description}>
      <RootContent title={dictionary.title} description={description} />
    </BaseLayout>
  );
}
