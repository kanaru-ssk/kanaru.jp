import { forwardRef, type TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  return (
    <textarea
      ref={ref}
      className="h-48 w-full rounded-none border border-gray-400 p-3 font-sans focus:outline-gray-600"
      {...props}
    ></textarea>
  );
});

Textarea.displayName = "TextareaTextarea";
