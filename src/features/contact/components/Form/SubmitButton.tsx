import { LoadingIcon } from "@/components/LoadingIcon";

type InputStatus = "Entering" | "Ready" | "Sending";

type Props = {
  inputStatus: InputStatus;
};

export const SubmitButton = ({ inputStatus }: Props) => {
  return (
    <button
      type="submit"
      className={`${
        inputStatus === "Ready"
          ? "bg-black text-white"
          : "border border-gray-400 bg-white text-gray-400"
      } py-3 px-16 focus:border-black focus:outline-black`}
    >
      {inputStatus !== "Sending" && "send"}
      {inputStatus === "Sending" && <LoadingIcon />}
    </button>
  );
};
