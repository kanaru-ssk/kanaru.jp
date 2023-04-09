type Props = {
  rootState?: Record<
    string,
    Partial<{
      type: string | number;
      message: string;
    }>
  > &
    Partial<{
      type: string | number;
      message: string;
    }>;
};

export const ResultMessage = ({ rootState }: Props) => {
  if (!rootState) return null;

  return (
    <div
      className={`${
        rootState.type === "success" ? "text-blue-600" : "text-red-600"
      } bg-gray-100 py-4 px-8`}
    >
      {rootState.message}
    </div>
  );
};
