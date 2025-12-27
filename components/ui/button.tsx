/** @format */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-black uppercase tracking-[0.2em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // 🧱 สไตล์หลัก: พื้นหลังเข้ม เงาสีส้ม (Brutalist Signature)
        default:
          "border-4 border-brand-navy bg-brand-navy text-white shadow-[4px_4px_0px_0px_#F97316] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",

        // 🧱 สไตล์อันตราย: สีแดงขอบหนา
        destructive:
          "border-4 border-brand-navy bg-error text-white shadow-[4px_4px_0px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",

        // 🧱 สไตล์เส้นขอบ: พื้นหลังขาว เงาสีน้ำเงิน
        outline:
          "border-4 border-brand-navy bg-white text-brand-navy shadow-[4px_4px_0px_0px_#1E3A8A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",

        // 🧱 สไตล์รอง: สีส้มโดดเด่น
        secondary:
          "border-4 border-brand-navy bg-brand-orange text-white shadow-[4px_4px_0px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",

        ghost: "text-brand-navy hover:bg-brand-blue/10",

        link: "text-brand-blue underline-offset-8 decoration-2 hover:underline font-bold",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-10 px-4 text-[10px]",
        lg: "h-16 px-10 text-sm",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
