import { ChangeEventHandler } from "react";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const InputName = ({ value, onChange }: Props) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className="border-dark-gray focus:outline-blue w-full rounded border p-3"
      type="text"
      placeholder="your name"
      required
    />
  );
};

export default InputName;
