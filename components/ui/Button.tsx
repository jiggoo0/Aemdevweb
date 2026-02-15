/**
 * [UI COMPONENT]: SPECIALIST_BUTTON_SYSTEM v17.9.102 (ULTIMATE_HARDENED)
 * [STRATEGY]: Private Type Mapping | GPU-Accelerated Rendering
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * [VARIANTS_MATRIX]: ระบบจัดการสไตล์แบบ Deterministic
 */
const buttonVariants = cva(
  "group focus-visible:ring-brand-primary inline-flex transform-gpu items-center justify-center gap-2.5 text-sm font-black tracking-[0.15em] whitespace-nowrap uppercase italic transition-all duration-500 ease-[0.16,1,0.3,1] will-change-transform focus-visible:ring-1 focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-text-primary text-surface-main hover:bg-brand-primary hover:text-surface-main hover:shadow-glow-sm border border-transparent hover:-translate-y-1",
        neo: "bg-brand-primary text-surface-main border-brand-primary/20 shadow-glow-sm hover:bg-brand-primary/90 hover:shadow-glow border hover:-translate-y-1",
        destructive:
          "hover:shadow-glow-destructive border border-red-500/20 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white",
        outline:
          "border-border text-text-primary hover:border-brand-primary hover:text-brand-primary hover:bg-surface-offset border bg-transparent hover:-translate-y-0.5",
        secondary:
          "bg-surface-offset text-text-primary border-border hover:bg-surface-card hover:border-brand-primary/40 border backdrop-blur-md",
        ghost: "text-text-muted hover:bg-surface-offset hover:text-brand-primary",
        link: "text-brand-primary hover:text-brand-primary/80 after:bg-brand-primary relative px-0 underline-offset-4 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-500 hover:after:w-full",
        specialist:
          "bg-surface-card/60 border-brand-primary/30 text-brand-primary shadow-pro-sm hover:border-brand-primary hover:bg-brand-primary/10 hover:shadow-glow-sm border backdrop-blur-xl hover:-translate-y-1",
      },
      size: {
        default: "h-12 rounded-2xl px-6 py-2 md:rounded-[1.2rem]",
        sm: "h-9 rounded-xl px-4 text-[10px] tracking-[0.1em]",
        lg: "h-16 rounded-[2rem] px-10 text-base tracking-[0.2em]",
        icon: "h-10 w-10 rounded-xl p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// [FIXED]: ลบ export ออกเพื่อให้เป็น Internal Interface ตามคำแนะนำของ knip
interface ButtonProps
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

export { Button };
