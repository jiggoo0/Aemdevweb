/**
 * [SYSTEM COMPONENT]: UNIVERSAL_HERO_V2 v18.5.0 (SPECIALIST_INTEGRATED)
 * [STRATEGY]: Blueprint Depth | Fluid Typography | Tactical Glow
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

// --- Infrastructure & Core Data ---
import Link from "next/link";
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

  const theme = data?.theme || {
    primary: SITE_CONFIG.themeColor,
    gradient: SITE_CONFIG.themeColor,
    mode: "dark" as const,
  };

  const isDark = theme.mode === "dark";

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
      {/* --- INFRASTRUCTURE SHELL (Enhanced Visual Layer) --- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="bg-grid-white/[0.02] absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-40" />

        {/* [MESH_AURAS]: แสงฟุ้งที่เคลื่อนไหวได้แบบพริ้วไหว */}
        <div className="animate-aura-1 absolute top-[-20%] left-[-10%] h-[1200px] w-[1200px] rounded-full bg-[var(--color-brand-primary)]/5 opacity-40 blur-[200px]" />
        <div className="animate-aura-2 absolute right-[-10%] bottom-[-10%] h-[1000px] w-[1000px] rounded-full bg-[var(--color-brand-secondary)]/5 opacity-30 blur-[160px]" />

        {/* [DYNAMIC_GRADIENT]: ไล่สีที่นุ่มนวลตามโหมด */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-30",
            isDark
              ? "from-[var(--color-brand-primary)]/30"
              : "from-[var(--color-brand-primary)]/10",
          )}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* --- BREADCRUMB: Geographic Authority --- */}
        {data?.masterServiceUrl && data?.province && (
          <div
            className={cn(
              "mb-16 flex items-center gap-4 font-sans text-[10px] font-black tracking-[0.5em] uppercase opacity-40 transition-all hover:opacity-100",
              align === "center" ? "justify-center" : "justify-start",
              "text-[var(--text-primary)]",
            )}
          >
            <Link href="/" className="hover:text-[var(--color-brand-primary)]">
              HOME
            </Link>
            <div className="h-px w-8 bg-[var(--border)] opacity-30" />
            <Link href="/areas" className="hover:text-[var(--color-brand-primary)]">
              AREAS
            </Link>
            <div className="h-px w-8 bg-[var(--border)] opacity-30" />
            <span className="text-[var(--color-brand-primary)]">{data.province.toUpperCase()}</span>
          </div>
        )}

        {/* --- MAIN TITLE: Executive Typography --- */}
        <h1 className="mb-14 max-w-6xl text-5xl leading-[1.1] font-black tracking-tighter text-[var(--text-primary)] uppercase italic drop-shadow-sm sm:text-7xl lg:text-8xl xl:text-9xl">
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i % 2 === 1 ? "text-[var(--color-brand-primary)] drop-shadow-xl" : ""}
                >
                  {word}{" "}
                </span>
              ))
            : title}
        </h1>

        {/* --- SUBTITLE: Professional Narrative --- */}
        <div
          className={cn(
            "mb-20 max-w-4xl text-xl leading-relaxed font-medium text-[var(--text-secondary)] opacity-90 md:text-3xl",
            align === "center" ? "mx-auto" : "mr-auto text-left",
          )}
        >
          {description}
        </div>

        {/* --- ACTION SEQUENCE: Strategic Conversion --- */}
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
            className="group relative flex h-16 items-center justify-center overflow-hidden rounded-2xl bg-[var(--color-brand-primary)] px-10 text-[11px] font-black tracking-[0.3em] text-white uppercase shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95 md:h-18 md:px-14 md:text-xs"
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
              className="flex h-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-card)]/30 px-10 text-[11px] font-black tracking-[0.3em] text-[var(--text-primary)] uppercase backdrop-blur-md transition-all hover:border-[var(--color-brand-primary)]/50 hover:bg-[var(--surface-offset)] md:h-18 md:px-14 md:text-xs"
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
