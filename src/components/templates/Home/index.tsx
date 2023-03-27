import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";
import HeroImage from "./HeroImage";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Head />
      <Header />
      <div className="mx-auto max-w-xl space-y-16 px-4 pb-32">
        <HeroImage />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
