import Link from "next/link";
import Heading3 from "@/components/atoms/Heading3";

type Props = {
  title: string;
  description: string;
  demoUrl: string;
  sourceUrl: string;
  skills: string[];
};

const ProjectCard = ({
  title,
  description,
  demoUrl,
  sourceUrl,
  skills,
}: Props) => {
  return (
    <div>
      <Heading3>{title}</Heading3>
      <p>{description}</p>
      <Link href={demoUrl}>demo</Link>
      <Link href={sourceUrl}>source</Link>
      <div className="flex gap-2 font-sans text-sm text-gray-400">
        {skills.map((skill) => {
          return <span key={skill}># {skill}</span>;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
