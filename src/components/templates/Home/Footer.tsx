import Image from "next/image";
import Link from "next/link";
import { links } from "@/constants/links";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-12 bg-black py-16 text-white">
      <Link href="/" title="top">
        <Image src="/logo.svg" alt="logo" width={104} height={48} />
      </Link>
      <div className="flex gap-16">
        {links.map((link) => {
          const {
            href,
            name,
            image: { src, alt, width, height },
          } = link;
          return (
            <Link href={href} key={name}>
              <Image src={src} alt={alt} width={width} height={height} />
            </Link>
          );
        })}
      </div>
      <p className="text-center text-xs">&copy; 2022 Kanaru</p>
    </footer>
  );
};

export default Footer;