import { EMAIL } from "@/constants/email";

export function SocialLinks() {
  return (
    <div className="space-x-4">
      <a
        href="https://github.com/kanaru-ssk"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        GitHub
      </a>
      <a
        href="https://note.com/kanaru_ssk"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        note
      </a>
      <a href={`mailto:${EMAIL}`} className="underline">
        {EMAIL}
      </a>
    </div>
  );
}
