import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Section = ({ children }: Props) => {
  return <section className="w-full p-4">{children}</section>;
};

export default Section;
