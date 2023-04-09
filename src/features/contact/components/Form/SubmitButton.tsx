import { LoadingIcon } from "@/components/LoadingIcon";

type Props = {
  isValid: boolean;
  isSubmitting: boolean;
};

export const SubmitButton = ({ isValid, isSubmitting }: Props) => {
  return (
    <button
      type="submit"
      className={`${
        isValid
          ? "bg-black text-white"
          : "border border-gray-400 bg-white text-gray-400"
      } py-3 px-16`}
      aria-disabled={!isValid}
    >
      {isSubmitting ? <LoadingIcon /> : "send"}
    </button>
  );
};
