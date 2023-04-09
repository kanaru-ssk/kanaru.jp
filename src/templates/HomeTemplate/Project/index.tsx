import { Heading2 } from "@/components/Heading2";
import { projects } from "@/constants/projects";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <section id="project" className="space-y-8">
      <div className="px-4">
        <Heading2>Project</Heading2>
      </div>
      <div className="space-y-16 sm:px-4">
        {projects.map((project) => {
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};
