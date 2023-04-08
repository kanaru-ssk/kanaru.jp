import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Head } from "./Head";
import { Header } from "./Header";
import { HeroImage } from "./HeroImage";
import { Project } from "./Project";

export const HomeTemplate = () => {
  return (
    <>
      <Head />
      <Header />
      <HeroImage />
      <div className="mx-auto max-w-3xl space-y-24 py-16">
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
};
