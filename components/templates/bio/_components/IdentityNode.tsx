"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IdentityNodeProps {
  name: string;
  description: string;
  image?: string;
}

export const IdentityNode = ({ name, description, image }: IdentityNodeProps) => {
  return (
    <div className="flex flex-col items-center space-y-8 text-center">
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
