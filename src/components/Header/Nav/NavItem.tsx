import Link from "next/link";

type Props = {
  text: string;
  href: string;
  onClick?: () => void;
};

const NavItem = ({ text, href, onClick }: Props) => {
  return (
    <Link href={href} onClick={onClick} scroll={false} className="p-2 text-lg">
      {text}
    </Link>
  );
};

export default NavItem;
