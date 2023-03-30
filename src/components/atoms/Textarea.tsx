import { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ ...rest }: Props) => {
  return (
    <textarea
      className="h-48 w-full rounded-none border border-gray-400 p-3 font-sans focus:outline-gray-800"
      {...rest}
    ></textarea>
  );
};

export default Textarea;
