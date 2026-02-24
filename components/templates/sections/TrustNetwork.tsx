/**
 * [SECTION COMPONENT]: TRUST_NETWORK v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const TrustNetwork = ({ clientTrust }: { clientTrust: string }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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
    <section ref={ref} className="overflow-hidden py-32">
      <div className="container mx-auto space-y-16 px-4 text-center">
        <div
          className={cn(
            "mx-auto max-w-3xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <h3 className="text-2xl leading-tight font-black uppercase italic md:text-4xl">
            {clientTrust}
          </h3>
        </div>

        {/* Marquee or Logo Grid */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-12 opacity-30 contrast-125 grayscale transition-all delay-300 duration-1000 md:gap-24",
            visible ? "translate-y-0 opacity-30" : "translate-y-8 opacity-0",
          )}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-12 w-32 rounded-[var(--radius)] bg-[var(--foreground)] opacity-20"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
