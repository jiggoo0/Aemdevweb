/** @format */

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";

/**
 * ShopNavbar - ส่วนนำทางระบบโครงสร้างโซลูชัน (Strategic Navigation Hub)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างประสบการณ์การเข้าถึงข้อมูลที่แม่นยำและลื่นไหลระดับสูงสุด
 * มาตรฐาน: Strategic Interface Design และ High-Response Performance
 */
export const ShopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // [STRATEGIC ENGINE]: ระบบตรวจจับการเคลื่อนไหวเพื่อปรับคุณสมบัติการแสดงผล
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Solutions", href: "/templates#themes" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/blog" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-[100] w-full transition-all duration-700 ease-in-out",
        isScrolled
          ? "h-20 border-b border-slate-100 bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-2xl"
          : "h-24 bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        {/* [1. BRAND IDENTITY INTERFACE] */}
        <Link
          href="/templates"
          className="group relative flex items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-emerald-400 shadow-xl shadow-emerald-500/10"
          >
            <Zap size={22} fill="currentColor" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-heading text-2xl leading-none font-black tracking-tighter text-slate-950 uppercase italic">
              Shops<span className="text-emerald-500">.</span>
            </span>
            <span className="font-heading text-[8px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
              AEM STRATEGIC SYSTEM
            </span>
          </div>
        </Link>

        {/* [2. DESKTOP STRATEGIC LINKS] */}
        <div className="hidden items-center gap-12 md:flex">
          <ul className="flex items-center gap-10">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="group font-heading relative text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic transition-colors hover:text-slate-950"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={siteConfig.links.line}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-slate-950 px-8 py-4 text-[10px] font-black tracking-widest text-white uppercase italic shadow-2xl shadow-slate-950/20 transition-all hover:bg-emerald-600 active:scale-95"
          >
            <div className="relative z-10 flex items-center gap-3">
              <ShoppingBag size={14} className="text-emerald-400" />
              ปรึกษาแผนงานระบบ
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-600 to-teal-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </div>

        {/* [3. INTERACTION CONTROLLER - MOBILE] */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-950 ring-1 ring-slate-200 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* [4. MOBILE STRATEGIC OVERLAY] */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-0 z-[-1] flex h-screen flex-col bg-white/95 p-10 pt-32 backdrop-blur-3xl md:hidden"
          >
            <ul className="space-y-10">
              {menuItems.map((item, idx) => (
                <motion.li
                  key={`mob-${item.name}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-5xl font-black tracking-tighter text-slate-950 uppercase italic hover:text-emerald-500"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-10"
              >
                <a
                  href={siteConfig.links.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-[2rem] bg-emerald-500 p-8 text-slate-950 shadow-2xl shadow-emerald-500/20"
                >
                  <span className="font-heading text-lg font-black tracking-widest uppercase italic">
                    ปรึกษาโครงการกับผู้เชี่ยวชาญ
                  </span>
                  <ArrowRight size={24} strokeWidth={3} />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
