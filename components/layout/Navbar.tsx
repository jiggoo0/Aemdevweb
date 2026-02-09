"use client";

/**
 * [LAYOUT COMPONENT]: SYSTEM_NAVBAR v17.2.3 (CLS_STABILIZED)
 * [STRATEGY]: Intelligent Scroll Physics | Zero-Friction Navigation | Specialist Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// --- Infrastructure & Data ---
import { SITE_CONFIG } from "@/constants/site-config"; //
import { MAIN_NAV } from "@/constants/navigation"; //
import { cn } from "@/lib/utils"; //

// --- UI Components ---
import IconRenderer from "@/components/ui/IconRenderer"; //
import { Button } from "@/components/ui/button";

/**
 * [STABILIZED]: Navbar Component
 * ปรับจูนการทำงานร่วมกับระบบ Next.js 16 และ React 19 อย่างสมบูรณ์
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  /* 01. PERFORMANCE SCROLL OBSERVER (Optimized with RAF)
     [STRATEGY]: ลดภาระการคำนวณของ Browser เพื่อป้องกันอาการกระตุกขณะเลื่อนหน้าจอ */
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

  /* 02. ROUTE GUARD: ปิดเมนูอัตโนมัติเมื่อมีการเปลี่ยนหน้า */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  /* 03. SCROLL LOCK PROTOCOL
     [MANDATE]: ป้องกันการเลื่อนหน้าเว็บซ้อนกันเมื่อเปิด Mobile Menu */
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] flex justify-center transition-all duration-500 ease-[0.16,1,0.3,1]",
          isScrolled ? "pt-4 md:pt-6" : "pt-0",
        )}
      >
        <nav
          className={cn(
            "transition-all duration-700 ease-[0.16,1,0.3,1]",
            /* [GLASSMORPHISM]: การใช้พื้นหลังโปร่งแสงและ Blur เพื่อสร้างมิติ (Atmospheric Depth) */
            isScrolled
              ? "w-[92%] max-w-6xl rounded-[2rem] border border-white/10 bg-[#050505]/80 shadow-2xl backdrop-blur-xl"
              : "w-full border-b border-white/5 bg-[#050505]/50 backdrop-blur-sm",
          )}
        >
          <div
            className={cn(
              "relative flex items-center justify-between px-4 py-3 md:px-6 md:py-4",
              /* [CLS SHIELD]: จองพื้นที่ความสูงที่แน่นอนเพื่อป้องกันเลย์เอาต์กระโดด */
              isScrolled ? "min-h-[70px]" : "min-h-[80px]",
            )}
          >
            {/* [NODE A]: BRAND IDENTITY (Single Source of Truth) */}
            <Link href="/" className="group flex items-center gap-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                <IconRenderer name="Cpu" size={20} strokeWidth={2.5} />
              </div>
              <div className="hidden flex-col leading-none md:flex">
                <span className="font-sans text-lg font-black tracking-tighter text-white uppercase">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-brand-primary font-mono text-[8px] font-black tracking-[0.3em] uppercase">
                  Specialist.System
                </span>
              </div>
            </Link>

            {/* [NODE B]: DESKTOP NAVIGATION HUB
               [USER EXPERIENCE]: จัดลำดับความสำคัญของเมนูผ่านการแสดงผลที่ชัดเจน */}
            <div className="hidden items-center gap-1 rounded-2xl border border-white/5 bg-white/5 p-1 backdrop-blur-md lg:flex">
              {MAIN_NAV.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative rounded-xl px-5 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300",
                      isActive
                        ? "bg-brand-primary text-black shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                        : "text-gray-400 hover:bg-white/10 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* [NODE C]: CONVERSION POINT
               [STRATEGY]: ทุกจุดสัมผัสต้องนำไปสู่โอกาสในการปิดการขาย */}
            <div className="flex items-center gap-4">
              <Button
                asChild
                className="hover:bg-brand-primary hidden h-10 rounded-xl bg-white px-6 text-[10px] font-black tracking-widest text-black uppercase shadow-lg transition-all duration-500 hover:text-black hover:shadow-xl md:flex"
              >
                <Link href={SITE_CONFIG.links.line} target="_blank">
                  <IconRenderer name="MessageCircle" size={14} className="mr-2" />
                  Start Project
                </Link>
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all active:scale-90 lg:hidden"
                aria-label="Toggle Menu"
              >
                <IconRenderer name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* [NODE D]: MOBILE OVERLAY INTERFACE
         [ANIMATION]: ใช้ Framer Motion เพื่อสร้างความลื่นไหลระดับสัญชาตญาณ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] flex flex-col bg-[#050505] lg:hidden"
          >
            {/* Background Atmosphere Layer */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="bg-brand-primary/10 absolute right-0 -bottom-[20%] h-[500px] w-[500px] rounded-full blur-[120px]" />
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
                      transition={{ delay: idx * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-center justify-between rounded-[2rem] border p-6 transition-all duration-300",
                          isActive
                            ? "border-brand-primary/50 bg-brand-primary text-black"
                            : "hover:border-brand-primary/30 border-white/10 bg-white/5 text-white hover:bg-white/10",
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="font-sans text-2xl font-black tracking-tighter uppercase italic">
                          {item.label}
                        </span>
                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                            isActive
                              ? "bg-black/20 text-black"
                              : "group-hover:bg-brand-primary bg-white/10 text-white group-hover:text-black",
                          )}
                        >
                          <IconRenderer name="ArrowRight" size={20} />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-500">
                    <div className="h-px w-8 bg-gray-800" />
                    <span className="font-mono tracking-widest uppercase">System Navigation</span>
                    <div className="h-px w-8 bg-gray-800" />
                  </div>
                  <Button
                    asChild
                    className="hover:bg-brand-primary h-14 w-full rounded-[1.5rem] bg-white text-xs font-black tracking-widest text-black uppercase hover:text-black"
                  >
                    <Link href={SITE_CONFIG.links.line} target="_blank">
                      Contact Specialist
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar); //
