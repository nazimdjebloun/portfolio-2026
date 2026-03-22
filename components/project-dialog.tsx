"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Maximize2,
  Image as Img,
} from "lucide-react"
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
} from "@/components/ui/carousel"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

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

function FullscreenViewer({
  images,
  title,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: {
  images: string[]
  title: string
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onSelect: (index: number) => void
}) {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col bg-black">
      {/* Top bar */}
      <div className="flex items-center justify-between bg-linear-to-b from-black/80 to-transparent p-4">
        <span className="font-medium text-white">
          {currentIndex + 1} / {images.length}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-8 w-8" />
        </Button>
      </div>

      {/* Main image */}
      <div className="relative flex flex-1 items-center justify-center p-4">
        {images.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 h-14 w-14 text-white hover:bg-white/20"
            onClick={onPrev}
          >
            <ChevronLeft className="h-10 w-10" />
          </Button>
        )}

        <div className="relative h-full w-full max-w-6xl">
          <Image
            src={images[currentIndex]}
            alt={`${title} - ${currentIndex + 1}`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {images.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 h-14 w-14 text-white hover:bg-white/20"
            onClick={onNext}
          >
            <ChevronRight className="h-10 w-10" />
          </Button>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 overflow-x-auto p-4 pb-8">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                index === currentIndex
                  ? "border-white"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`Thumb ${index + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function ProjectDialog({ project, open, onOpenChange }: ProjectDialogProps) {
  const [fullscreenOpen, setFullscreenOpen] = useState(false)
  const [fullscreenIndex, setFullscreenIndex] = useState(0)

  const hasImages = project && project.images && project.images.length > 0

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index)
    setFullscreenOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeFullscreen = () => {
    setFullscreenOpen(false)
    document.body.style.overflow = ""
  }

  const goToPrev = useCallback(() => {
    if (!project) return
    setFullscreenIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }, [project])

  const goToNext = useCallback(() => {
    if (!project) return
    setFullscreenIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }, [project])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!fullscreenOpen) return
      if (e.key === "Escape") closeFullscreen()
      if (e.key === "ArrowLeft") goToPrev()
      if (e.key === "ArrowRight") goToNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [fullscreenOpen, goToPrev, goToNext])

  if (!project) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="flex max-w-4xl flex-col gap-0 p-0">
          <DialogHeader className="shrink-0 p-4 pb-2">
            <DialogTitle className="text-xl font-bold">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-sm">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          {/* Image Carousel */}
          <div className="shrink-0 px-4 pb-3">
            {hasImages ? (
              <div className="group relative">
                <div className="overflow-hidden rounded-lg border">
                  <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative h-[180px] w-full bg-muted md:h-[220px]">
                            <Image
                              src={image}
                              alt={`${project.title} ${index + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 800px"
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.images.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2 z-10 h-8 w-8 bg-background/90 hover:bg-background" />
                        <CarouselNext className="right-2 z-10 h-8 w-8 bg-background/90 hover:bg-background" />
                      </>
                    )}
                  </Carousel>
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-2 right-2 z-20 h-8 w-8 shadow-md"
                  onClick={() => openFullscreen(0)}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex h-[180px] flex-col items-center justify-center gap-2 rounded-lg border bg-muted md:h-[220px]">
                <Img className="h-10 w-10 text-muted-foreground/50" />
                <span className="text-sm text-muted-foreground">
                  No images available
                </span>
              </div>
            )}
          </div>

          {/* Scrollable Content */}
          <ScrollArea className="h-[300px] px-4">
            <div className="space-y-4 pr-6 pb-4">
              <div>
                <h3 className="mb-2 text-sm font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="px-2 py-0.5 text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold">Features</h3>
                <div className="grid gap-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Links */}
          <div className="flex shrink-0 justify-center gap-2 border-t px-4 pt-4 pb-4">
            {project.repo && (
              <Button asChild size="sm">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1.5 h-3 w-3" /> Repo
                </a>
              </Button>
            )}
            {project.link && (
              <Button asChild size="sm" variant="secondary">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1.5 h-3 w-3" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {fullscreenOpen && (
        <FullscreenViewer
          images={project.images}
          title={project.title}
          currentIndex={fullscreenIndex}
          onClose={closeFullscreen}
          onPrev={goToPrev}
          onNext={goToNext}
          onSelect={setFullscreenIndex}
        />
      )}
    </>
  )
}