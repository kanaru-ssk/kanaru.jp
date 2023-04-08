import { projects } from "@/constants/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectCardContainer = () => {
  return (
    <div className="space-y-16">
      {projects.map((project) => {
        return <ProjectCard key={project.title} {...project} />;
      })}
    </div>
  );
};
