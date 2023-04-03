import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";
import HeroImage from "./HeroImage";
import Projects from "./Projects";

export const Home = () => {
  return (
    <>
      <Head />
      <Header />
      <HeroImage />
      <div className="mx-auto max-w-3xl space-y-16 px-4 pb-16">
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};
