import Heading2 from "@/components/atoms/Heading2";
import { projects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
  return (
    <section id="projects">
      <Heading2>Projects</Heading2>
      <div>
        {projects.map((project) => {
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};
