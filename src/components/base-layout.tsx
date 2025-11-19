import { GoogleTagManager } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { EMAIL } from "@/constants/email";
import { env } from "@/env";
import { DEFAULT_LANG, LANGS, type Lang } from "@/libs/lang";

type BaseLayoutProps = {
  lang: Lang;
  title: string;
  description: string;
  children: ReactNode;
};

export async function BaseLayout({
  lang,
  title,
  description,
  children,
}: BaseLayoutProps) {
  return (
    <html lang={lang}>
      {/** biome-ignore lint/style/noHeadElement: ignore */}
      <head>
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
        <JsonLd title={title} description={description} />
      </head>

      <body className="bg-neutral-900 text-white">
        <div className="mx-auto flex min-h-svh max-w-3xl flex-col">
          <header className="flex items-center justify-between p-5">
            <Image
              src={`${env.NEXT_PUBLIC_BASE_URL}/logo.svg`}
              alt="logo"
              priority
              fetchPriority="high"
              width={104}
              height={48}
            />
            <LangSwitcher currentLang={lang} />
          </header>

          {children}

          <footer className="p-8 text-center text-sm">
            &copy; 2025 {title}
          </footer>
        </div>
      </body>
    </html>
  );
}

type JsonLdProps = {
  title: string;
  description: string;
};

function JsonLd({ title, description }: JsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: title,
    description: description,
    email: EMAIL,
    logo: `${env.NEXT_PUBLIC_BASE_URL}/logo.svg`,
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: for structured data
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

type LangSwitcherProps = {
  currentLang: Lang;
};

function LangSwitcher({ currentLang }: LangSwitcherProps) {
  return (
    <div>
      {LANGS.map((lang) => (
        <Link
          key={lang}
          hrefLang={lang}
          href={lang === DEFAULT_LANG ? "/" : `/${lang}`}
          prefetch
          className={`p-2 ${lang === currentLang ? "cursor-default" : "text-neutral-300 underline"}`}
        >
          {lang}
        </Link>
      ))}
    </div>
  );
}
