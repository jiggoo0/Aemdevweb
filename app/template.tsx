/**
 * [SYSTEM MODULE]: ROOT_TRANSITION_ORCHESTRATOR v18.0.0 (IDENTITY_SYNC)
 * [STRATEGY]: GPU Paint-Lock | Identity Persistence | Framer Re-mount Engine
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";

/**
 * [ENGINEERING_NOTE]: การใช้ 'template.tsx' แทน 'layout.tsx'
 * ช่วยบังคับให้ React ทำการ Re-mount DOM ทุกครั้งที่เปลี่ยน Route (Route-based Identity Trigger)
 * ซึ่งจำเป็นอย่างยิ่งสำหรับการทำงานของ Identity Switcher และ Page Transitions
 */
export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    /**
     * [STRATEGY]: Transition Shield & GPU Lock
     * bg-surface-main: ป้องกันการเกิดรอยต่อสีขาวระหว่างเปลี่ยนหน้า
     * will-change-transform: แจ้งเตือน GPU ให้เตรียมพร้อมสำหรับการทำแอนิเมชัน
     */
    <div className="bg-surface-main relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden will-change-transform">
      {/* [IDENTITY_PERSISTENCE]: 
         ห่อหุ้มด้วย PageTransition เพื่อรันแอนิเมชัน Entry/Exit 
         โดยอ้างอิงจากลำดับความสำคัญ (Priority) ที่กำหนดไว้ในแต่ละ Node
      */}
      <PageTransition className="flex w-full flex-auto flex-col">
        {/* [MOTION_GATEWAY]: ชั้นเลเยอร์สุดท้ายที่ควบคุมความนุ่มนวลก่อนส่งเนื้อหาออกสู่จอภาพ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1], // [QUINTIC_EASE]: ให้ความรู้สึกหรูหราและมั่นคง
          }}
          className="flex w-full flex-auto flex-col"
        >
          {children}
        </motion.div>
      </PageTransition>

      {/* [STRATEGY]: Global Atmospheric Mask 
         เลเยอร์โปร่งแสงบางๆ เพื่อคุมโทนแสงระหว่างรอยต่อ Identity
      */}
      <div
        className="bg-surface-main/10 pointer-events-none fixed inset-0 z-[9999] opacity-0 transition-opacity duration-500"
        aria-hidden="true"
      />
    </div>
  );
}
