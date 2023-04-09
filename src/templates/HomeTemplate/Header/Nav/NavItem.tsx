import Link from "next/link";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  onClick?: () => void;
};

export const NavItem = ({ children, href, onClick }: Props) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      scroll={false}
      className="font-serif text-xl font-medium"
    >
      {children}
    </Link>
  );
};
