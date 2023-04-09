import { ChangeEventHandler } from "react";
import { Input } from "@/components/Input";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const InputName = ({ value, onChange }: Props) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      type="text"
      placeholder="your name"
      required
    />
  );
};
