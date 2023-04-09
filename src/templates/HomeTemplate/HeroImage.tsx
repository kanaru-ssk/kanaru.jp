import Image from "next/image";
import Link from "next/link";

export const HeroImage = () => {
  return (
    <section className="relative h-screen font-serif">
      <div className="flex h-full items-center justify-center">
        <div className="pb-24">
          <p className="text-lg">I&apos;m</p>
          <h1 className="text-5xl font-bold sm:text-7xl">Kanaru Sasaki</h1>
          <p className="text-lg">Front-End Web Developer</p>
        </div>
      </div>

      <Link
        href="/#about"
        scroll={false}
        className="absolute bottom-24 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4"
      >
        <p className="text-lg">scroll</p>
        <Image
          src="/img/scroll-icon.svg"
          alt="scroll-icon"
          width={8}
          height={64}
        />
      </Link>
    </section>
  );
};
