"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        /* [PERFORMANCE TUNING]: เริ่มที่ Opacity 0.01 แทน 0 เพื่อหลีกเลี่ยง Browser Paint Delay บางส่วน */
        initial={{ opacity: 0.01, y: 10 }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        /* [TIMING]: ปรับเวลาให้สั้นลง (0.4s) เพื่อความรู้สึก Snappy และดีต่อ LCP */
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full flex-grow flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
