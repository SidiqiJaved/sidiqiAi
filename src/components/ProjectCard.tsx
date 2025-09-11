import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { Project } from "../types";
import { trackPortfolioEvents } from "../utils/analytics";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleProjectClick = () => {
    if (project.link && project.link !== "#") {
      trackPortfolioEvents.projectClick(project.title);
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className="border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
      role="article"
    >
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-start sm:items-center space-x-4">
            <div 
              className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-200"
              role="img"
              aria-label={`${project.title} icon`}
            >
              <project.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-2">
                {project.description}
              </p>
              {project.tags && (
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      role="listitem"
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-blue-600 hover:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 self-end sm:self-auto"
            onClick={handleProjectClick}
            disabled={project.link === "#"}
            aria-label={
              project.link === "#" 
                ? `${project.title} - Coming soon` 
                : `View ${project.title} project details`
            }
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">
              {project.link === "#" ? "Coming soon" : "Open in new tab"}
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}