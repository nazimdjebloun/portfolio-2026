"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink, Github, CheckCircle2, ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

        {/* Carousel */}
        <div className="px-4 pb-3 shrink-0">
          <div className="rounded-lg overflow-hidden border">
            <Carousel className="w-full" opts={{ loop: hasImages }}>
              <CarouselContent>
                {hasImages ? (
                  project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[200px] md:h-[250px] w-full bg-muted">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 800px"
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))
                ) : (
                  <CarouselItem>
                    <div className="relative h-[200px] md:h-[250px] w-full bg-muted flex items-center justify-center">
                      <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                  </CarouselItem>
                )}
              </CarouselContent>
              {hasImages && project.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-2 h-8 w-8 bg-background/90 hover:bg-background transition-none" />
                  <CarouselNext className="right-2 h-8 w-8 bg-background/90 hover:bg-background transition-none" />
                </>
              )}
            </Carousel>
          </div>
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="h-50 px-4">
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
