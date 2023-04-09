import Image from "next/image";
import Link from "next/link";
import { Heading3 } from "@/components/Heading3";
import { Skills } from "@/components/Skills";
import { type Project } from "@/constants/projects";

export const ProjectCard = ({
  title,
  description,
  imageSrc,
  demoUrl,
  sourceUrl,
  skills,
}: Project) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Image
        src={imageSrc}
        width={340}
        height={685}
        alt="project-image"
        className="mx-auto h-auto w-full"
      />
      <div className="space-y-4 px-4">
        <Heading3>{title}</Heading3>
        <p>{description}</p>
        <div className="ml-1 flex items-center gap-8">
          <Link href={demoUrl}>
            <Image
              src="/img/external-link-icon.svg"
              alt="demo-link"
              width={18}
              height={18}
            />
          </Link>
          <Link href={sourceUrl}>
            <Image
              src="/img/github-icon-black.svg"
              alt="source-code-link"
              width={21}
              height={21}
            />
          </Link>
        </div>

        <Skills skills={skills} />
      </div>
    </div>
  );
};
