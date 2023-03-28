import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Heading2 = ({ children }: Props) => {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
};

export default Heading2;
