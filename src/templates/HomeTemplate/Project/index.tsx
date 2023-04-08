import { Heading2 } from "@/components/atoms/Heading2";
import { ProjectCardContainer } from "./ProjectCardContainer";

export const Projects = () => {
  return (
    <section id="projects" className="space-y-8">
      <div className="px-4">
        <Heading2>Projects</Heading2>
      </div>
      <ProjectCardContainer />
    </section>
  );
};
