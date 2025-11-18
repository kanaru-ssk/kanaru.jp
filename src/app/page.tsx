import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { RootContent } from "@/components/root-content";
import { env } from "@/env";
import { createDescription } from "@/libs/create-description";
import { createMetadata } from "@/libs/create-metadata";
import { DEFAULT_LANG, getDictionary } from "@/libs/lang";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(DEFAULT_LANG);

  const description = createDescription(
    dictionary.descriptionBefore,
    dictionary.descriptionAfter,
  );
  return createMetadata(dictionary.title, description);
}

export default async function Page() {
  const dictionary = await getDictionary(DEFAULT_LANG);
  const description = createDescription(
    dictionary.descriptionBefore,
    dictionary.descriptionAfter,
  );

  return (
    <html lang={DEFAULT_LANG}>
      <head>
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
        <JsonLd title={dictionary.title} description={description} />
      </head>

      <body className="bg-black text-white">
        <RootContent lang={DEFAULT_LANG} />
      </body>
    </html>
  );
}
