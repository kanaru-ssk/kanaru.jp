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
        <svg width="12" height="72" fill="#000">
          <path d="M4 52H12L0 72V0H4V52Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroImage;
