import NextHead from "next/head";

export const Head = () => {
  return (
    <NextHead>
      <title>Kanaru Sasaki</title>
      <meta
        name="description"
        content="Kanaru Sasaki is a software engineer who specializes in building exceptional digital experiences."
      />
      <meta property="og:title" content="Kanaru Sasaki" />
      <meta
        property="og:description"
        content="Kanaru Sasaki is a software engineer who specializes in building exceptional digital experiences."
      />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_URL}/ogp.png`}
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="theme-color" content="#fff" />
      <link rel="icon" href="/favicon.svg" />

      <meta name="application-name" content="Kanaru Sasaki" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Kanaru Sasaki" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="msapplication-tap-highlight" content="no" />
      <link rel="apple-touch-icon" href="/icon-180.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width viewport-fit=cover"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: process.env.NEXT_PUBLIC_URL,
            logo: process.env.NEXT_PUBLIC_URL + "/icon-512.png",
          }),
        }}
      />
    </NextHead>
  );
};
