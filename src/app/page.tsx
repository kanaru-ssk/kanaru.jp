import type { Metadata } from "next";
import { BaseLayout } from "@/components/base-layout";
import { RootContent } from "@/components/root-content";
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
    <BaseLayout
      lang={DEFAULT_LANG}
      title={dictionary.title}
      description={description}
    >
      <RootContent title={dictionary.title} description={description} />
    </BaseLayout>
  );
}
