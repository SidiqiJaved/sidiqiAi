import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleProjectClick = () => {
    if (project.link && project.link !== "#") {
      window.open(project.link, '_blank');
    }
  };

  return (
    <Card className="border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-start sm:items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-200">
              <project.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-2">
                {project.description}
              </p>
              {project.tags && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
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
            className="text-blue-600 hover:text-blue-700 self-end sm:self-auto"
            onClick={handleProjectClick}
            disabled={project.link === "#"}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}