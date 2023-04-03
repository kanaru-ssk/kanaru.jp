import Link from "next/link";
import ScrollIcon from "@/components/atoms/ScrollIcon";

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
        className="absolute bottom-24 left-1/2 flex -translate-x-1/2 animate-pulse flex-col items-center gap-4"
      >
        <p className="text-lg">scroll</p>
        <ScrollIcon />
      </Link>
    </section>
  );
};
