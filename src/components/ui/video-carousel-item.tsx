"use client";

import React from "react";
import { CarouselItem } from "./carousel";
import { cn } from "@/lib/utils";

interface VideoCarouselItemProps {
  videoId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
  controls?: boolean;
  modestbranding?: boolean;
  rel?: boolean;
}

export function VideoCarouselItem({
  videoId,
  title,
  className,
  autoplay = false,
  controls = true,
  modestbranding = true,
  rel = false,
  ...props
}: VideoCarouselItemProps) {
  const embedUrl = React.useMemo(() => {
    const params = new URLSearchParams({
      rel: rel ? "1" : "0",
      modestbranding: modestbranding ? "1" : "0",
      autoplay: autoplay ? "1" : "0",
      controls: controls ? "1" : "0",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, [videoId, autoplay, controls, modestbranding, rel]);

  return (
    <CarouselItem className={cn("w-full", className)} {...props}>
      <div className="aspect-video w-full overflow-hidden rounded-md h-full">
        <iframe
          className="w-full h-full border-0"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </CarouselItem>
  );
}
