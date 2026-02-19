/**
 * [SYSTEM COMPONENT]: NAV_BAR v18.1.8 (TITAN_STABLE)
 * [STRATEGY]: Passive Scroll Tracking | Z-700 Escalation | SSR-Safe Hydration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect, memo, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants } from "framer-motion";
import { MAIN_NAV } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const FLUID_EASE = [0.16, 1, 0.3, 1] as const;

// [ANIMATION]: Mobile Menu Transitions
const mobileMenuVariants: Variants = {
  initial: { opacity: 0, scale: 0.96, y: 10 },
  animate: { 
    opacity: 1, scale: 1, y: 0, 
    transition: { duration: 0.4, ease: FLUID_EASE } 
  },
  exit: { 
    opacity: 0, scale: 0.98, y: 5, 
    transition: { duration: 0.2, ease: "easeIn" } 
  },
};

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  
  // [REF]: ป้องกัน Scroll Tracking เพี้ยนในช่วง Hydration
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    lastScrollY.current = window.scrollY;
  }, []);

  // [LOGIC]: Smart Header Hiding (Scroll Logic Stabilization)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;
    
    // เงื่อนไข: ซ่อนเมื่อเลื่อนลงเกิน 150px และเลื่อนเร็วพอ (diff > 10)
    if (latest > 150 && diff > 10 && !isOpen) {
      setIsHidden(true);
    } 
    // เงื่อนไข: แสดงเมื่อเลื่อนขึ้น (diff < -15) หรืออยู่บนสุดของหน้า
    else if (diff < -15 || latest < 20) {
      setIsHidden(false);
    }
    
    lastScrollY.current = latest;
  });

  // [SIDE_EFFECT]: Body Scroll Lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // [SIDE_EFFECT]: Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    if (!mounted) return;
    setIsOpen((prev) => !prev);
  }, [mounted]);

  // [SAFETY]: หาก MAIN_NAV ไม่มีข้อมูล จะไม่ทำให้หน้าเว็บพัง
  const navigationItems = MAIN_NAV || [];

  return (
    <>
      {/* --- LAYER 1: HEADER --- */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -120 : 0 }}
        transition={{ duration: 0.5, ease: FLUID_EASE }}
        // [Z-INDEX]: ดันขึ้น Z-700 เพื่อให้อยู่เหนือ Mobile Overlay และ Content ทั้งหมด
        className="fixed top-0 left-0 z-[700] w-full px-4 py-4 md:px-6 pointer-events-none"
      >
        <div className="bg-surface-main/80 border-border/40 mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border px-5 shadow-lg backdrop-blur-xl md:h-16 md:px-8 pointer-events-auto">
          
          {/* Logo Section */}
          <Link 
            href="/" 
            className="group relative z-[710] flex items-center gap-2" 
            onClick={() => setIsOpen(false)}
            aria-label="Home"
          >
            <div className="bg-brand-primary flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-black text-white uppercase shadow-glow transition-transform group-hover:rotate-6">
              AEM
            </div>
            <span className="text-text-primary text-xl font-black tracking-tighter uppercase italic">
              DEVWEB
            </span>
          </Link>

          {/* Desktop Navigation (Visible on Large Screens) */}
          <nav className="hidden items-center gap-2 lg:flex" role="navigation">
            <ul className="flex items-center gap-1 rounded-full bg-white/5 p-1 pr-6 backdrop-blur-sm">
              {navigationItems.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative block px-5 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-colors",
                        isActive ? "text-white" : "text-text-secondary hover:text-text-primary",
                      )}
                    >
                      {isActive && (
                        <motion.span 
                          layoutId="nav-pill" 
                          className="bg-brand-primary absolute inset-0 z-[-1] rounded-full shadow-glow-sm" 
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} 
                        />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mx-2 h-4 w-px bg-white/10" aria-hidden="true" />
              <li><ThemeToggle /></li>
            </ul>
          </nav>

          {/* Mobile UI Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              type="button"
              className={cn(
                "group relative z-[720] flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-surface-card/50 transition-all active:scale-90",
                isOpen && "border-brand-primary/50 bg-brand-primary/10"
              )}
              aria-expanded={isOpen}
              aria-label="Toggle Navigation"
            >
              <div className="relative flex h-3.5 w-4 flex-col justify-between">
                <span className={cn("h-0.5 w-full bg-current transition-all duration-300", isOpen && "translate-y-1.5 rotate-45")} />
                <span className={cn("h-0.5 w-full bg-current transition-all duration-300", isOpen && "opacity-0")} />
                <span className={cn("h-0.5 w-full bg-current transition-all duration-300", isOpen && "-translate-y-1.5 -rotate-45")} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* --- LAYER 2: MOBILE OVERLAY --- */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-nav-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // [Z-INDEX]: อยู่ที่ Z-600 (ต่ำกว่า Header เล็กน้อยเพื่อให้ปุ่ม Toggle อยู่เหนือ Overlay เสมอ)
            className="fixed inset-0 z-[600] flex flex-col items-center justify-start px-4 pt-28"
          >
            {/* Click-to-close backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-md" 
              onClick={() => setIsOpen(false)} 
              aria-hidden="true"
            />
            
            <motion.nav
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-surface-main/95 relative w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-border/40 p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur-2xl"
            >
              <ul className="flex flex-col gap-2">
                {navigationItems.map((link, index) => (
                  <motion.li 
                    key={link.href} 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-5 py-4 transition-all text-3xl font-black uppercase italic tracking-tighter",
                        pathname === link.href ? "text-brand-primary bg-brand-primary/10" : "text-text-primary hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);
