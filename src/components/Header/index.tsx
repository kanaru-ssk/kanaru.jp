import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-12 items-center justify-between bg-white px-2 sm:h-20 sm:px-8">
      <Image
        src="/icon.svg"
        alt="icon"
        width={32}
        height={32}
        className="h-12 w-12 p-2 sm:h-20 sm:w-20"
      />
      <Nav />
    </header>
  );
};

export default Header;
