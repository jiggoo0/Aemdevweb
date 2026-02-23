import React from "react";
import Image from "next/image";
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";

interface RegionalGalleryProps {
  images: readonly string[];
}

export const RegionalGallery = ({ images }: RegionalGalleryProps) => {
  if (!images || images.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-12 space-y-4">
        <p className="font-mono text-xs font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase">
          Regional_Visual_Assets
        </p>
        <h2 className="font-[family-name:var(--font-primary)] text-4xl font-black uppercase italic md:text-6xl">
          Visual <span className="text-[var(--brand-primary)]">Context.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {images.map((img, idx) => {
          const imgData = IMAGE_BLUR_DATA[img as keyof typeof IMAGE_BLUR_DATA] || null;
          return (
            <div
              key={idx}
              className="group relative aspect-video overflow-hidden rounded-[var(--radius)] border border-[var(--foreground)]/5"
            >
              <Image
                src={img}
                alt={`Regional Visual ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder={imgData?.blurDataURL ? "blur" : "empty"}
                blurDataURL={imgData?.blurDataURL}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
