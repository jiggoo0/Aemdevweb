/**
 * [COMPONENT]: SALE_NAVBAR v17.9.100 (THEME_ADAPTIVE)
 * [STRATEGY]: Sticky Glassmorphism | Dynamic Branding | Conversion Action
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Route } from "next";

// [INTERFACE]: รับ Theme Object เพื่อปรับสีให้ตรงกับ SalePageTemplate
interface SaleNavbarProps {
  readonly title: string;
  readonly action?: {
    label: string;
    href: string;
  };
  readonly theme?: {
    primary: string;
    background: string;
  };
}

export function SaleNavbar({ title, action, theme }: SaleNavbarProps) {
  // [LOGIC]: ตรวจสอบว่าเป็น Dark Mode หรือไม่ (ตาม Convention bg-[#...])
  const isDark = theme?.background?.includes("bg-[#") || false;
  const accentColor = theme?.primary || "#0f172a"; // Default Slate-900

  return (
    <nav
      className={cn(
        "sticky top-0 z-[100] border-b backdrop-blur-xl transition-all duration-300",
        // [THEME_SWITCHER]: ปรับสีพื้นหลัง Navbar ตามโหมด
        isDark
          ? "border-white/10 bg-black/20 text-white supports-[backdrop-filter]:bg-black/10"
          : "border-slate-200 bg-white/80 text-slate-900 supports-[backdrop-filter]:bg-white/60",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand Identity */}
        <Link
          href="/"
          className={cn(
            "text-xl font-black tracking-tighter uppercase italic transition-opacity hover:opacity-80",
            isDark ? "text-white drop-shadow-md" : "text-slate-900",
          )}
        >
          {title}
        </Link>

        {/* Primary Action (CTA) */}
        {action && (
          <Link
            /* [FIX]: Cast string to Route to satisfy Next.js Typed Routes */
            href={action.href as Route}
            style={{
              backgroundColor: accentColor,
              boxShadow: isDark ? `0 0 15px ${accentColor}50` : "none",
            }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2 text-xs font-bold text-white transition-all hover:brightness-110 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              {action.label}
              <MoveRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </span>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </Link>
        )}
      </div>
    </nav>
  );
}
