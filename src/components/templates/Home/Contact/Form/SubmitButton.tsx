import LoadingIcon from "@/components/atoms/LoadingIcon";

type InputStatus = "Entering" | "Ready" | "Sending";

type Props = {
  inputStatus: InputStatus;
};

const SubmitButton = ({ inputStatus }: Props) => {
  return (
    <button
      type="submit"
      className={
        `${
          inputStatus === "Ready"
            ? "bg-gray sm:hover:bg-light-gray sm:hover:text-dark-gray sm:focus:bg-dark-gray text-black sm:focus:text-white "
            : "border-gray text-dark-gray border bg-white "
        }` + "h-12 rounded-full px-16 "
      }
    >
      {inputStatus !== "Sending" && "Send"}
      {inputStatus === "Sending" && <LoadingIcon />}
    </button>
  );
};

export default SubmitButton;
