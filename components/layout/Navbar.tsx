/**
 * [COMPONENT]: NAV_BAR v17.9.115 (STABILIZED)
 * [STRATEGY]: Bezier Motion | Compact Overlay | Glassmorphism
 * [MAINTAINER]: AEMZA MACKS
 */

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Variants, BezierDefinition } from "framer-motion";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { MAIN_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

// --- 1. Animation Configuration (Strict Types) ---
const appleEase: BezierDefinition = [0.16, 1, 0.3, 1]; // พริ้วไหวแบบ iOS

const menuVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: -20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: appleEase },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: { duration: 0.3, ease: appleEase },
  },
};

const linkVariants: Variants = {
  initial: { x: -10, opacity: 0 },
  open: { x: 0, opacity: 1, transition: { duration: 0.4, ease: appleEase } },
};

const containerVars: Variants = {
  initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.2, staggerChildren: 0.07, staggerDirection: 1 } },
};

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Smart Scroll Logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  // Body Lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Auto Close on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: appleEase }}
        className="fixed top-0 left-0 z-[100] w-full px-4 py-4 md:px-8"
      >
        <div className="bg-surface-main/70 mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/10 px-6 shadow-xl ring-1 ring-black/5 backdrop-blur-xl">
          {/* LOGO */}
          <Link
            href="/"
            className="z-[110] flex items-center gap-2 text-xl font-black tracking-tighter transition-transform active:scale-95"
            onClick={() => setOpen(false)}
          >
            <span className="text-brand-primary">AEM</span>
            <span className="text-text-primary">DEVWEB</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 lg:flex">
            {MAIN_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "hover:text-brand-primary relative text-sm font-bold tracking-widest uppercase transition-colors",
                  pathname === link.href ? "text-brand-primary" : "text-text-secondary",
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="bg-brand-primary absolute -bottom-1 left-0 h-1 w-full rounded-full"
                  />
                )}
              </Link>
            ))}
            <div className="h-4 w-px bg-white/20" />
            <ThemeToggle />
          </nav>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="bg-brand-primary relative z-[110] flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition-transform active:scale-90"
              aria-label="Toggle Menu"
            >
              <div className="relative flex h-5 w-5 flex-col justify-between overflow-hidden">
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-all duration-300",
                    open ? "translate-y-2.5 rotate-45" : "",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-all duration-300",
                    open ? "opacity-0" : "",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-all duration-300",
                    open ? "translate-x-0 -translate-y-2 -rotate-45" : "",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* COMPACT MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-24 pb-10">
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Menu Card Layer */}
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-surface-main/90 relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/20 p-8 shadow-2xl backdrop-blur-2xl"
            >
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-3"
              >
                <span className="text-brand-primary mb-2 text-[10px] font-black tracking-[0.3em] uppercase">
                  Main Menu
                </span>
                {MAIN_NAV.map((link, index) => (
                  <motion.div key={index} variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block text-3xl font-black tracking-tight transition-all hover:translate-x-2",
                        pathname === link.href
                          ? "text-brand-primary translate-x-2"
                          : "text-text-primary",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase">
                  © {new Date().getFullYear()} AEMDEVWEB Specialist
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
