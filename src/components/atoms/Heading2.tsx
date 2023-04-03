import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Heading2 = ({ children }: Props) => {
  return (
    <h2 className="font-serif text-2xl font-medium sm:text-center sm:text-4xl">
      {children}
    </h2>
  );
};
