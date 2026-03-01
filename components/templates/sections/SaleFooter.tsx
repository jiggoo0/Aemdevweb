/**
 * [COMPONENT]: SALE_FOOTER v17.9.100 (THEME_ADAPTIVE)
 * [STRATEGY]: Final Trust Signal | Adaptive Color | Legal Compliance
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

interface SaleFooterProps {
  readonly brandName: string;
}

export function SaleFooter({ brandName }: SaleFooterProps) {
  // [PERFORMANCE]: ใช้ค่าคงที่ในปีปัจจุบันเพื่อป้องกัน Prerender Error ใน Next.js 16
  const currentYear = 2026;

  return (
    <footer
      className={cn(
        "relative overflow-hidden pt-16 pb-12 transition-all duration-300",
        "border-t border-[var(--border)]",
        "bg-[var(--surface-offset)] text-[var(--text-primary)]",
      )}
    >
      {/* Dynamic Glow Aura */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-brand-primary), transparent)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* 01. Branding Watermark */}
        <h4 className="mb-8 cursor-default text-4xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic opacity-[0.05] transition-opacity select-none md:text-6xl">
          {brandName}
        </h4>

        {/* 02. Trust Signals */}
        <div className="mb-10 flex flex-wrap justify-center gap-6 text-[var(--text-secondary)] opacity-60">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
            <IconRenderer name="Lock" size={12} />
            <span>256-bit SSL Secure</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
            <IconRenderer name="ShieldCheck" size={12} />
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>

        {/* 03. Legal Navigation */}
        <div className="mb-8 flex justify-center gap-6 text-xs font-bold tracking-[0.2em] text-[var(--text-secondary)] uppercase transition-colors">
          <Link
            href="/privacy"
            className="opacity-70 transition-all hover:text-[var(--color-brand-primary)] hover:underline hover:opacity-100"
          >
            Privacy
          </Link>

          <span className="opacity-20">•</span>

          <Link
            href="/terms"
            className="opacity-70 transition-all hover:text-[var(--color-brand-primary)] hover:underline hover:opacity-100"
          >
            Terms
          </Link>

          <span className="opacity-20">•</span>

          <Link
            href="/about"
            className="opacity-70 transition-all hover:text-[var(--color-brand-primary)] hover:underline hover:opacity-100"
          >
            Contact
          </Link>
        </div>

        {/* 04. Infrastructure Credit */}
        <div className="space-y-3">
          <p className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] uppercase opacity-60">
            © <span suppressHydrationWarning>{currentYear}</span> {brandName}. All Rights Reserved.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--border)] px-3 py-1 text-[9px] font-bold tracking-widest text-[var(--text-primary)] uppercase opacity-40 transition-opacity hover:opacity-100">
            <span>Powered by</span>
            <span className="font-black">{SITE_CONFIG.brandName} Engine</span>
            <span>v{SITE_CONFIG.project.version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
