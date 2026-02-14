/**
 * [COMPONENT]: NAV_BAR v17.9.116 (ARCHITECT_EDITION)
 * [STRATEGY]: Zero-Layout Shift | GPU-Accelerated Glassmorphism | A11y Optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  type Variants,
} from "framer-motion";
import { MAIN_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

// --- 1. Physics Configuration (Apple-Like Fluidity) ---
const FLUID_EASE = [0.16, 1, 0.3, 1] as const;

const navVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: FLUID_EASE },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: { duration: 0.4, ease: FLUID_EASE },
  },
};

const mobileMenuVariants: Variants = {
  initial: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: FLUID_EASE },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(10px)",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const linkStaggerVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, ease: FLUID_EASE },
  }),
};

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // [LOGIC]: Smart Scroll Detection (Hysteresis)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    // ซ่อนเมื่อเลื่อนลง > 150px และเลื่อนเร็วพอสมควร
    if (latest > 150 && diff > 0) {
      setIsHidden(true);
    } else if (diff < -5) {
      // แสดงเมื่อเลื่อนขึ้นเล็กน้อย
      setIsHidden(false);
    }
  });

  // [LOGIC]: Body Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Prevent iOS bounce effect
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // [LOGIC]: Auto Close on Route Change
  useEffect(() => setIsOpen(false), [pathname]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      {/* --- HEADER COMPONENT --- */}
      <motion.header
        variants={navVariants}
        animate={isHidden ? "hidden" : "visible"}
        className="fixed top-0 left-0 z-[100] w-full px-4 py-4 md:px-6"
      >
        <div className="bg-surface-main/80 mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border border-white/10 px-5 shadow-lg ring-1 shadow-black/5 ring-white/5 backdrop-blur-xl md:h-16 md:px-8">
          {/* LOGO NODE */}
          <Link
            href="/"
            className="z-[110] flex items-center gap-2 text-lg font-black tracking-tighter transition-transform active:scale-95"
            onClick={() => setIsOpen(false)}
            aria-label="Back to Homepage"
          >
            <span className="text-brand-primary">AEM</span>
            <span className="text-text-primary">DEVWEB</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-1 lg:flex">
            <ul className="flex items-center gap-1 rounded-full bg-white/5 p-1 pr-6 backdrop-blur-sm">
              {MAIN_NAV.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-colors hover:text-white",
                        isActive ? "text-white" : "text-text-secondary",
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="bg-brand-primary absolute inset-0 z-[-1] rounded-full shadow-sm"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              {/* Divider */}
              <li className="mx-2 h-4 w-px bg-white/10" aria-hidden="true" />
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          {/* MOBILE TOGGLE & THEME */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="group bg-surface-card/50 relative z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 shadow-sm backdrop-blur-md transition-all active:scale-90"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              <div className="relative flex h-3.5 w-4 flex-col justify-between overflow-hidden">
                <span
                  className={cn(
                    "h-0.5 w-full origin-left bg-current transition-all duration-300",
                    isOpen && "translate-x-px rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-all duration-300",
                    isOpen && "translate-x-full opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full origin-left bg-current transition-all duration-300",
                    isOpen && "translate-x-px -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* --- MOBILE OVERLAY (ISOLATED LAYER) --- */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[90] flex flex-col items-center justify-start px-4 pt-24"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Menu Card */}
            <motion.nav
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-surface-main/95 relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur-2xl"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-brand-primary text-[10px] font-black tracking-[0.3em] uppercase">
                    Navigation
                  </span>
                  <span className="text-text-muted font-mono text-xs">
                    v{process.env.NEXT_PUBLIC_APP_VERSION || "17.9"}
                  </span>
                </div>

                <ul className="flex flex-col gap-2">
                  {MAIN_NAV.map((link, index) => (
                    <motion.li
                      key={link.href}
                      custom={index}
                      variants={linkStaggerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:bg-white/5",
                          pathname === link.href ? "bg-white/5" : "",
                        )}
                      >
                        <span
                          className={cn(
                            "text-2xl font-black tracking-tight transition-colors",
                            pathname === link.href ? "text-brand-primary" : "text-text-primary",
                          )}
                        >
                          {link.label}
                        </span>
                        {pathname === link.href && (
                          <span className="bg-brand-primary h-2 w-2 rounded-full shadow-[0_0_8px_currentColor]" />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-center border-t border-white/5 pt-6">
                  <p className="text-text-muted text-[10px] font-medium tracking-widest uppercase opacity-60">
                    Engineering · Strategy · Performance
                  </p>
                </div>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
