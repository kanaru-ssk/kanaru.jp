import Image from "next/image";

export const ResumeLink = () => {
  return (
    <div className="flex w-fit items-center gap-4 border border-black py-2 px-6">
      resume
      <Image
        src="/img/external-link-icon.svg"
        alt="demo-link"
        width={10}
        height={10}
        className="mt-0.5"
      />
    </div>
  );
};
