/**
 * [UI COMPONENT]: SPECIALIST_BUTTON_SYSTEM v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Semantic Token Mapping | Neural Physics | Theme-Aware Contrast
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * [VARIANTS]: Centralized Multi-Theme Interaction Logic
 * ปรับปรุงระบบแอนิเมชันให้ใช้ค่า Ease แบบ Specialist [0.16, 1, 0.3, 1]
 */
const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-3 whitespace-nowrap text-sm font-black uppercase tracking-[0.2em] italic transition-all duration-500 ease-[0.16,1,0.3,1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-main disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 will-change-transform",
  {
    variants: {
      variant: {
        // [CORE]: High-Contrast (สลับสีอัตโนมัติตาม Text สีหลักของธีม)
        default:
          "bg-text-primary text-surface-main hover:bg-brand-primary hover:shadow-glow hover:-translate-y-1 border border-transparent",

        // [NEO]: สีแบรนด์หลัก (Neon Identity) - ใช้เพื่อหยุดสายตา
        neo: "bg-brand-primary text-surface-main border border-brand-primary/20 shadow-glow-sm hover:bg-brand-primary/90 hover:shadow-glow hover:-translate-y-1",

        // [DESTRUCTIVE]: ระบบเตือนอันตราย (Red State)
        destructive:
          "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white hover:shadow-glow-red",

        // [MINIMAL]: ขอบจางที่ปรับสีตามขอบหน้ากระดาษ
        outline:
          "border border-border bg-transparent text-text-primary hover:border-brand-primary hover:text-brand-primary hover:bg-surface-offset hover:-translate-y-0.5",

        // [SECONDARY]: พื้นหลังจางสไตล์ Offset สำหรับการกระทำรอง
        secondary:
          "bg-surface-offset text-text-primary border border-border hover:bg-surface-card hover:border-brand-primary/40 backdrop-blur-md",

        // [GHOST]: ไร้ขอบและพื้นหลัง เหมาะสำหรับเมนูนำทาง
        ghost: "text-text-muted hover:bg-surface-offset hover:text-brand-primary",

        // [LINK]: ลิงก์เชิงยุทธศาสตร์ พร้อม Animated Underline
        link: "text-brand-primary underline-offset-4 hover:text-brand-primary/80 px-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-brand-primary after:transition-all after:duration-500 hover:after:w-full",

        // [SPECIALIST]: Signature Glassmorphism (ที่สุดของงานดีไซน์ยุค 2026)
        specialist:
          "bg-surface-card/40 backdrop-blur-xl border border-brand-primary/20 text-brand-primary shadow-pro-sm hover:border-brand-primary hover:bg-brand-primary/10 hover:shadow-glow hover:-translate-y-1.5",
      },
      size: {
        default: "h-14 px-8 py-2 rounded-2xl md:rounded-3xl",
        sm: "h-10 px-5 rounded-xl text-[10px] tracking-[0.2em]",
        lg: "h-20 px-12 rounded-[2.5rem] text-base tracking-[0.3em]",
        icon: "h-12 w-12 rounded-2xl p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
