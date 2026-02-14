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
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap text-sm font-black uppercase tracking-[0.15em] italic transition-all duration-500 ease-[0.16,1,0.3,1] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95 will-change-transform transform-gpu",
  {
    variants: {
      variant: {
        default:
          "bg-text-primary text-surface-main hover:bg-brand-primary hover:text-surface-main hover:shadow-glow-sm hover:-translate-y-1 border border-transparent",
        neo: "bg-brand-primary text-surface-main border border-brand-primary/20 shadow-glow-sm hover:bg-brand-primary/90 hover:shadow-glow hover:-translate-y-1",
        destructive:
          "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white hover:shadow-glow-destructive",
        outline:
          "border border-border bg-transparent text-text-primary hover:border-brand-primary hover:text-brand-primary hover:bg-surface-offset hover:-translate-y-0.5",
        secondary:
          "bg-surface-offset text-text-primary border border-border hover:bg-surface-card hover:border-brand-primary/40 backdrop-blur-md",
        ghost: "text-text-muted hover:bg-surface-offset hover:text-brand-primary",
        link: "text-brand-primary underline-offset-4 hover:text-brand-primary/80 px-0 relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-brand-primary after:transition-all after:duration-500 hover:after:w-full",
        specialist:
          "bg-surface-card/60 backdrop-blur-xl border border-brand-primary/30 text-brand-primary shadow-pro-sm hover:border-brand-primary hover:bg-brand-primary/10 hover:shadow-glow-sm hover:-translate-y-1",
      },
      size: {
        default: "h-12 px-6 py-2 rounded-2xl md:rounded-[1.2rem]",
        sm: "h-9 px-4 rounded-xl text-[10px] tracking-[0.1em]",
        lg: "h-16 px-10 rounded-[2rem] text-base tracking-[0.2em]",
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
