/** @format */
"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
// ✅ Fixed: Removed unused 'motion' import to clear ESLint error
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

/**
 * 🍱 TabsList: Luminous Glass Rail
 * แถบรางสำหรับเลือก Tab ที่เน้นความโปร่งแสงและสว่างนวลตา
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "shadow-luminous inline-flex h-14 items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-1.5 backdrop-blur-xl",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

/**
 * 🔘 TabsTrigger: Aurora Interaction
 * ปุ่มสลับที่ใช้ฟอนต์ Prompt/Black เพื่อความพรีเมียมและเปลี่ยนสีเมื่อ Active
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative inline-flex items-center justify-center rounded-xl px-6 py-2 text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-500 select-none md:text-xs",
      "font-prompt text-slate-500 hover:text-white disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:text-aurora-cyan data-[state=active]:shadow-aurora-glow data-[state=active]:bg-white/5",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

/**
 * 📄 TabsContent: Smooth Aurora Entrance
 * ส่วนแสดงเนื้อหาที่มาพร้อมแอนิเมชัน Fade-in และ Slide-up อย่างนุ่มนวล
 */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:ring-aurora-cyan/30 mt-6 transition-all duration-700 focus-visible:ring-2 focus-visible:outline-none",
      "data-[state=active]:animate-in data-[state=active]:fade-in-50 data-[state=active]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
