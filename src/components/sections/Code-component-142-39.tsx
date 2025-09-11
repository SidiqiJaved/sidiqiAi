import { ProjectCard } from "../ProjectCard";
import { projects } from "../../data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-900 px-2">
          Portfolio / Projects
        </h2>
        
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}