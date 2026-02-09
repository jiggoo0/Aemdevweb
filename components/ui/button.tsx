/**
 * [UI COMPONENT]: SPECIALIST_BUTTON_SYSTEM v17.0.1 (PERFORMANCE_TUNED)
 * [STRATEGY]: OKLCH Interaction | Tactile Physics | Polymorphic Node
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * [VARIANTS]: Centralized Interaction Logic
 */
const buttonVariants = cva(
  // Base Styles: เพิ่ม will-change-transform เพื่อ GPU Acceleration
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-black uppercase tracking-widest transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 will-change-transform",
  {
    variants: {
      variant: {
        // [CORE]: ขาว -> เขียว (ใช้สำหรับปุ่มทั่วไปที่ต้องการความ Contrast สูงบนพื้นดำ)
        default:
          "bg-white text-black hover:bg-brand-primary hover:text-white hover:shadow-glow hover:-translate-y-0.5 border border-transparent",

        // [NEO]: เขียว -> สว่างขึ้น (ใช้สำหรับ Primary CTA ที่ต้องการให้เด่นที่สุด)
        neo:
          "bg-brand-primary text-black border border-brand-primary hover:bg-[#2ce675] hover:shadow-[0_0_20px_var(--color-brand-primary)] hover:-translate-y-0.5",

        // [DESTRUCTIVE]: ลบ/ยกเลิก
        destructive:
          "bg-red-600/10 text-red-500 border border-red-600/20 hover:bg-red-600 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]",

        // [MINIMAL]: ขอบบางเฉียบ
        outline:
          "border border-white/20 bg-transparent text-white hover:border-brand-primary hover:text-brand-primary hover:bg-white/5",

        // [SECONDARY]: พื้นหลังจางๆ
        secondary:
          "bg-white/5 text-white border border-white/5 hover:bg-white/10 hover:border-white/10 backdrop-blur-sm",

        // [GHOST]: ไม่มีพื้นหลัง
        ghost: "text-slate-400 hover:bg-white/5 hover:text-brand-primary",

        // [LINK]: ลิงก์พร้อม Animation เส้นใต้ไหลจากซ้ายไปขวา
        link: "text-brand-primary underline-offset-4 hover:text-brand-primary/80 px-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full",

        // [SPECIALIST]: Glassmorphism + Glow (Signature Look)
        specialist:
          "glass-morphism border-brand-primary/30 text-brand-primary shadow-lg hover:border-brand-primary hover:bg-brand-glow hover:text-white hover:shadow-glow hover:-translate-y-1",
      },
      size: {
        default: "h-12 px-8 py-2 rounded-full", // ปรับ px ให้กว้างขึ้นเล็กน้อยเพื่อความสง่า
        sm: "h-9 rounded-full px-4 text-[10px] tracking-[0.2em]",
        lg: "h-16 rounded-full px-10 text-base tracking-[0.2em]",
        icon: "h-10 w-10 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
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
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
