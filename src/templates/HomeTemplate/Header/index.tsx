import Image from "next/image";
import Link from "next/link";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex h-12 w-full items-center justify-between pl-4 backdrop-blur sm:h-24 sm:px-8 md:px-16">
      <Link href="/" title="top">
        <Image
          src="/icon.svg"
          alt="icon"
          width={32}
          height={32}
          className="h-8 w-8 sm:h-12 sm:w-12"
        />
      </Link>
      <Nav />
    </header>
  );
};
