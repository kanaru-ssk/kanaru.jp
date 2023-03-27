import About from "./About";
import Contact from "./Contact";
import Head from "./Head";
import Header from "./Header";
import HeroImage from "./HeroImage";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Head />
      <Header />
      <HeroImage />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
