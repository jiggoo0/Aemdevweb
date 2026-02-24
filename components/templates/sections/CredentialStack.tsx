/**
 * [SECTION COMPONENT]: CREDENTIAL_STACK v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const CredentialStack = ({ trustTitle }: { readonly trustTitle?: string }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="space-y-6 overflow-hidden border-[var(--foreground)]/5 border-y-[var(--border-width)] py-6 text-center"
    >
      <p
        className={cn(
          "font-mono text-[9px] font-black tracking-[0.4em] uppercase italic opacity-40 transition-all duration-1000",
          visible ? "translate-y-0 opacity-40" : "translate-y-4 opacity-0",
        )}
      >
        {trustTitle || "// Authorized_Experience"}
      </p>
      <div
        className={cn(
          "flex flex-wrap justify-center gap-8 opacity-30 contrast-125 grayscale transition-all delay-300 duration-1000",
          visible ? "translate-y-0 opacity-30" : "translate-y-4 opacity-0",
        )}
      >
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-6 w-20 rounded-sm bg-[var(--foreground)] opacity-20" />
        ))}
      </div>
    </div>
  );
};
