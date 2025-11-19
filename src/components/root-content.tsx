import Image from "next/image";
import ProfileImg from "@/assets/profile.webp";
import { EMAIL } from "@/constants/email";

type RootContentProps = {
  title: string;
  description: string;
};

export async function RootContent({ title, description }: RootContentProps) {
  return (
    <main className="flex-1 space-y-4 p-5">
      <Image
        src={ProfileImg}
        alt="profile"
        priority
        fetchPriority="high"
        width={256}
        height={256}
        className="my-12 rounded-full"
      />
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="whitespace-pre-wrap">{description}</p>
      <SocialLinks />
    </main>
  );
}

const LINKS = [
  {
    href: "https://github.com/kanaru-ssk",
    label: "GitHub",
  },
  {
    href: "https://x.com/kanaru_ssk",
    label: "X",
  },
  {
    href: "https://note.com/kanaru_ssk",
    label: "note",
  },
];

function SocialLinks() {
  return (
    <div className="space-x-4">
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {link.label}
        </a>
      ))}
      <a href={`mailto:${EMAIL}`} className="underline">
        {EMAIL}
      </a>
    </div>
  );
}
