"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
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
  const imgData = useMemo(
    () => (banner ? IMAGE_BLUR_DATA[banner as keyof typeof IMAGE_BLUR_DATA] || null : null),
    [banner],
  );

  const profileImgData = useMemo(
    () => (image ? IMAGE_BLUR_DATA[image as keyof typeof IMAGE_BLUR_DATA] || null : null),
    [image],
  );

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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 rounded-[var(--radius)] border-2 border-dashed border-[var(--brand-primary)]/30"
        />
        <div
          className={cn(
            "relative h-32 w-32 overflow-hidden border-[var(--border-width)] border-[var(--brand-primary)] bg-[var(--surface-card)] md:h-40 md:w-40",
            "rounded-[var(--radius)]",
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
        <div className="shadow-glow-sm absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-4 py-1 font-mono text-[9px] font-black tracking-widest text-black uppercase">
          Node_Active
        </div>
      </div>

      <div className="space-y-3">
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
