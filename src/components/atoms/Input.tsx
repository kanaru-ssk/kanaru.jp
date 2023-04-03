import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...rest }: Props) => {
  return (
    <input
      className="w-full rounded-none border border-gray-400 p-3 font-sans focus:outline-gray-800"
      {...rest}
    />
  );
};
