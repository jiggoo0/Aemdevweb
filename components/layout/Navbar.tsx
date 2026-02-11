/**
 * [LAYOUT COMPONENT]: SYSTEM_NAVBAR v17.5.6 (UX_PATCHED + HYDRATION_FIX)
 * [STRATEGY]: Optimized Hit Area | Pointer Event Flow | Mobile Responsive
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. Infrastructure & Data ---
import { SITE_CONFIG } from "@/constants/site-config";
import { MAIN_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";

// --- 2. UI Components ---
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // [LOGIC]: ตรวจสอบการ Mount ของ Component เพื่อป้องกัน Hydration Mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // [LOGIC]: ประมวลผล Scroll Event พร้อม Optimization (Passive Listener)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // [UI]: ปิด Mobile Menu อัตโนมัติเมื่อมีการเปลี่ยนเส้นทาง (Pathname)
  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  // [UX]: ป้องกันการ Scroll พื้นหลังเมื่อ Mobile Menu เปิดอยู่ (Layout Lock)
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "pointer-events-none fixed inset-x-0 top-0 z-[100] flex justify-center transition-all duration-700 ease-[0.16,1,0.3,1]",
          isScrolled ? "pt-6 md:pt-8" : "pt-0",
        )}
      >
        <nav
          suppressHydrationWarning
          className={cn(
            "pointer-events-auto transition-all duration-1000 ease-[0.16,1,0.3,1]",
            isScrolled
              ? "border-border/50 bg-surface-main/80 shadow-pro-xl w-[96%] max-w-7xl rounded-[2.5rem] border backdrop-blur-2xl"
              : "border-border/10 bg-surface-main/30 w-full border-b backdrop-blur-sm",
          )}
        >
          <div
            className={cn(
              "relative flex items-center justify-between px-6 py-3 md:px-8",
              isScrolled ? "min-h-[72px]" : "min-h-[88px]",
            )}
          >
            {/* --- NODE A: BRAND IDENTITY --- */}
            <Link href="/" className="group flex items-center gap-5 outline-none select-none">
              <div
                suppressHydrationWarning
                className="bg-text-primary text-surface-main relative flex h-11 w-11 items-center justify-center rounded-[1rem] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
              >
                <IconRenderer
                  name="Cpu"
                  size={22}
                  strokeWidth={2.5}
                  className="text-surface-main"
                />
              </div>
              <div className="hidden flex-col leading-none md:flex">
                <span
                  suppressHydrationWarning
                  className="text-text-primary font-sans text-xl font-black tracking-tighter uppercase italic"
                >
                  {SITE_CONFIG.brandName}
                </span>
                <span
                  suppressHydrationWarning
                  className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase"
                >
                  SYSTEM_CORE.v{mounted ? SITE_CONFIG.project.version : "---"}
                </span>
              </div>
            </Link>

            {/* --- NODE B: DESKTOP NAVIGATION --- */}
            <div className="border-border/40 bg-surface-offset/40 hidden items-center gap-1 rounded-2xl border p-1.5 backdrop-blur-md lg:flex">
              {MAIN_NAV.map((item) => {
                const isActive = pathname === item.href;
                const isStatus = item.href === "/status";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500",
                      isActive
                        ? "bg-brand-primary text-surface-main shadow-glow"
                        : "text-text-secondary hover:bg-surface-card hover:text-text-primary",
                    )}
                  >
                    {isStatus && (
                      <div className="relative h-1.5 w-1.5">
                        <div
                          className={cn(
                            "absolute inset-0 animate-ping rounded-full opacity-40",
                            isActive ? "bg-surface-main" : "bg-emerald-500",
                          )}
                        />
                        <div
                          className={cn(
                            "relative h-1.5 w-1.5 rounded-full",
                            isActive ? "bg-surface-main" : "bg-emerald-500",
                          )}
                        />
                      </div>
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* --- NODE C: INTERFACE CONTROLS --- */}
            <div className="flex items-center gap-3 md:gap-5">
              <ThemeToggle />

              <Button
                asChild
                className="bg-text-primary text-surface-main shadow-glow hover:bg-brand-primary hidden h-12 rounded-2xl px-8 text-[11px] font-black tracking-widest uppercase transition-all duration-500 md:flex"
              >
                <Link href={SITE_CONFIG.links.line} target="_blank">
                  <IconRenderer name="MessageCircle" size={16} className="mr-3" />
                  Initiate Project
                </Link>
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "border-border/50 bg-surface-card text-text-primary hover:border-brand-primary/50 relative z-50 flex items-center justify-center rounded-2xl border transition-all lg:hidden",
                  "h-12 w-12 active:scale-95",
                  "cursor-pointer touch-manipulation select-none",
                )}
                aria-label="Toggle Menu"
              >
                <IconRenderer
                  name={isMobileMenuOpen ? "X" : "Menu"}
                  size={24}
                  className="pointer-events-none"
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* --- NODE D: MOBILE OVERLAY INTERFACE --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(32px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="bg-surface-main/95 fixed inset-0 z-[90] flex flex-col lg:hidden"
          >
            <div className="relative z-10 flex h-full flex-col overflow-y-auto px-6 pt-36 pb-12">
              <nav className="flex-1 space-y-4">
                {MAIN_NAV.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: idx * 0.05 + 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-[2.5rem] border p-6 transition-all duration-700 md:p-8",
                          isActive
                            ? "border-brand-primary/50 bg-brand-primary text-surface-main shadow-glow"
                            : "border-border/50 bg-surface-card text-text-primary",
                        )}
                      >
                        <div className="flex items-center gap-4">
                          {item.href === "/status" && (
                            <div className="relative h-3 w-3">
                              <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-40" />
                              <div className="relative h-3 w-3 rounded-full bg-emerald-500" />
                            </div>
                          )}
                          <span className="font-sans text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                            {item.label}
                          </span>
                        </div>
                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-full",
                            isActive ? "bg-surface-main/20" : "bg-surface-offset",
                          )}
                        >
                          <IconRenderer name="ArrowRight" size={20} />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-10">
                <Button
                  asChild
                  className="bg-text-primary text-surface-main h-20 w-full rounded-[2rem] text-[13px] font-black tracking-[0.4em] uppercase"
                >
                  <Link href={SITE_CONFIG.links.line} target="_blank">
                    Contact Specialist Node
                  </Link>
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
