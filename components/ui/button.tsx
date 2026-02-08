/**
 * [UI COMPONENT]: SPECIALIST_BUTTON_SYSTEM v17.0.0 (POLIMORPHIC_CORE)
 * [STRATEGY]: OKLCH Interaction | Tactile Physics | Polymorphic Node
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * [VARIANTS]: Centralized Interaction Logic
 * ปรับจูนเพื่อรองรับมิติแสงและเงา (Atmospheric Physics) และการตอบสนองที่นุ่มนวล
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-black uppercase tracking-widest transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        // [CORE]: มาตรฐานหลัก เน้นความหนักแน่นด้วย Ink Navy และแผ่รัศมีเมื่อ Hover
        default:
          "bg-white text-black hover:bg-brand-primary hover:text-white hover:shadow-glow hover:-translate-y-0.5",

        // [DESTRUCTIVE]: สำหรับการลบหรือยกเลิก
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-red-900/20",

        // [MINIMAL]: ขอบบางเฉียบที่เน้นความโปร่งใส
        outline:
          "border border-white/20 bg-transparent text-white hover:border-brand-primary hover:text-brand-primary hover:bg-white/5",

        // [SECONDARY]: พื้นหลังจางๆ
        secondary: "bg-white/10 text-white hover:bg-white/20 hover:shadow-inner backdrop-blur-sm",

        // [GHOST]: ไม่มีพื้นหลัง
        ghost: "text-slate-400 hover:bg-white/5 hover:text-brand-primary",

        // [LINK]: ลิงก์ข้อความ
        link: "text-brand-primary underline-offset-4 hover:underline px-0 decoration-2",

        // [SPECIALIST]: การใช้ Glassmorphism ขั้นสูงร่วมกับ Aura แบรนด์ (High-End Look)
        specialist:
          "glass-morphism border-brand-primary/30 text-brand-primary shadow-lg hover:border-brand-primary hover:bg-brand-glow hover:text-white hover:shadow-glow hover:-translate-y-1",
      },
      size: {
        default: "h-12 px-6 py-2 rounded-full",
        sm: "h-9 rounded-full px-4 text-xs tracking-wider",
        lg: "h-16 rounded-full px-10 text-base tracking-[0.2em]",
        icon: "h-10 w-10 rounded-full",
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

/**
 * @component Button
 * @description หน่วยปุ่มกดอัจฉริยะที่รองรับการ Polymorph (เช่น แปลงเป็น Next Link ผ่าน asChild)
 */
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
