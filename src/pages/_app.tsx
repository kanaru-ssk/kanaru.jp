import "@/styles/globals.css";
import { type AppProps } from "next/app";
import { Cormorant_Garamond } from "next/font/google";
import Script from "next/script";

const garamond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-94SQK7H0Y1"
      />
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-94SQK7H0Y1', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <main className={`${garamond.variable} font-sans font-light`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
