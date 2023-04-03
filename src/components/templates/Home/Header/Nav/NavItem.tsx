import Link from "next/link";

type Props = {
  text: string;
  href: string;
  onClick?: () => void;
};

export const NavItem = ({ text, href, onClick }: Props) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      scroll={false}
      className="pl-6 font-serif text-lg font-medium sm:pl-0 sm:text-xl"
    >
      {text}
    </Link>
  );
};
