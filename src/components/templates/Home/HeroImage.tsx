import ScrollIcon from "@/components/atoms/ScrollIcon";

const HeroImage = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-32">
        <div>
          <p className="text-gray-500">I&apos;m</p>
          <h1 className="font-serif text-4xl font-bold">Kanaru Sasaki</h1>
          <p className="text-gray-500">Front-End Web Developer</p>
        </div>
        <div className="flex animate-pulse flex-col items-center gap-2">
          <p className="font-serif text-lg">scroll</p>
          <ScrollIcon />
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
