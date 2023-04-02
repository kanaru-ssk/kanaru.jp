import Link from "next/link";
import LinkIcon from "@/components/atoms/LinkIcon";

const ResumeLink = () => {
  return (
    <Link
      href="/resume.pdf"
      scroll={false}
      className="flex w-fit items-center gap-4 border border-black py-2 px-6 font-serif font-medium sm:text-xl"
    >
      resume
      <LinkIcon />
    </Link>
  );
};

export default ResumeLink;
