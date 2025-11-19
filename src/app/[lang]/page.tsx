import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { RootContent } from "@/components/root-content";
import { env } from "@/env";
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
    <html lang={lang}>
      <head>
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
        <JsonLd title={dictionary.title} description={description} />
      </head>
      <body className="bg-neutral-900 text-white">
        <RootContent lang={lang} />
      </body>
    </html>
  );
}
