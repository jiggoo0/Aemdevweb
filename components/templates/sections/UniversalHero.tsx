/**
 * [SYSTEM COMPONENT]: UNIVERSAL_HERO_V2 v18.5.0 (SPECIALIST_INTEGRATED)
 * [STRATEGY]: Blueprint Depth | Fluid Typography | Tactical Glow
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { memo } from "react";
import type { BaseTemplateProps } from "@/types/template-props";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
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
  const templateSlug = data?.templateSlug;

  const theme = data?.theme || {
    primary: SITE_CONFIG.themeColor,
    gradient: SITE_CONFIG.themeColor,
    mode: "dark" as const,
  };

  const isDark = theme.mode === "dark";

  const getHeroIcon = () => {
    const iconSize = 48; // md:h-12 is 48px
    switch (templateSlug) {
      case "salepage":
      case "seo-agency":
        return <IconRenderer name="Target" size={iconSize} />;
      case "local":
      case "local-authority":
        return <IconRenderer name="MapPin" size={iconSize} />;
      case "corporate":
        return <IconRenderer name="Building2" size={iconSize} />;
      case "catalog":
        return <IconRenderer name="FileText" size={iconSize} />;
      default:
        return <IconRenderer name="Zap" size={iconSize} />;
    }
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b transition-all duration-700",
        "flex min-h-[70vh] flex-col justify-center", // Increased height for prominence
        isDark ? "bg-[#020617] text-white" : "bg-surface-main text-text-primary",
        align === "center" ? "items-center text-center" : "items-start text-left",
        "px-4 py-24 md:py-40", // More breathing room
      )}
      style={{ borderColor: "var(--border)" }}
    >
      {/* --- INFRASTRUCTURE SHELL (The Visual Layer) --- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.04]" />
        {/* Modern Depth Aura */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b via-transparent to-transparent",
            isDark ? "from-[var(--brand-primary)]/15" : "from-[var(--brand-primary)]/5",
          )}
        />
        <div className="absolute top-0 left-1/2 h-[500px] w-full -translate-x-1/2 rounded-full bg-[var(--brand-primary)]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* --- AUTHORITY MARKER: The Specialist Identity --- */}
        <div
          className={cn(
            "mb-12 flex items-center gap-5 transition-all duration-700",
            align === "center" ? "justify-center" : "justify-start",
          )}
        >
          <div className="bg-surface-offset border-border/50 shadow-pro-lg flex h-20 w-20 items-center justify-center rounded-3xl border text-[var(--brand-primary)] ring-1 ring-[var(--brand-primary)]/20 backdrop-blur-2xl">
            {getHeroIcon()}
          </div>
          <div className="flex flex-col items-start gap-1 text-left">
            <span className="font-sans text-[10px] font-bold tracking-[0.3em] text-[var(--brand-primary)] uppercase opacity-90">
              Expertise_Engine_Active
            </span>
            <div className="h-[2px] w-12 bg-[var(--brand-primary)]/40" />
          </div>
        </div>

        {/* --- MAIN TITLE: Executive Typography --- */}
        <h1 className="mb-10 max-w-5xl text-5xl leading-[0.95] font-black tracking-tight sm:text-7xl lg:text-8xl">
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i % 2 === 1 ? "text-[var(--brand-primary)] drop-shadow-sm" : ""}
                >
                  {word}{" "}
                </span>
              ))
            : title}
        </h1>

        {/* --- SUBTITLE: Professional Insight --- */}
        <div
          className={cn(
            "text-text-secondary mb-14 max-w-3xl text-xl leading-relaxed font-medium opacity-90 md:text-2xl",
            align === "center" ? "mx-auto" : "mr-auto",
          )}
        >
          {description}
        </div>

        {/* --- ACTION SEQUENCE: High-Conversion Flow --- */}
        <div
          className={cn(
            "flex flex-wrap gap-6",
            align === "center" ? "justify-center" : "justify-start",
          )}
        >
          <Button
            size="lg"
            href={primaryHref || SITE_CONFIG.links.line}
            className="shadow-glow-md h-16 rounded-2xl px-10 text-[12px] font-bold tracking-widest uppercase"
          >
            <span className="flex items-center gap-2">
              {primaryActionLabel || "Start Your Project"}
              <IconRenderer name="ArrowRight" size={20} />
            </span>
          </Button>

          {(secondaryActionLabel || data?.secondaryAction) && (
            <Button
              variant="outline"
              href={secondaryHref || "#"}
              className="border-border hover:border-brand-primary/60 h-16 rounded-2xl px-10 text-[12px] font-bold tracking-widest uppercase backdrop-blur-sm"
            >
              {secondaryActionLabel || data?.secondaryAction?.label || "View Solutions"}
            </Button>
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
