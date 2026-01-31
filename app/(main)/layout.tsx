/** @format */

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LineStickyButton from "@/components/shared/LineStickyButton";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="selection:bg-brand-primary/20 selection:text-brand-depth relative flex min-h-screen flex-col bg-white antialiased transition-colors duration-300 dark:bg-[oklch(0.12_0.02_260)]">
      {/* [SKIP TO CONTENT PROTOCOL] */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:rounded-xl focus:bg-brand-primary focus:p-4 focus:text-[10px] focus:font-black focus:text-brand-depth focus:uppercase focus:italic"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>

      <Navbar />

      {/* [CONTENT NODE WITH OPTIMIZED TRANSITION] */}
      <main id="main-content" className="flex-1 outline-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }} // ลดพิกัดการกระโดดลงเพื่อความสบายตา
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "circOut" }} // ใช้ความเร็วระดับ Specialist
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* [FLOATING ACTION NODE] */}
      <div className="fixed right-6 bottom-6 z-[90] md:right-10 md:bottom-10">
        <LineStickyButton />
      </div>

      <Footer />

      {/* Strategic Background Grid */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-[size:60px_60px] opacity-[0.02] dark:invert"
        aria-hidden="true"
      />
    </div>
  );
}
