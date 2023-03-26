import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const fontMinion = localFont({
  src: "./MinionVariableConcept.otf",
  variable: "--font-minion",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={fontMinion.variable}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
