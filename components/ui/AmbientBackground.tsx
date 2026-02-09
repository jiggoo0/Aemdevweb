/**
 * [UI COMPONENT]: AMBIENT_BACKGROUND v17.5.0 (THEME_AWARE)
 * [STRATEGY]: Atmospheric Orchestration | Dynamic Color Injection | GPU Accelerated
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo } from "react";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  readonly className?: string;
  readonly gridOpacity?: number;
  /**
   * [THEME]: สีหลักสำหรับ Aura (รับค่าจาก LayoutEngine)
   */
  readonly color?: string;
  /**
   * [THEME]: ความเข้มของแสง Aura (0.0 - 1.0)
   */
  readonly opacity?: number;
}

/**
 * @component AmbientBackground
 * @description หน่วยประมวลผลฉากหลังเชิงบรรยากาศ รองรับการเปลี่ยนสีตาม Theme
 * ใช้ตำแหน่ง fixed เพื่อความเสถียรของเลเยอร์ และใช้ memo เพื่อลดการคำนวณซ้ำ
 */
function AmbientBackground({
  className,
  gridOpacity = 0.05,
  color,
  opacity,
}: AmbientBackgroundProps) {
  // [LOGIC]: สร้าง Dynamic Style สำหรับ Aura Nodes
  // หากมีการส่งสีมา (color) ให้ใช้สีนั้น หากไม่มีให้ใช้ --color-brand-primary จาก Global CSS
  const auraStyle = {
    backgroundColor: color || "var(--color-brand-primary)",
    opacity: opacity ?? undefined, // ถ้ามีค่า opacity ส่งมา ให้ Override CSS Class
    "--ambient-opacity": opacity ?? 0.1, // อัปเดต CSS Variable สำหรับ Animation
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        // [LAYOUT]: Fixed เพื่อให้ Background นิ่งสนิทแม้ Scroll เนื้อหา
        // [INTERACTION]: pointer-events-none สำคัญมาก เพื่อไม่ให้ขวางการคลิก
        "pointer-events-none fixed inset-0 z-0 overflow-hidden select-none",
        "bg-surface-main transition-colors duration-700",
        className,
      )}
      aria-hidden="true"
    >
      {/* 01. INFRASTRUCTURE GRID: ตารางโครงสร้างเชิงเทคนิค */}
      <div
        className="bg-infrastructure-grid absolute inset-0 transition-opacity duration-700"
        style={{ opacity: gridOpacity }}
      />

      {/* 02. ATMOSPHERIC AURAS: แสงสว่างประดิษฐ์เพื่อสร้างมิติ */}
      {/* Top-Left Aura: แสงหลัก (Dynamic Color) */}
      <div
        className="ambient-aura animate-pulse-slow absolute -top-[10%] -left-[10%] h-[800px] w-[800px] blur-[120px] transition-colors duration-700"
        style={auraStyle}
      />

      {/* Bottom-Right Aura: แสงรอง (Dynamic Color) */}
      <div
        className="ambient-aura absolute -right-[5%] bottom-[10%] h-[600px] w-[600px] blur-[100px] transition-colors duration-700"
        style={{
          ...auraStyle,
          opacity: opacity ? opacity * 0.8 : undefined, // ลดความเข้มลงเล็กน้อยสำหรับแสงรอง
        }}
      />

      {/* 03. DEPTH VIGNETTE: ไล่เฉดเพื่อสร้างความลึกให้กับ Content ตรงกลาง */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--color-surface-main)_120%)] opacity-80" />
    </div>
  );
}

// [PERFORMANCE]: Memoization เพื่อป้องกัน Re-render โดยไม่จำเป็น
export default memo(AmbientBackground);
