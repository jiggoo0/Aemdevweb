/** @format */

"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { CaseStudyCard } from "@/components/shared/CaseStudyCard"
import { CaseStudyItem } from "@/types"

interface CaseStudiesGridProps {
  caseStudies: CaseStudyItem[]
}

/**
 * CaseStudiesGrid - โครงสร้างการแสดงผลโครงการเชิงกลยุทธ์ (Strategic Layout Framework)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การจัดวางระนาบข้อมูลแบบ Staggered เพื่อประสบการณ์การใช้งานที่ลื่นไหล
 * มาตรฐาน: รองรับ Framer Motion 12 และการจัดการข้อมูลที่แม่นยำ (Type Safety)
 */
export default function CaseStudiesGrid({ caseStudies }: CaseStudiesGridProps) {
  
  // [STRATEGIC VARIANTS]: การกำหนดค่าพารามิเตอร์สำหรับการเคลื่อนไหวเชิงระบบ
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const, // การกำหนดค่าแบบค่าคงที่เพื่อความแม่นยำของประเภทข้อมูล
        stiffness: 100,
        damping: 20,
      },
    },
  }

  // กรณีฐานข้อมูลโครงการอยู่ในสถานะรอการอัปเดต (Empty State Strategy)
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-slate-100 bg-slate-50/50 py-20">
        <p className="font-heading text-lg font-black tracking-[0.4em] text-slate-300 uppercase italic">
          --- System Standby: Data Synchronization ---
        </p>
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
    >
      {caseStudies.map((study, idx) => {
        // [DATA INTEGRITY GUARD]: การประมวลผลข้อมูลผลลัพธ์ให้สอดคล้องกับระนาบการแสดงผล
        const rawResult = study.frontmatter.results?.[0]
        const displayResult =
          typeof rawResult === "object" && rawResult !== null
            ? rawResult.value
            : rawResult || "Strategic Success"

        return (
          <motion.div key={study.slug} variants={itemVariants}>
            <CaseStudyCard
              slug={study.slug}
              index={idx}
              title={study.frontmatter.title}
              description={study.frontmatter.excerpt}
              image={study.frontmatter.thumbnail}
              industry={study.frontmatter.industry}
              /** การส่งมอบค่าตัวแปรในรูปแบบ String เพื่อความสมบูรณ์ของ Component Interface */
              result={String(displayResult)}
            />
          </motion.div>
        )
      })}
    </motion.div>
  )
}
