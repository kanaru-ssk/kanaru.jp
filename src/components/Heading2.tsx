import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Heading2 = ({ children }: Props) => {
  return <h2 className="font-serif text-3xl font-semibold">{children}</h2>;
};
