import { ChangeEventHandler } from "react";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

const InputMessage = ({ value, onChange }: Props) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="border-dark-gray focus:outline-blue h-48 w-full rounded border p-3"
      placeholder="Hello"
      required
    ></textarea>
  );
};

export default InputMessage;
