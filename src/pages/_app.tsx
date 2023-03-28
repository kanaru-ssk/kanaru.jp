import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${cormorant.variable} font-serif`}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
