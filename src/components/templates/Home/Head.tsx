import NextHead from "next/head";

const Head = () => {
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
        content={`${process.env.NEXT_PUBLIC_URL}/ogp.webp`}
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#fff" />
      <link rel="icon" href="/icon.svg" />
      <link rel="apple-touch-icon" href="/icon-180.png" />
    </NextHead>
  );
};

export default Head;
