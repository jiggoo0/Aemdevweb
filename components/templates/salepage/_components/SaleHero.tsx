/**
 * [COMPONENT]: SALE_HERO v17.9.100 (THEME_ADAPTIVE)
 * [STRATEGY]: Transparent Base | Glassmorphism Container | LCP Optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import Image from "next/image";
import { MoveRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SaleHeroProps {
  readonly title: string | ReactNode;
  readonly description: string;
  readonly image?: string;
  readonly accentColor?: string;
  readonly className?: string; // [FIX]: รับ Class สีตัวอักษรจาก Parent
}

export const SaleHero = ({
  title,
  description,
  image,
  accentColor = "#e11d48",
  className,
}: SaleHeroProps) => {
  return (
    <section className={cn("relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="items-center lg:grid lg:grid-cols-12 lg:gap-16">
          {/* [01] COPYWRITING COLUMN (THE HOOK) */}
          <div className="relative z-10 lg:col-span-7 xl:col-span-6">
            {/* Dynamic Badge: Branding Isolation */}
            <div
              style={{
                backgroundColor: `${accentColor}15`, // 15% Opacity
                color: accentColor,
                borderColor: `${accentColor}40`,
              }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-black tracking-[0.2em] uppercase backdrop-blur-sm"
            >
              <div
                className="h-1.5 w-1.5 animate-pulse rounded-full shadow-[0_0_10px_currentColor]"
                style={{ backgroundColor: accentColor }}
              />
              <span>Limited Time Offer</span>
            </div>

            <h1 className="text-4xl leading-[1.1] font-black tracking-tighter uppercase italic drop-shadow-lg sm:text-5xl xl:text-7xl">
              {title}
            </h1>

            <p className="font-thai mt-6 max-w-2xl text-lg leading-relaxed opacity-85 mix-blend-plus-lighter">
              {description}
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              {/* Primary CTA: High-Contrast Interaction */}
              <a
                href="#order"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 0 20px -5px ${accentColor}`,
                }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-10 py-5 text-xl font-black text-white transition-all hover:scale-105 hover:shadow-2xl hover:brightness-110 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  สั่งซื้อทันที
                  <MoveRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                </span>
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              </a>

              {/* Social Proof */}
              <div className="flex items-center gap-4 px-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white/10 bg-white/20 backdrop-blur-md"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg leading-none font-black opacity-90">1,200+</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">
                    Happy Clients
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* [02] VISUAL COLUMN (THE PRODUCT - LCP DOMINANCE) */}
          <div className="relative mt-16 lg:col-span-5 lg:mt-0 xl:col-span-6">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              {/* Dynamic Glow Element (Backlight) */}
              <div
                style={{ backgroundColor: accentColor }}
                className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
              />

              {/* Glassmorphism Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                {image ? (
                  <Image
                    src={image}
                    alt={typeof title === "string" ? title : "Product Showcase"}
                    fill
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center opacity-30">
                    <div className="mb-4 h-20 w-20 animate-pulse rounded-full bg-white/10" />
                    <span className="font-mono text-xs tracking-widest uppercase">
                      Visual_Placeholder
                    </span>
                  </div>
                )}
              </div>

              {/* Floating Trust Shield (Glass Style) */}
              <div className="shadow-pro-xl absolute -bottom-6 -left-6 hidden items-center gap-4 rounded-[2rem] border border-white/20 bg-white/10 p-5 backdrop-blur-xl md:flex">
                <div
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: `0 0 15px ${accentColor}40`,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                >
                  <ShieldCheck size={24} strokeWidth={3} />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase opacity-50">
                    100% Guaranteed
                  </p>
                  <p className="text-sm font-bold opacity-90">คุณภาพระดับสากล</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
