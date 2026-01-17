/** @format */
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * 🏷️ Badge: Luminous Edition
 * เพิ่ม Variant "luminous" และ "aurora" เพื่อรองรับระบบแสงปี 2026
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-0.5 text-[10px] font-black uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
        outline: "text-foreground border-white/10 bg-white/5 backdrop-blur-md",

        // ✨ Luminous Variant: สำหรับเน้นความสำคัญด้วยแสง Cyan
        luminous:
          "border-aurora-cyan/30 bg-aurora-cyan/10 text-aurora-cyan shadow-aurora-glow hover:bg-aurora-cyan/20",

        // 🌿 Aurora Variant: สำหรับเน้นความสำเร็จหรือความงอกงามด้วยแสง Emerald
        aurora:
          "border-aurora-emerald/30 bg-aurora-emerald/10 text-aurora-emerald shadow-aurora-glow hover:bg-aurora-emerald/20",

        // 🔮 Mystic Variant: สำหรับฟีเจอร์ใหม่หรือความล้ำสมัยด้วยแสง Violet
        mystic:
          "border-aurora-violet/30 bg-aurora-violet/10 text-aurora-violet shadow-aurora-glow hover:bg-aurora-violet/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
