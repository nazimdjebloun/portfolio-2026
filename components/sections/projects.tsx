"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderGit2, ExternalLink } from "lucide-react";
import { projects, Project } from "@/lib/data";

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center gap-2">
        <FolderGit2 className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
            onClick={() => onProjectClick(project)}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <Button variant="ghost" size="icon" asChild className="opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                  <a href={project.repo || project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <CardDescription className="text-sm">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-medium">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View details <ExternalLink className="h-3 w-3 ml-1" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
