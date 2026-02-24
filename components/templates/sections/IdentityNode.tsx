/**
 * [SECTION COMPONENT]: IDENTITY_NODE v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Reveal | CSS Keyframes | Zero-Framer
 */

"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";

interface IdentityNodeProps {
  name: string;
  description: string;
  image?: string;
  banner?: string;
}

export const IdentityNode = ({ name, description, image, banner }: IdentityNodeProps) => {
  const imgData = banner ? IMAGE_BLUR_DATA[banner as keyof typeof IMAGE_BLUR_DATA] || null : null;
  const profileImgData = image
    ? IMAGE_BLUR_DATA[image as keyof typeof IMAGE_BLUR_DATA] || null
    : null;

  return (
    <div className="flex w-full flex-col items-center space-y-8 text-center">
      {banner && (
        <div className="fixed inset-0 -z-10 scale-150 overflow-hidden opacity-[0.03] blur-3xl grayscale">
          <Image
            src={banner}
            alt=""
            fill
            className="object-cover"
            placeholder={imgData?.blurDataURL ? "blur" : "empty"}
            blurDataURL={imgData?.blurDataURL}
          />
        </div>
      )}
      {/* Profile Node with Scanning Animation */}
      <div className="relative">
        <div className="absolute -inset-4 animate-[spin_8s_linear_infinite] rounded-[var(--radius)] border-2 border-dashed border-[var(--brand-primary)]/30" />
        <div
          className={cn(
            "relative h-32 w-32 overflow-hidden border-[var(--border-width)] border-[var(--brand-primary)] bg-[var(--surface-card)] md:h-40 md:w-40",
            "rounded-[var(--radius)]",
            "animate-in fade-in zoom-in-90 fill-mode-both duration-1000",
          )}
        >
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              placeholder={profileImgData?.blurDataURL ? "blur" : "empty"}
              blurDataURL={profileImgData?.blurDataURL}
              sizes="(max-width: 768px) 128px, 160px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-4xl font-black italic opacity-20">
              {name.charAt(0)}
            </div>
          )}
        </div>

        {/* Active Status Badge */}
        <div className="shadow-glow-sm absolute -bottom-2 left-1/2 -translate-x-1/2 animate-pulse rounded-full bg-green-500 px-4 py-1 font-mono text-[9px] font-black tracking-widest text-black uppercase">
          Node_Active
        </div>
      </div>

      <div
        className={cn(
          "space-y-3",
          "animate-in fade-in slide-in-from-bottom-4 fill-mode-both delay-300 duration-1000",
        )}
      >
        <h1 className="font-[family-name:var(--font-primary)] text-4xl font-black tracking-tighter uppercase italic md:text-5xl">
          {name}
        </h1>
        <p className="mx-auto max-w-sm text-sm leading-relaxed font-medium text-[var(--text-primary)]/60 italic md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
