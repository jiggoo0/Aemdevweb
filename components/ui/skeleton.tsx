/**
 * [UI PRIMITIVE]: SKELETON_CORE v17.0.1 (MIDNIGHT_PULSE)
 * [STRATEGY]: Subtle Neural Pulse | OKLCH Infrastructure | Dark Mode Native
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { cn } from "@/lib/utils";

/**
 * @component Skeleton
 * @description หน่วยเรนเดอร์ Ghost Element ที่ใช้ระบบ Pulse แบบนุ่มนวลสำหรับ Dark Theme
 */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // [PHYSICS]: ใช้สีขาวจางๆ (White Alpha) เพื่อให้เข้ากับพื้นหลังสีดำ
        "animate-pulse rounded-md bg-white/10",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
