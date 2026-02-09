/**
 * [SYSTEM COMPONENT]: LAYOUT_ENGINE_V17.1.1 (TYPE_SAFE)
 * [STRATEGY]: Atmospheric Orchestration | Vertical Rhythm | Dynamic Theming
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { CSSProperties } from "react";
import React from "react";
import { cn } from "@/lib/utils";

type SpacingLevel = "none" | "small" | "medium" | "large" | "specialist";

interface LayoutEngineProps {
  /** ส่วนประกอบเชิงยุทธศาสตร์ที่ต้องการจัดวาง (Sections) */
  readonly children: React.ReactNode;
  /** ปรับแต่งสไตล์เพิ่มเติมสำหรับ Main Container */
  readonly className?: string;
  /** ระบบช่องไฟระหว่าง Section (จูนมาเพื่อ Optical Balance) */
  readonly spacing?: SpacingLevel;
  /** [THEME INJECTION]: การตั้งค่าสีเฉพาะสำหรับหน้านั้นๆ (รับจาก Data) */
  readonly theme?: {
    readonly primary?: string;
    readonly secondary?: string;
    readonly background?: string;
  };
}

/**
 * @component LayoutEngine
 * @description แกนกลางการจัดวางที่ควบคุมแรงดึงดูดสายตา (Visual Gravity)
 * ทำหน้าที่เป็น Stage หลักในการ Render เนื้อหา พร้อมระบบ Background แบบ Layered Depth
 * และรองรับการเปลี่ยน Theme สีแบบ Dynamic (CSS Variable Injection)
 */
export default function LayoutEngine({
  children,
  className,
  spacing = "large",
  theme,
}: LayoutEngineProps) {
  // [SPACING ARCHITECTURE]: มาตราส่วนช่องไฟที่จูนมาเพื่อความภูมิฐาน
  const spacingMap: Record<SpacingLevel, string> = {
    none: "gap-y-0",
    small: "gap-y-16 md:gap-y-24",
    medium: "gap-y-28 md:gap-y-36",
    large: "gap-y-40 md:gap-y-52",
    specialist: "gap-y-52 md:gap-y-72",
  };

  // [LOGIC]: Dynamic CSS Variables Injection
  // [FIX]: ใช้ Record<string, string> แทน CSSProperties ชั่วคราวเพื่อให้ใส่ Custom Properties ได้โดยไม่ต้องใช้ @ts-ignore
  const dynamicStyles: Record<string, string> = {};

  if (theme?.primary) {
    dynamicStyles["--color-brand-primary"] = theme.primary;
    // สร้าง Glow Color จาก Primary (Fallback logic)
    dynamicStyles["--color-brand-glow"] = theme.primary;
  }

  if (theme?.background) {
    dynamicStyles["--color-surface-main"] = theme.background;
  }

  return (
    <div
      className="bg-surface-main relative flex min-h-screen w-full flex-col overflow-x-hidden transition-colors duration-700"
      // [FIX]: Cast กลับเป็น CSSProperties เพื่อให้ React ยอมรับ
      style={dynamicStyles as CSSProperties}
    >
      {/* 01. ATMOSPHERIC PHYSICS: ระบบเลเยอร์พื้นหลัง (Fixed Depth) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* เลเยอร์กริตรากฐาน (Infrastructure Grid) */}
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.03]" />

        {/* ระบบออร่าแสง (Layered Ambient Lighting) */}
        {/* [PERFORMANCE]: แยก Layer เพื่อลด Paint Cost */}
        <div className="ambient-aura absolute -top-[10%] -left-[10%] h-[800px] w-[800px] opacity-[0.08] blur-[100px] will-change-transform" />
        <div className="ambient-aura absolute -right-[5%] bottom-[10%] h-[600px] w-[600px] opacity-[0.05] blur-[80px] will-change-transform" />

        {/* Subtle Vignette: โฟกัสสายตาไปที่ศูนย์กลางเนื้อหา */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#000000_100%)] opacity-40" />
      </div>

      {/* 02. STRATEGIC CONTENT FLOW: พื้นที่หลักสำหรับการเรนเดอร์ Node ธุรกิจ */}
      <main
        className={cn(
          "relative z-10 flex w-full flex-auto flex-col",
          spacingMap[spacing],
          className,
        )}
      >
        {children}
      </main>

      {/* 03. INFRASTRUCTURE SIGNATURE: ระบบยืนยันมาตรฐาน Core Performance */}
      <footer className="relative z-10 container mx-auto mt-auto px-6 pt-20 pb-12">
        <div className="border-surface-muted flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 opacity-40 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative h-2 w-2">
              <div className="bg-brand-primary absolute inset-0 animate-ping rounded-full opacity-40" />
              <div className="bg-brand-primary relative h-2 w-2 rounded-full" />
            </div>
            <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Engineered_Node v17.1 | 2026.Archive
            </span>
          </div>

          <div className="hidden items-center gap-8 font-mono text-[8px] font-bold tracking-[0.3em] uppercase md:flex">
            <span className="text-text-muted">Stability: 99.9%</span>
            <span className="text-text-muted">Latency: Optimized</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
