import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Heading2 = ({ children }: Props) => {
  return <h2 className="font-serif text-2xl font-medium">{children}</h2>;
};

export default Heading2;