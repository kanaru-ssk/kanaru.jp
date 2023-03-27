import { ChangeEventHandler } from "react";
import Textarea from "@/components/atoms/Textarea";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

const InputMessage = ({ value, onChange }: Props) => {
  return (
    <Textarea
      value={value}
      onChange={onChange}
      placeholder="Hello"
      required
    ></Textarea>
  );
};

export default InputMessage;
