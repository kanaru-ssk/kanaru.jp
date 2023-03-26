import About from "@/components/About";
import Contact from "@/components/Contact";
import Head from "@/components/Head";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import Projects from "@/components/Projects";

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
