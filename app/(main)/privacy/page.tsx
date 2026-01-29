/** @format */

"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Zap,
  ArrowRight,
} from "lucide-react"

// ข้อมูลตัวตนและโครงสร้างระบบ
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * PrivacyPage - มาตรฐานการคุ้มครองข้อมูลส่วนบุคคล 2026
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: Strategic Trust Framework
 * มาตรฐาน: การคุ้มครองข้อมูลตามหลักสากลเพื่อความมั่นคงทางธุรกิจ
 */
export default function PrivacyPage() {
  const lastUpdated = "29 มกราคม 2026"

  // การกำหนดค่าการเคลื่อนไหวเพื่อความต่อเนื่องเชิงระบบ
  const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const staggerContainer: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      {/* 1. SCHEMA: การระบุโครงสร้างข้อมูลเพื่อความโปร่งใสต่อระบบการค้นหาและ AI */}
      <JsonLd
        type="WebPage"
        data={{
          name: `Privacy Policy | ${siteConfig.project.name}`,
          description:
            "Professional data protection and privacy standards for strategic business projects.",
          publisher: {
            "@type": "Person",
            "@id": `${siteConfig.links.personal}/#person`,
            name: siteConfig.expert.realName,
          },
          dateModified: "2026-01-29",
        }}
      />

      {/* รายละเอียดพื้นหลัง: ลายเส้นโครงสร้างเชิงระบบเพื่อความประณีต */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* 2. Hero Header: การประกาศพันธสัญญาด้านความเป็นส่วนตัว */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mx-auto mb-12 flex h-24 w-24 items-center justify-center rounded-[3rem] bg-slate-950 text-emerald-500 shadow-2xl shadow-emerald-500/20"
          >
            <ShieldCheck size={48} strokeWidth={1.5} />
          </motion.div>

          <motion.h1
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl"
          >
            Privacy <br />
            <span className="text-emerald-500">Policy.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 inline-flex items-center gap-3 rounded-full border border-slate-100 bg-white px-8 py-3 shadow-sm"
          >
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <p className="font-body text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase italic">
              System Audit Status:{" "}
              <span className="text-slate-950">Verified {lastUpdated}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Policy Matrix: รายละเอียดการจัดการข้อมูลที่โปร่งใส */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl space-y-10"
        >
          <PolicyCard
            icon={FileText}
            title="01. Data Governance"
            content="เราให้ความสำคัญกับข้อมูลโครงการของท่านเป็นอันดับหนึ่ง ข้อมูลพื้นฐาน อาทิ ชื่อ รายละเอียดการติดต่อ หรือข้อมูลความต้องการทางธุรกิจ จะถูกนำมาใช้เพื่อการวิเคราะห์และพัฒนาระบบให้บรรลุวัตถุประสงค์สูงสุดเท่านั้น โดยปราศจากนโยบายการเปิดเผยข้อมูลก่อนได้รับอนุญาตเป็นลายลักษณ์อักษร"
          />

          <PolicyCard
            icon={Lock}
            title="02. Security Infrastructure"
            content="ระบบที่ส่งมอบพัฒนาบนโครงสร้าง Next.js 16 พร้อมการรักษาความปลอดภัยระดับ Code-Level ข้อมูลสำคัญและชุดคำสั่ง API จะถูกจัดเก็บและป้องกันด้วยมาตรฐานการเข้ารหัสที่ทันสมัยที่สุด เพื่อความปลอดภัยของทรัพย์สินดิจิทัลในระยะยาว"
          />

          <PolicyCard
            icon={Eye}
            title="03. Confidentiality"
            content="ความลับทางการค้าและกลยุทธ์การดำเนินงานคือหัวใจของธุรกิจ เรามีมาตรการรักษาความลับอย่างเข้มงวด ข้อมูลโครงการของท่านจะไม่ถูกส่งต่อ นำไปใช้ซ้ำ หรือจำหน่ายให้แก่บุคคลภายนอกโดยเด็ดขาด (Zero Third-Party Data Sharing Policy)"
          />

          {/* 4. Action Node: การบริหารจัดการสิทธิ์ในข้อมูล */}
          <motion.div
            variants={fadeIn}
            className="group relative overflow-hidden rounded-[4rem] border border-emerald-500/20 bg-slate-950 p-12 transition-all duration-700 hover:border-emerald-500/40 md:p-24"
          >
            <div className="absolute -top-12 -right-12 opacity-10 transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-12">
              <Zap size={300} className="text-emerald-500" />
            </div>

            <div className="relative z-10 space-y-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-emerald-500 text-slate-950 shadow-xl shadow-emerald-500/30">
                <UserCheck size={32} />
              </div>

              <div className="space-y-6">
                <h2 className="font-heading text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl">
                  Data Rights <br /> Management.
                </h2>
                <p className="font-body max-w-2xl text-xl leading-relaxed font-bold text-slate-400">
                  ท่านมีสิทธิ์โดยสมบูรณ์ในการบริหารจัดการข้อมูลส่วนบุคคล
                  ทั้งการตรวจสอบ การแก้ไข หรือการร้องขอให้ลบข้อมูลออกจากระบบ
                  โดยสามารถประสานงานผ่านช่องทางการสื่อสารอย่างเป็นทางการได้ทันที
                </p>
              </div>

              <a
                href={siteConfig.links.line}
                target="_blank"
                className="inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-6 text-[11px] font-black tracking-[0.3em] text-slate-950 uppercase italic transition-all hover:bg-emerald-500 hover:text-white active:scale-95"
              >
                REQUEST DATA ACCESS <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ส่วนท้ายหน้า: ข้อมูลมาตรฐานระบบ */}
      <footer className="mt-32 border-t border-slate-50 py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          Strategic Data Integrity Standard • 2026
        </p>
      </footer>
    </main>
  )
}

/**
 * PolicyCard Component
 */
function PolicyCard({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ElementType
  title: string
  content: string
}) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
      }}
      className="group relative rounded-[3.5rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] md:p-20"
    >
      <div className="flex flex-col items-start gap-10 md:flex-row">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-slate-50 text-slate-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-slate-950 group-hover:text-emerald-500">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <div className="space-y-6">
          <h2 className="font-heading text-3xl leading-none font-black tracking-tighter text-slate-950 uppercase italic">
            {title}
          </h2>
          <p className="font-body text-lg leading-relaxed font-bold text-slate-500 transition-colors group-hover:text-slate-600">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
