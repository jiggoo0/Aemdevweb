/**
 * [UI COMPONENT]: SPECIALIST_BUTTON_SYSTEM v18.0.33 (STABLE_INTERNAL)
 * [STRATEGY]: Private Type Mapping | GPU-Accelerated Rendering | Knip_Optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * [VARIANTS_MATRIX]: ระบบจัดการสไตล์แบบ Deterministic
 * [KNIP_FIX]: นำ 'export' ออกเพื่อจำกัดการใช้งานเฉพาะภายในไฟล์นี้ตามมาตรฐาน Zero-Waste
 */
const buttonVariants = cva(
  "group focus-visible:ring-brand-primary relative inline-flex transform-gpu items-center justify-center gap-2.5 overflow-hidden text-[11px] font-black tracking-[0.2em] whitespace-nowrap uppercase italic transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform after:pointer-events-none after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:transition-transform after:duration-1000 after:ease-[cubic-bezier(0.19,1,0.22,1)] hover:after:translate-x-full focus-visible:ring-1 focus-visible:outline-none active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-text-primary text-surface-main hover:bg-brand-primary hover:shadow-glow-sm border border-transparent hover:-translate-y-1 hover:scale-[1.02]",
        neo: "bg-brand-primary text-surface-main border-brand-primary/20 shadow-glow-sm hover:bg-brand-primary/90 hover:shadow-glow border hover:-translate-y-1 hover:scale-[1.02]",
        destructive:
          "hover:shadow-glow-destructive border border-red-500/20 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white",
        outline:
          "border-border text-text-primary hover:border-brand-primary hover:text-brand-primary hover:bg-surface-offset/50 border bg-transparent hover:-translate-y-0.5",
        secondary:
          "bg-surface-offset text-text-primary border-border hover:bg-surface-card hover:border-brand-primary/40 hover:shadow-pro-sm border backdrop-blur-md",
        ghost: "text-text-muted hover:bg-surface-offset hover:text-brand-primary transition-colors",
        link: "text-brand-primary hover:text-brand-primary/80 after:bg-brand-primary relative px-0 underline-offset-4 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-700 hover:after:w-full",
        specialist:
          "bg-surface-card/60 border-brand-primary/30 text-brand-primary shadow-pro-sm hover:border-brand-primary hover:bg-brand-primary/10 hover:shadow-glow-sm border backdrop-blur-xl hover:-translate-y-1 hover:scale-[1.02]",
      },
      size: {
        default: "h-14 rounded-2xl px-8 py-3",
        sm: "h-10 rounded-xl px-5 text-[10px] tracking-[0.15em]",
        lg: "rounded-card-lg h-20 px-12 text-base tracking-[0.3em]",
        icon: "h-12 w-12 rounded-2xl p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * [INTERFACE_HARDENING]: การกำจัด Public Interface ที่ไม่จำเป็น
 */
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string; // Standardize href for both button and link behaviors
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // [POLYMORPHISM]: รองรับการเปลี่ยน Tag ผ่าน Radix Slot (เช่น ใช้เป็น <Link>)
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {props.children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

/**
 * [SYSTEM_EXPORTS]: ส่งออกเฉพาะตัวคอมโพเนนต์หลัก
 * ปรับปรุง: ไม่ส่งออก buttonVariants เพื่อลดการแจ้งเตือน Unused Exports จาก knip
 */
export { Button };
