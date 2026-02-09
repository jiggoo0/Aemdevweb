/**
 * [SYSTEM COMPONENT]: THEME_TOGGLE_ORCHESTRATOR v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Hydration-Safe State | Neural Physics | Theme-Aware Glow
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useEffect, useState, memo } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

/**
 * @component ThemeToggle
 * @description ปุ่มสลับโหมด Dark/Light ที่มีการคำนวณฟิสิกส์แอนิเมชันระดับ 60FPS
 * [STABILIZED]: ปรับจูนระบบ GPU Layering และสลับสถานะไอคอนแบบ Seamless
 */
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // [HYDRATION SHIELD]: ป้องกันปัญหา UI Mismatch ระหว่าง Server/Client 100%
  useEffect(() => {
    setMounted(true);
  }, []);

  // [CLS PROTECTION]: จองพื้นที่โครงสร้างเพื่อป้องกันคะแนน Performance ตก
  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-xl border border-border/50 bg-surface-card/50 opacity-0" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl",
        "border border-border/50 bg-surface-card transition-all duration-500",
        "hover:border-brand-primary/50 hover:shadow-glow active:scale-90",
        "will-change-transform" /* GPU Acceleration */
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          /* [NEURAL PHYSICS]: ปรับแต่งองศาการหมุนเพื่อความรู้สึกพรีเมียม */
          initial={{ y: 20, opacity: 0, rotate: -90, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, rotate: 0, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, rotate: 90, filter: "blur(4px)" }}
          transition={{ 
            duration: 0.4, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="relative z-10 flex items-center justify-center"
        >
          <IconRenderer 
            name={isDark ? "Moon" : "Sun"} 
            size={18} 
            strokeWidth={2.5}
            className={cn(
              "transition-colors duration-500",
              isDark ? "text-brand-primary" : "text-amber-500"
            )}
          />
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric Glow Overlay */}
      <div className={cn(
        "absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
        isDark ? "bg-brand-primary/5" : "bg-amber-500/5"
      )} />
      
      {/* Neural Indicator: จุดแจ้งสถานะระบบ */}
      <div className={cn(
        "absolute top-1.5 right-1.5 h-1 w-1 rounded-full transition-all duration-500",
        isDark 
          ? "bg-brand-primary shadow-[0_0_8px_var(--color-brand-primary)] scale-110" 
          : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
      )} />
    </button>
  );
};

export default memo(ThemeToggle);
