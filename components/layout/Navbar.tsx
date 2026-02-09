/**
 * [LAYOUT COMPONENT]: SYSTEM_NAVBAR v17.3.9 (STABILIZED_CORE)
 * [STRATEGY]: Intelligent Scroll Physics | Theme-Aware Interface | Specialist Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// --- Infrastructure & Data ---
import { SITE_CONFIG } from "@/constants/site-config";
import { MAIN_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

// --- UI Components ---
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToggle";

/**
 * @component Navbar
 * @description หน่วยควบคุมการนำทางหลัก ประมวลผลฟิสิกส์การเลื่อนและสลับธีมแบบ Zero-Latency
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  /* 01. PERFORMANCE SCROLL OBSERVER (RAF Optimized) */
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  /* 02. SCROLL LOCK PROTOCOL: ป้องกัน Layout Shift บน Mobile */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] flex justify-center transition-all duration-500 ease-[0.16,1,0.3,1]",
          "will-change-transform", // [PERFORMANCE]: บังคับใช้ GPU layer
          isScrolled ? "pt-4 md:pt-6" : "pt-0",
        )}
      >
        <nav
          className={cn(
            "transition-all duration-700 ease-[0.16,1,0.3,1]",
            /* [HYBRID THEME]: ปรับจูนพื้นหลังกระจกตามสถานะการ Scroll */
            isScrolled
              ? "w-[92%] max-w-6xl rounded-[2rem] border border-border/50 bg-surface-main/80 shadow-glow backdrop-blur-xl"
              : "w-full border-b border-border/10 bg-surface-main/30 backdrop-blur-sm",
          )}
        >
          <div className={cn(
              "relative flex items-center justify-between px-4 py-3 md:px-6 md:py-4",
              isScrolled ? "min-h-[70px]" : "min-h-[80px]",
            )}
          >
            {/* [NODE A]: BRAND IDENTITY - Inverted Contrast */}
            <Link href="/" className="group flex items-center gap-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-text-primary text-surface-main shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <IconRenderer name="Cpu" size={20} strokeWidth={2.5} className="text-surface-main" />
              </div>
              <div className="hidden flex-col leading-none md:flex">
                <span className="text-text-primary font-sans text-lg font-black tracking-tighter uppercase">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-brand-primary font-mono text-[8px] font-black tracking-[0.3em] uppercase">
                  Specialist.System_v{SITE_CONFIG.project.version}
                </span>
              </div>
            </Link>

            {/* [NODE B]: DESKTOP NAVIGATION HUB */}
            <div className="hidden items-center gap-1 rounded-2xl border border-border/50 bg-surface-offset/40 p-1 backdrop-blur-md lg:flex">
              {MAIN_NAV.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative rounded-xl px-5 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300",
                      isActive
                        ? "bg-brand-primary text-surface-main shadow-glow"
                        : "text-text-secondary hover:bg-surface-card hover:text-text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* [NODE C]: INTERFACE CONTROLS */}
            <div className="flex items-center gap-2 md:gap-4">
              <ThemeToggle />

              <Button
                asChild
                className="hover:bg-brand-primary hidden h-10 rounded-xl bg-text-primary px-6 text-[10px] font-black tracking-widest text-surface-main uppercase shadow-glow transition-all duration-500 hover:text-surface-main md:flex"
              >
                <Link href={SITE_CONFIG.links.line} target="_blank">
                  <IconRenderer name="MessageCircle" size={14} className="mr-2" />
                  Start Project
                </Link>
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="border-border/50 bg-surface-card text-text-primary flex h-10 w-10 items-center justify-center rounded-xl border transition-all active:scale-90 lg:hidden"
                aria-label="Toggle Menu"
              >
                <IconRenderer name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* [NODE D]: MOBILE OVERLAY INTERFACE */}
      
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="bg-surface-main/90 fixed inset-0 z-[90] flex flex-col lg:hidden"
          >
            {/* Atmospheric Background Layer */}
            <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
              <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
              <div className="ambient-aura absolute right-0 -bottom-[20%] h-[500px] w-[500px] opacity-[var(--ambient-opacity)]" />
            </div>

            <div className="relative z-10 flex h-full flex-col px-6 pt-32 pb-10">
              <nav className="flex-1 space-y-4">
                {MAIN_NAV.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-[2rem] border p-6 transition-all duration-500",
                          isActive
                            ? "border-brand-primary/50 bg-brand-primary text-surface-main shadow-glow"
                            : "border-border/50 bg-surface-card text-text-primary hover:border-brand-primary/30"
                        )}
                      >
                        <span className="font-sans text-2xl font-black tracking-tighter uppercase italic">{item.label}</span>
                        <div className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                          isActive ? "bg-surface-main/20 text-surface-main" : "bg-surface-offset text-text-primary group-hover:bg-brand-primary group-hover:text-surface-main"
                        )}>
                          <IconRenderer name="ArrowRight" size={20} />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto">
                <Button asChild className="h-16 w-full rounded-[1.5rem] bg-text-primary text-xs font-black tracking-widest text-surface-main uppercase shadow-glow">
                  <Link href={SITE_CONFIG.links.line} target="_blank">Contact Specialist</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);
