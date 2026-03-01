"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-visible:ring-brand-primary inline-flex items-center justify-center gap-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-text-primary text-surface-main hover:bg-brand-primary shadow-sm",
        neo: "bg-brand-primary text-surface-main hover:bg-brand-primary/90 shadow-sm",
        destructive: "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
        outline: "border-border hover:bg-surface-offset text-text-primary border bg-transparent",
        secondary: "bg-surface-offset text-text-primary hover:bg-border/50",
        ghost: "hover:bg-surface-offset hover:text-text-primary text-text-secondary",
        link: "text-brand-primary underline-offset-4 hover:underline",
        specialist:
          "border-brand-primary/30 bg-brand-primary/5 text-brand-primary hover:bg-brand-primary/10 border",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {props.children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button };
