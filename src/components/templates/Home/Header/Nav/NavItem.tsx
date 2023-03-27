import Link from "next/link";

type Props = {
  text: string;
  href: string;
  onClick?: () => void;
};

const NavItem = ({ text, href, onClick }: Props) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      scroll={false}
      className="py-2 px-6 font-serif text-xl font-medium"
    >
      {text}
    </Link>
  );
};

export default NavItem;
