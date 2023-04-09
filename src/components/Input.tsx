import { forwardRef, type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      ref={ref}
      className="w-full rounded-none border border-gray-400 p-3 font-sans focus:outline-gray-600"
      {...props}
    />
  );
});

Input.displayName = "Input";
