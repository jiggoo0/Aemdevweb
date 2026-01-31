/** @format */

"use client";

import * as React from "react";
import { useState, useEffect, useCallback, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Shield,
  MapPin,
} from "lucide-react"; // [FIXED]: ลบ ChevronDown ออกเรียบร้อยเพื่อเคลียร์ Unused Var Warning

import { Button } from "@/components/ui/button";
import { mainNav } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuId = useId();
  const { scrollY } = useScroll();

  // [SYSTEM SENSOR]: ตรวจจับการ Scroll เพื่อปรับเปลี่ยน State ของ UI
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      if (!isScrolled) setIsScrolled(true);
    } else {
      if (isScrolled) setIsScrolled(false);
    }
  });

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (typeof document !== "undefined") {
        document.body.style.overflow = next ? "hidden" : "";
      }
      return next;
    });
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 z-[100] w-full transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-white/80 py-3 shadow-xl shadow-slate-200/20 backdrop-blur-xl dark:bg-slate-950/80"
            : "bg-transparent py-6",
        )}
      >
        <div className="container-za">
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="flex items-center justify-between"
          >
            {/* [BRAND IDENTITY]: โลโก้และอัตลักษณ์แบรนด์ */}
            <Link
              href="/"
              className="group flex items-center gap-2 outline-none"
              aria-label="AEMDEVWEB Home"
            >
              <div className="bg-emerald-500 flex h-10 w-10 items-center justify-center rounded-xl shadow-lg shadow-emerald-500/20 transition-transform group-hover:rotate-12 group-hover:scale-110">
                <Shield size={22} className="text-slate-900 fill-current" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-black tracking-tighter text-slate-900 uppercase italic dark:text-white">
                  AEM<span className="text-emerald-500">DEV</span>WEB
                </span>
                <span className="text-[8px] font-bold text-slate-400 tracking-[0.3em] uppercase">
                  Strategic Specialist
                </span>
              </div>
            </Link>

            {/* [DESKTOP NAVIGATION]: เมนูสำหรับหน้าจอขนาดใหญ่ */}
            <div className="hidden items-center gap-6 lg:flex">
              <ul className="flex items-center gap-1" role="list">
                {mainNav.map((item) => {
                  const isActive =
                    pathname.startsWith(item.href) &&
                    (item.href !== "/" || pathname === "/");

                  return (
                    <li key={item.name} className="relative group">
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "relative flex items-center gap-2 rounded-xl px-4 py-2 text-[10px] font-black tracking-[0.15em] uppercase italic transition-all duration-300",
                          isActive
                            ? "text-emerald-500"
                            : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
                        )}
                      >
                        {item.name}
                        {item.badge && (
                          <span className="ml-1 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[7px] text-emerald-600 dark:bg-emerald-500/20">
                            {item.badge}
                          </span>
                        )}
                        {isActive && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="bg-emerald-500 absolute bottom-0 left-4 h-0.5 w-4 rounded-full"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div
                className="h-4 w-px bg-slate-200 dark:bg-white/10"
                aria-hidden="true"
              />

              <Button
                asChild
                className="bg-slate-900 h-11 px-6 text-white rounded-2xl hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 dark:bg-white dark:text-slate-900"
              >
                <Link
                  href="/contact"
                  className="gap-2 text-[10px] font-black italic"
                >
                  START PROJECT <ArrowUpRight size={16} />
                </Link>
              </Button>
            </div>

            {/* [MOBILE BUTTON]: ปุ่มควบคุมเมนูบนมือถือ */}
            <button
              onClick={toggleMenu}
              className="bg-slate-900 relative z-[110] flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg transition-transform active:scale-90 lg:hidden"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <X size={22} key="close" />
                ) : (
                  <Menu size={22} key="menu" />
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </header>

      {/* [MOBILE NAVIGATION OVERLAY]: เมนูเต็มจอสำหรับมือถือ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={mobileMenuId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] bg-slate-950/60 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white ml-auto h-full w-[85%] max-w-sm p-6 pt-24 shadow-2xl dark:bg-slate-900"
            >
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
                  Strategic Navigation
                </p>

                {mainNav.map((item, i) => {
                  const isActive =
                    pathname.startsWith(item.href) &&
                    (item.href !== "/" || pathname === "/");
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-6 py-5 transition-all",
                          isActive
                            ? "bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/20"
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-white/5 dark:text-slate-300",
                        )}
                      >
                        <div className="flex flex-col">
                          <span className="text-2xl font-black tracking-tighter uppercase italic">
                            {item.name}
                          </span>
                          <span className="text-[9px] font-medium opacity-60 italic">
                            {item.description}
                          </span>
                        </div>
                        {item.badge === "Local" ? (
                          <MapPin size={20} />
                        ) : (
                          <ArrowUpRight size={20} />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="mt-8 border-t border-slate-100 pt-8 dark:border-white/5">
                  <Button
                    asChild
                    className="h-20 w-full rounded-3xl bg-slate-900 text-xl font-black uppercase italic text-white shadow-2xl hover:bg-emerald-500 hover:text-slate-900 transition-all dark:bg-emerald-500 dark:text-slate-950"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-4"
                    >
                      HIRE SPECIALIST <ArrowUpRight size={24} strokeWidth={3} />
                    </Link>
                  </Button>
                  <p className="mt-6 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    System Status:{" "}
                    <span className="text-emerald-500">Optimized</span>
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="absolute inset-0 -z-10" onClick={toggleMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
