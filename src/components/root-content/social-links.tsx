import { EMAIL } from "@/constants/email";

const links = [
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

export function SocialLinks() {
  return (
    <div className="space-x-4">
      {links.map((link) => (
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
