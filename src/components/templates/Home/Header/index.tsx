import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex h-12 w-full items-center justify-between px-2 sm:h-24 sm:px-8 md:h-36 md:px-16">
      <Link href="/" title="top">
        <Image
          src="/icon.svg"
          alt="icon"
          width={32}
          height={32}
          className="h-12 w-12 p-2 sm:h-12 sm:w-12 md:h-16 md:w-16"
        />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
