import { type ReactNode } from "react";
import { Heading3 } from "@/components/Heading3";

type Props = {
  label: string;
  children: ReactNode;
};

export const FormLabel = ({ label, children }: Props) => {
  return (
    <label className="flex flex-col sm:flex-row">
      <div className="w-28 shrink-0 py-1 sm:py-2">
        <Heading3>{label}</Heading3>
      </div>
      {children}
    </label>
  );
};
