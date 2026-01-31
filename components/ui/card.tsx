/** @format */

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card: Glass Edition
 * ดีไซน์: ยกระดับกลุ่มเนื้อหาด้วยพื้นผิวกระจกและแสงเงาที่ดูมีมิติ
 * แนวคิด: ใช้สไตล์กระจกโปร่งแสงเพื่อให้หน้าเว็บดูโปร่ง สบายตา และดูพรีเมียม
 */

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500",
      "hover:shadow-aurora hover:border-emerald-500/30 hover:bg-white/10",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-8 md:p-10", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-heading text-2xl font-black tracking-tighter text-white uppercase transition-colors group-hover:text-emerald-400 md:text-3xl",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-body text-sm font-medium text-slate-400 opacity-80 md:text-base",
      className,
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-body p-8 pt-0 text-slate-300 md:p-10", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center border-t border-white/5 p-8 md:p-10",
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
