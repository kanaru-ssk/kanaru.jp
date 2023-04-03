import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Heading3 = ({ children }: Props) => {
  return <h3 className="inline text-lg font-medium">{children}</h3>;
};
