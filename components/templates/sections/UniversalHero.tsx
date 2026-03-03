/**
 * [SYSTEM COMPONENT]: UNIVERSAL_HERO_V2 v18.5.0 (SPECIALIST_INTEGRATED)
 * [STRATEGY]: Blueprint Depth | Fluid Typography | Tactical Glow
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

// --- Infrastructure & Core Data ---
import { memo } from "react";
import type { BaseTemplateProps } from "@/types";
import { cn } from "@/lib/utils";
import TrustBadge from "@/components/shared/TrustBadge";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";

interface UniversalHeroProps extends Partial<BaseTemplateProps> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  primaryActionLabel?: string;
  primaryHref?: string;
  secondaryActionLabel?: string;
  secondaryHref?: string;
  align?: "left" | "center";
}

const UniversalHero = ({
  data,
  title: directTitle,
  subtitle: directSubtitle,
  description: directDescription,
  primaryActionLabel,
  primaryHref,
  secondaryActionLabel,
  secondaryHref,
  align = "center",
}: UniversalHeroProps) => {
  const title = directTitle || data?.title || SITE_CONFIG.hero.title;
  const description =
    directDescription || directSubtitle || data?.description || SITE_CONFIG.hero.description;

  return (
    <section
      className={cn(
        "relative overflow-hidden transition-all duration-1000",
        "flex min-h-[85dvh] flex-col justify-center", // [AESTHETIC]: ความสูงระดับพรีเมียม
        "bg-[var(--surface-main)] text-[var(--text-primary)]",
        align === "center" ? "items-center text-center" : "items-start text-left",
        "px-6 py-32 md:py-52 lg:py-64", // [SPACE]: ระยะห่างระดับ Flagship
      )}
    >
      {/* --- INFRASTRUCTURE SHELL (Enhanced Visual Layer using Template DNA) --- */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* [DYNAMIC_AURAS]: แสงฟุ้งที่เคลื่อนไหวได้ เปลี่ยนตาม DNA และสีหลักธุรกิจ */}
        <div
          className="animate-aura absolute top-[-20%] left-[-10%] h-[1200px] w-[1200px] rounded-full opacity-[var(--dna-opacity,0.1)] blur-[var(--dna-blur,100px)] transition-all duration-1000"
          style={{ backgroundColor: "var(--color-brand-primary)" }}
        />
        <div
          className="animate-aura absolute right-[-10%] bottom-[-10%] h-[1000px] w-[1000px] rounded-full opacity-[calc(var(--dna-opacity,0.1)*0.7)] blur-[var(--dna-blur,100px)] transition-all duration-1000"
          style={{ backgroundColor: "var(--color-brand-secondary)" }}
        />

        {/* [IDENTITY_GRID]: ตารางฉากหลังที่ความเข้มเปลี่ยนตาม DNA */}
        <div
          className="absolute inset-0 opacity-[var(--dna-grid,0.05)]"
          style={{
            backgroundImage: "radial-gradient(var(--color-brand-primary) 1.5px, transparent 1.5px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* --- MAIN TITLE: Executive Typography with Brand Injection --- */}
        <h1 className="xl:text-10xl mb-14 max-w-6xl text-5xl leading-[1.05] font-black tracking-tighter text-[var(--text-primary)] uppercase italic drop-shadow-sm sm:text-7xl lg:text-8xl">
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i % 2 === 1
                      ? "text-[var(--color-brand-primary)] drop-shadow-[0_0_15px_oklch(var(--brand-primary-raw)/0.2)]"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))
            : title}
        </h1>

        {/* --- SUBTITLE: Professional Narrative with Semantic Mapping --- */}
        <div
          className={cn(
            "mb-20 max-w-4xl text-xl leading-relaxed font-medium text-[var(--text-secondary)] opacity-90 md:text-3xl",
            align === "center" ? "mx-auto" : "mr-auto text-left",
          )}
        >
          {description}
        </div>

        {/* --- ACTION SEQUENCE: Strategic Conversion with Brand-Aware Buttons --- */}
        <div
          className={cn(
            "flex flex-wrap gap-6 md:gap-8",
            align === "center" ? "justify-center" : "justify-start",
          )}
        >
          <a
            href={primaryHref || SITE_CONFIG.links.line}
            target="_blank"
            rel="noopener noreferrer"
            className="group shadow-glow relative flex h-16 items-center justify-center overflow-hidden rounded-[var(--radius-button,1rem)] bg-[var(--color-brand-primary)] px-10 text-[11px] font-black tracking-[0.3em] text-[var(--color-brand-primary-fg)] uppercase transition-all hover:scale-105 hover:brightness-110 active:scale-95 md:h-18 md:px-14 md:text-xs"
          >
            <span className="relative z-10 flex items-center gap-3">
              {primaryActionLabel || "Contact Specialist"}
              <IconRenderer
                name="ArrowUpRight"
                size={22}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
            <div className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transition-transform duration-1000 group-hover:translate-x-full" />
          </a>

          {(secondaryActionLabel || data?.secondaryAction) && (
            <a
              href={secondaryHref || "#"}
              className="flex h-16 items-center justify-center rounded-[var(--radius-button,1rem)] border border-[var(--border)] bg-[var(--surface-card)]/30 px-10 text-[11px] font-black tracking-[0.3em] text-[var(--text-primary)] uppercase backdrop-blur-md transition-all hover:border-[var(--color-brand-primary)]/50 hover:bg-[var(--surface-offset)] md:h-18 md:px-14 md:text-xs"
            >
              {secondaryActionLabel || data?.secondaryAction?.label || "Explore Solutions"}
            </a>
          )}
        </div>

        {/* --- SOCIAL PROOF LAYER --- */}
        {data?.localContext?.socialProof && (
          <div className="border-border/10 mt-16 flex border-t pt-10">
            <TrustBadge
              rating={data.localContext.socialProof.rating}
              reviewCount={data.localContext.socialProof.reviewCount}
              platform="Google"
            />
          </div>
        )}
      </div>

      {/* Atmospheric Aura */}
      <div className="bg-brand-primary/5 pointer-events-none absolute top-0 -right-1/4 h-[600px] w-[600px] rounded-full blur-[140px]" />
    </section>
  );
};

export default memo(UniversalHero);
