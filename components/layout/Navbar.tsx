/**
 * [SYSTEM COMPONENT]: NAV_BAR v19.0.0 (SSOT_INTEGRATED)
 * [STRATEGY]: Pure CSS Transitions | High-Performance Scroll Logic | UI Strings Registry
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect, memo, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/constants/navigation";
import { UI_STRINGS } from "@/constants/ui-strings";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // [REF]: ป้องกัน Scroll Tracking เพี้ยนในช่วง Hydration
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      // [OPTIMIZED]: เพิ่ม Threshold 50px เพื่อป้องกันการกระพริบสลับ State ไปมา
      if (currentScrollY > 150 && diff > 50 && !isOpen) {
        setIsHidden(true);
      } else if (diff < -20 || currentScrollY < 20) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // [SIDE_EFFECT]: Body Scroll Lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
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
      <header
        // [Z-INDEX]: ดันขึ้น Z-700 เพื่อให้อยู่เหนือ Mobile Overlay และ Content ทั้งหมด
        className={cn(
          "z-nav fixed top-0 left-0 w-full px-4 py-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-6",
          isHidden ? "-translate-y-[120%]" : "translate-y-0",
        )}
      >
        <div className="bg-surface-main/80 border-border/40 pointer-events-auto mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border px-5 shadow-lg backdrop-blur-sm md:h-16 md:px-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group relative z-[710] flex items-center gap-2"
              onClick={() => setIsOpen(false)}
              aria-label="Home"
            >
              <div className="bg-brand-primary flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-black text-white uppercase shadow-md transition-transform group-hover:rotate-6">
                AEM
              </div>
              <span className="text-text-primary text-xl font-black tracking-tighter uppercase italic">
                DEVWEB
              </span>
            </Link>

            {/* System Intelligence HUD */}
            <div className="hidden items-center gap-2 border-l border-white/10 pl-4 md:flex">
              <div className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_var(--brand-primary)]"></span>
              </div>
              <span className="font-sans text-[9px] font-bold tracking-widest text-emerald-500 uppercase opacity-80">
                {UI_STRINGS.cta.systemActiveStatus}
              </span>
            </div>
          </div>

          {/* Desktop Navigation (Visible on Large Screens) */}
          <nav className="hidden items-center gap-2 lg:flex" role="navigation">
            <ul className="bg-border/20 flex items-center gap-1 rounded-full p-1 pr-6 backdrop-blur-sm">
              {navigationItems.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative block px-5 py-2 text-[10px] leading-relaxed font-black tracking-[0.2em] uppercase transition-colors",
                        isActive ? "text-white" : "text-text-secondary hover:text-text-primary",
                      )}
                    >
                      {isActive && (
                        <span className="bg-brand-primary absolute inset-0 z-[-1] rounded-full shadow-sm transition-all duration-300" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="bg-border/20 mx-2 h-4 w-px" aria-hidden="true" />
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          {/* Mobile UI Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              type="button"
              className={cn(
                "group border-border/40 bg-surface-card/50 relative z-[720] flex h-10 w-10 items-center justify-center rounded-full border transition-all active:scale-90",
                isOpen && "border-brand-primary/50 bg-brand-primary/10",
              )}
              aria-expanded={isOpen}
              aria-label="Toggle Navigation"
            >
              <div className="relative flex h-3.5 w-4 flex-col justify-between">
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-all duration-300",
                    isOpen && "translate-y-1.5 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-all duration-300",
                    isOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-current transition-all duration-300",
                    isOpen && "-translate-y-1.5 -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* --- LAYER 2: MOBILE OVERLAY --- */}
      <div
        className={cn(
          "z-overlay fixed inset-0 flex flex-col items-center justify-start px-4 pt-28 transition-all duration-500",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {/* Click-to-close backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        <nav
          className={cn(
            "bg-surface-main/95 rounded-section border-border/40 relative w-full max-w-sm overflow-hidden border p-6 shadow-2xl ring-1 ring-white/5 backdrop-blur-sm transition-all duration-500",
            isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-5 scale-95 opacity-0",
          )}
        >
          <ul className="flex flex-col gap-2">
            {navigationItems.map((link, index) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                className={cn(
                  "transition-all duration-500",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0",
                )}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-5 py-4 text-3xl leading-relaxed font-black tracking-tighter uppercase italic transition-all",
                    pathname === link.href
                      ? "text-brand-primary bg-brand-primary/10"
                      : "text-text-primary hover:bg-white/5",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default memo(Navbar);
