import { ProjectCard } from "../ProjectCard";
import { projects } from "../../data/portfolio";

export function ProjectsSection() {
  return (
    <section 
      id="projects" 
      className="py-16 sm:py-20 px-4 sm:px-6"
      aria-label="Portfolio projects showcase"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">
            Portfolio / Projects
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Featured projects showcasing AI-powered solutions for small businesses, healthcare, and education sectors.
          </p>
        </header>
        
        <div 
          className="space-y-6 sm:space-y-8"
          role="list"
          aria-label="Project portfolio"
        >
          {projects.map((project, index) => (
            <article 
              key={project.id}
              role="listitem"
              aria-label={`Project ${index + 1}: ${project.title}`}
            >
              <ProjectCard project={project} />
            </article>
          ))}
        </div>

        {/* Structured data for projects */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Javed Sidiqi's Projects",
            "description": "Portfolio of AI-powered solutions for small businesses, healthcare, and education",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
              "@type": "CreativeWork",
              "position": index + 1,
              "name": project.title,
              "description": project.description,
              "creator": {
                "@type": "Person",
                "name": "Javed Sidiqi"
              },
              "keywords": project.tags?.join(", ") || ""
            }))
          })}
        </script>
      </div>
    </section>
  );
}