"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ImageViewer } from "@/components/image-viewer";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  images: string[];
  features: string[];
}

interface ProjectDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
  if (!project) return null;

  const hasImages = project.images && project.images.length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 flex flex-col gap-0">
        <DialogHeader className="p-4 pb-2 shrink-0">
          <DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-sm">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        {/* Image Carousel with click to view fullscreen */}
        <div className="px-4 pb-3 shrink-0">
          {hasImages ? (
            <ImageViewer images={project.images} title={project.title} />
          ) : (
            <div className="rounded-lg border bg-muted h-[180px] md:h-[220px] flex items-center justify-center">
              <span className="text-muted-foreground text-sm">No images available</span>
            </div>
          )}
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="h-[300px] px-4">
          <div className="space-y-4 pr-6 pb-4">
            {/* Tech Stack */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs px-2 py-0.5">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-sm mb-2">Features</h3>
              <div className="grid gap-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Links - outside scroll area */}
        <div className="flex justify-center gap-2 px-4 pb-4 shrink-0 border-t pt-4">
          {project.repo && (
            <Button asChild size="sm">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github className="h-3 w-3 mr-1.5" />
                Repo
              </a>
            </Button>
          )}
          {project.link && (
            <Button asChild size="sm" variant="secondary">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3 mr-1.5" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}