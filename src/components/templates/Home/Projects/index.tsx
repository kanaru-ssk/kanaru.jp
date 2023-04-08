import { Heading2 } from "@/components/atoms/Heading2";
import { projects } from "@/constants/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="px-4">
        <Heading2>Projects</Heading2>
      </div>
      <div className="space-y-16 pt-8">
        {projects.map((project) => {
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};
