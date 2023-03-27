import { ChangeEventHandler } from "react";
import Input from "@/components/atoms/Input";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputEmail = ({ value, onChange }: Props) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      type="email"
      placeholder="example@example.com"
      required
    />
  );
};

export default InputEmail;
