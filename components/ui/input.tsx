/** @format */
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * ⌨️ Input: Luminous Glass Edition
 * ยกระดับช่องกรอกข้อมูลด้วยระบบแสง Aurora และพื้นผิว Weightless
 * ปรับปรุง: เพิ่มเอฟเฟกต์เรืองแสงเมื่อ Focus และใช้ฟอนต์ Anuphan เพื่อความเป็นมิตร
 */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base Style: Glassmorphism
          "flex h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-base transition-all duration-500",
          "font-anuphan text-white placeholder:font-medium placeholder:text-slate-500",
          "file:text-aurora-cyan file:border-0 file:bg-transparent file:text-sm file:font-black file:tracking-widest file:uppercase",

          // Focus State: Luminous Glow
          "focus-visible:border-aurora-cyan/50 focus-visible:shadow-aurora-glow focus-visible:bg-white/10 focus-visible:ring-0 focus-visible:outline-none",

          // Disabled & Mobile
          "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm lg:text-base",

          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
