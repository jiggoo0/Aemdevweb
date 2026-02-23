/**
 * [COMPONENT]: SALE_FOOTER v17.9.100 (THEME_ADAPTIVE)
 * [STRATEGY]: Final Trust Signal | Adaptive Color | Legal Compliance
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import { ShieldCheck, Lock } from "lucide-react";

interface SaleFooterProps {
  readonly brandName: string;
  readonly isDark?: boolean; // [NEW]: รับค่าธีมเพื่อปรับสี Text
}

export function SaleFooter({ brandName, isDark = false }: SaleFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative overflow-hidden pt-16 pb-12 transition-colors duration-300",
        isDark
          ? "border-t border-white/10 text-white"
          : "border-t border-slate-100 bg-slate-50 text-slate-900",
      )}
    >
      {/* Decorative Glow (Dark Mode Only) */}
      {isDark && (
        <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* 01. Branding Watermark */}
        <h4
          className={cn(
            "mb-8 cursor-default text-4xl font-black tracking-tighter uppercase italic transition-opacity select-none md:text-6xl",
            isDark ? "text-white opacity-[0.03]" : "text-slate-900 opacity-[0.05]",
          )}
        >
          {brandName}
        </h4>

        {/* 02. Trust Signals */}
        <div className="mb-10 flex flex-wrap justify-center gap-6 opacity-60">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
            <Lock size={12} />
            <span>256-bit SSL Secure</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
            <ShieldCheck size={12} />
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>

        {/* 03. Legal Navigation */}
        <div
          className={cn(
            "mb-8 flex justify-center gap-6 text-xs font-bold tracking-[0.2em] uppercase transition-colors",
            isDark ? "text-slate-400" : "text-slate-500",
          )}
        >
          <Link
            href="/privacy"
            className="opacity-70 transition-all hover:text-current hover:underline hover:opacity-100"
          >
            Privacy
          </Link>

          <span className="opacity-20">•</span>

          <Link
            href="/terms"
            className="opacity-70 transition-all hover:text-current hover:underline hover:opacity-100"
          >
            Terms
          </Link>

          <span className="opacity-20">•</span>

          <Link
            href="/about"
            className="opacity-70 transition-all hover:text-current hover:underline hover:opacity-100"
          >
            Contact
          </Link>
        </div>

        {/* 04. Infrastructure Credit */}
        <div className="space-y-3">
          <p
            className={cn(
              "font-mono text-[10px] tracking-widest uppercase opacity-40",
              isDark ? "text-slate-300" : "text-slate-400",
            )}
          >
            © {currentYear} {brandName}. All Rights Reserved.
          </p>

          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[9px] font-bold tracking-widest uppercase opacity-30 transition-opacity hover:opacity-100",
              isDark ? "bg-white/5 text-white" : "bg-slate-200 text-slate-500",
            )}
          >
            <span>Powered by</span>
            <span className="font-black">{SITE_CONFIG.brandName} Engine</span>
            <span>v{SITE_CONFIG.project.version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
