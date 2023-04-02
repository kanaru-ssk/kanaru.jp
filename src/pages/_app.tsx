import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

const helvetica = localFont({
  src: "./Helvetica.ttf",
  variable: "--font-helvetica",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${cormorant.variable} ${helvetica.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
