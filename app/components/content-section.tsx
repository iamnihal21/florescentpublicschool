"use client";

import Image from "next/image";
import { Button } from "@/public/UI/button";

interface ContentSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export function ContentSection({
  title,
  description,
  buttonText,
  imageUrl,
  imageAlt,
  reverse = false,
}: ContentSectionProps) {
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Background Left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 opacity-15 pointer-events-none">
        <Image
          src="/UI/logo_outline_smooth_grey.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Background Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-64 h-64 md:w-80 md:h-80 opacity-25 pointer-events-none">
        <Image
          src="/UI/logo_outline_smooth_grey.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-8 md:gap-12 lg:gap-16`}
        >
          {/* Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>

            {buttonText && (
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {buttonText}
              </Button>
            )}
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative aspect-[-4/3] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
