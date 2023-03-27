import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-4 bg-black py-8 text-white">
      <Link href="/" title="top">
        <Image src="/logo.svg" alt="logo" width={100} height={52} />
      </Link>
      <p className="text-center text-xs">&copy; 2022 Kanaru</p>
    </footer>
  );
};

export default Footer;
