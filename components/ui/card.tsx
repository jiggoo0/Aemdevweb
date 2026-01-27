/** @format */

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Card: Luminous Glass Edition
 * พิกัด: ยกระดับการจัดกลุ่มคอนเทนต์ด้วยระบบแสง Aurora และพื้นผิวกระจก
 * ยุทธศาสตร์: ใช้ Glass-card style เพื่อสร้างมิติความพรีเมียมและความโปร่งสบาย (Breathability)
 */

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500",
      "hover:border-aurora-cyan/30 hover:shadow-aurora-glow hover:bg-white/10",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-8 md:p-10", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-prompt group-hover:text-aurora-cyan text-2xl font-black tracking-tighter text-white uppercase transition-colors md:text-3xl",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-anuphan text-sm font-medium text-slate-400 opacity-80 md:text-base",
      className
    )}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-anuphan p-8 pt-0 text-slate-300 md:p-10", className)}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center border-t border-white/5 p-8 md:p-10",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
