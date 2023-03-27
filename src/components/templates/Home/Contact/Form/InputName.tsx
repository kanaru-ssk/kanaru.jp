import { ChangeEventHandler } from "react";
import Input from "@/components/atoms/Input";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputName = ({ value, onChange }: Props) => {
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

export default InputName;
