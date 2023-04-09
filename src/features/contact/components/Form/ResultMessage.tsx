import { FormResult } from ".";

type Props = {
  status: FormResult | undefined;
};

export const ResultMessage = ({ status }: Props) => {
  if (!status) return null;

  return (
    <div
      className={`${
        status.isSuccess ? "text-blue-600" : "text-red-600"
      } bg-gray-100 py-4 px-8`}
    >
      {status.message}
    </div>
  );
};
