import Image from "next/image";
import Link from "next/link";

export const ResumeLink = () => {
  return (
    <Link
      href="/resume.pdf"
      scroll={false}
      className="flex w-fit items-center gap-4 border border-black py-2 px-6 font-serif font-medium sm:text-xl"
    >
      resume
      <Image
        src="/img/external-link-icon.svg"
        alt="demo-link"
        width={10}
        height={10}
        className="mt-0.5"
      />
    </Link>
  );
};
