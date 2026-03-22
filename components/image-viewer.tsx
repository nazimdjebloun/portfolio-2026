"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ImageViewerProps {
  images: string[];
  title: string;
}

export function ImageViewer({ images, title }: ImageViewerProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div 
        className="cursor-pointer"
        onClick={() => openViewer(0)}
      >
        <div className="rounded-lg overflow-hidden border">
          <Carousel className="w-full" opts={{ loop: images.length > 1 }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[180px] md:h-[220px] w-full bg-muted">
                    <Image
                      src={image}
                      alt={`${title} screenshot ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="left-2 h-8 w-8 bg-background/90 hover:bg-background transition-none" />
                <CarouselNext className="right-2 h-8 w-8 bg-background/90 hover:bg-background transition-none" />
              </>
            )}
          </Carousel>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <div className="relative h-[85vh] w-full flex items-center justify-center">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-50 text-white hover:bg-white/20"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Previous button */}
            {images.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 z-50 text-white hover:bg-white/20 h-12 w-12"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            )}

            {/* Main image */}
            <div className="relative h-full w-full p-4">
              <Image
                src={images[currentIndex]}
                alt={`${title} - ${currentIndex + 1}`}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Next button */}
            {images.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 z-50 text-white hover:bg-white/20 h-12 w-12"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            )}
          </div>

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 p-4 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-primary scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Image counter */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";