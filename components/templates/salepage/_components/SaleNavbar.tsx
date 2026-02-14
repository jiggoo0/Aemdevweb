/**
 * [COMPONENT]: SALE_NAVBAR v17.9.101 (TYPE_STABILIZED)
 * [STRATEGY]: Global Type Sync | Glassmorphism | mode-Aware UI
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Route } from "next";
import type { ThemeConfig } from "@/types"; // [IMPORT]: นำเข้า Type มาตรฐาน

interface SaleNavbarProps {
  readonly title: string;
  readonly action?: {
    label: string;
    href: string;
  };
  readonly theme?: ThemeConfig; // [FIXED]: ใช้ ThemeConfig แทน Object Hardcode
}

export function SaleNavbar({ title, action, theme }: SaleNavbarProps) {
  // [LOGIC]: ตรวจสอบโหมดสีจาก ThemeConfig โดยตรง (Single Source of Truth)
  const isDark = theme?.mode === "dark";
  const accentColor = theme?.primary || "#2563eb";

  return (
    <nav
      className={cn(
        "sticky top-0 z-[100] border-b backdrop-blur-xl transition-all duration-500",
        // [DYNAMIC_STYLING]: ปรับตาม mode ที่ได้รับจาก Node
        isDark
          ? "border-white/10 bg-black/20 text-white"
          : "border-slate-200 bg-white/80 text-slate-900",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand Identity: Logo / Title */}
        <Link
          href="/"
          className={cn(
            "text-lg font-black tracking-tighter uppercase italic transition-all hover:scale-105 active:scale-95",
            isDark ? "text-white drop-shadow-md" : "text-slate-900",
          )}
        >
          {title}
        </Link>

        {/* Primary Action Button (CTA) */}
        {action && (
          <Link
            href={action.href as Route}
            style={{
              backgroundColor: accentColor,
              // ฉีดเงาเรืองแสงเฉพาะใน Dark Mode เพื่อสร้างมิติ
              boxShadow: isDark ? `0 0 20px ${accentColor}40` : "none",
            }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-2.5 text-[10px] font-black tracking-widest text-white uppercase italic transition-all hover:brightness-110 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              {action.label}
              <MoveRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </span>

            {/* Shimmer Effect: สร้างการเคลื่อนไหวเพื่อดึงดูดสายตา */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </Link>
        )}
      </div>
    </nav>
  );
}
