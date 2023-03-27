import ScrollIcon from "@/components/atoms/ScrollIcon";

const HeroImage = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-between py-32">
      <div className="">
        <p className="text-gray-500">I&apos;m</p>
        <h1 className="font-serif text-4xl font-bold">Kanaru Sasaki</h1>
        <p className="text-gray-500">Front-End Web Developer</p>
      </div>
      <div className="flex animate-pulse flex-col items-center gap-2">
        <p className="font-serif text-lg">scroll</p>
        <ScrollIcon />
      </div>
    </section>
  );
};

export default HeroImage;
