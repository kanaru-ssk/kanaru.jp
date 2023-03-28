import ScrollIcon from "@/components/atoms/ScrollIcon";

const HeroImage = () => {
  return (
    <section className="relative h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="pb-24">
          <p className="text-lg">I&apos;m</p>
          <h1 className="text-5xl font-bold sm:text-7xl">Kanaru Sasaki</h1>
          <p className="text-lg">Front-End Web Developer</p>
        </div>
      </div>
      <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 animate-pulse flex-col items-center gap-4">
        <p className="text-lg">scroll</p>
        <ScrollIcon />
      </div>
    </section>
  );
};

export default HeroImage;
