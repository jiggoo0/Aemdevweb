/** @format */

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

// พิกัดข้อมูลตัวตนและโครงสร้างระบบ
import { siteConfig } from "@/constants/site-config";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * PrivacyClient: มาตรฐานการคุ้มครองข้อมูลส่วนบุคคล 2026
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: Strategic Trust Framework (ความโปร่งใสระดับ Specialist)
 * มาตรฐาน: Tailwind 4 OKLCH | Ultra-Deep Level 7
 * ควบคุมโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function PrivacyClient() {
  const lastUpdated = "31 มกราคม 2026";

  // พิกัดการเคลื่อนไหวเชิงระบบ (Motion Protocol)
  const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <main className="relative min-h-screen bg-[oklch(1_0_0)] pb-32 antialiased dark:bg-[oklch(0.12_0.02_260)]">
      {/* 1. SCHEMA: ยืนยันพิกัดความโปร่งใสต่อระบบ AI Search */}
      <JsonLd
        type="WebPage"
        data={{
          name: `Privacy Policy | ${siteConfig.project.name}`,
          description:
            "Professional data protection and privacy standards for strategic business projects.",
          publisher: {
            "@id": "https://me.aemdevweb.com/#person",
          },
          dateModified: "2026-01-31",
        }}
      />

      {/* Technical Grid Layer */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.03] dark:invert" />

      {/* 2. HERO HEADER: พิกัดการประกาศพันธสัญญา (Strategic Header) */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="container-za text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-brand-depth text-brand-primary shadow-node dark:bg-brand-primary dark:text-brand-depth mx-auto mb-12 flex h-24 w-24 items-center justify-center rounded-[3rem]"
          >
            <ShieldCheck size={48} strokeWidth={1.5} />
          </motion.div>

          <motion.h1
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="font-heading text-brand-depth text-6xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-[9rem] dark:text-white"
          >
            Privacy <br />
            <span className="text-brand-primary">Policy.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 inline-flex items-center gap-3 rounded-full border border-[oklch(0.9_0.02_260)] bg-white px-8 py-3 shadow-sm dark:border-white/5 dark:bg-white/5"
          >
            <div className="bg-brand-primary h-2 w-2 animate-ping rounded-full" />
            <p className="font-body text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.02_260)] uppercase italic">
              System Audit Status:{" "}
              <span className="text-brand-depth dark:text-white">
                Verified {lastUpdated}
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. POLICY MATRIX: พิกัดการจัดการข้อมูลเชิงระบบ */}
      <section className="container-za py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl space-y-8"
        >
          <PolicyCard
            icon={FileText}
            title="01. Data Governance"
            content="เราให้ความสำคัญกับข้อมูลโครงการของท่านเป็นอันดับหนึ่ง ข้อมูลพื้นฐานจะถูกนำมาใช้เพื่อการวิเคราะห์และพัฒนาระบบให้บรรลุวัตถุประสงค์สูงสุดเท่านั้น โดยปราศจากนโยบายการเปิดเผยข้อมูลก่อนได้รับอนุญาตเป็นลายลักษณ์อักษร"
          />

          <PolicyCard
            icon={Lock}
            title="02. Security Infrastructure"
            content="ระบบที่ส่งมอบพัฒนาบนโครงสร้าง Next.js 16 พร้อมการรักษาความปลอดภัยระดับ Code-Level ข้อมูลสำคัญจะถูกจัดเก็บด้วยมาตรฐานการเข้ารหัสที่ทันสมัยที่สุด เพื่อความปลอดภัยของสินทรัพย์ดิจิทัล"
          />

          <PolicyCard
            icon={Eye}
            title="03. Confidentiality"
            content="ความลับทางการค้าคือหัวใจของธุรกิจ เรามีมาตรการรักษาความลับอย่างเข้มงวด ข้อมูลโครงการของท่านจะไม่ถูกส่งต่อ นำไปใช้ซ้ำ หรือจำหน่ายให้แก่บุคคลภายนอกโดยเด็ดขาด (Zero Third-Party Data Sharing Policy)"
          />

          {/* 4. ACTION NODE: พิกัดบริหารจัดการสิทธิ์ (Impact Node) */}
          <motion.div
            variants={fadeIn}
            className="group bg-brand-depth shadow-node relative overflow-hidden rounded-[4rem] p-12 md:p-24 dark:bg-[oklch(0.2_0.02_260)]"
          >
            <div className="absolute -top-12 -right-12 opacity-10 transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-12">
              <Zap size={300} className="text-brand-primary" />
            </div>

            <div className="relative z-10 space-y-10">
              <div className="bg-brand-primary text-brand-depth shadow-aurora flex h-16 w-16 items-center justify-center rounded-[1.5rem]">
                <UserCheck size={32} />
              </div>

              <div className="space-y-6">
                <h2 className="font-heading text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl">
                  Data Rights <br /> Management.
                </h2>
                <p className="font-body max-w-2xl text-xl font-bold text-[oklch(0.8_0.02_260)]">
                  ท่านมีสิทธิ์โดยสมบูรณ์ในการบริหารจัดการข้อมูลส่วนบุคคล
                  ทั้งการตรวจสอบ การแก้ไข
                  หรือการร้องขอให้ลบข้อมูลออกจากระบบผ่านช่องทางหลักได้ทันที
                </p>
              </div>

              <a
                href={siteConfig.links.line}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-brand-depth hover:bg-brand-primary inline-flex items-center gap-4 rounded-2xl bg-white px-10 py-6 text-[11px] font-black tracking-[0.3em] uppercase italic transition-all hover:text-white active:scale-95 shadow-2xl"
              >
                REQUEST DATA ACCESS <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Branding Footer Node */}
      <footer className="mt-32 py-20 text-center opacity-30 select-none">
        <p className="font-heading text-brand-depth text-[10px] font-black tracking-[0.6em] uppercase italic dark:text-white">
          Strategic Data Integrity Standard • AEMDEVWEB 2026
        </p>
      </footer>
    </main>
  );
}

/**
 * [SUB-COMPONENT]: PolicyCard
 */
function PolicyCard({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
}) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
      }}
      className="depth-card group hover:border-brand-primary/40 p-10 md:p-20"
    >
      <div className="flex flex-col items-start gap-10 md:flex-row">
        <div className="group-hover:bg-brand-depth group-hover:text-brand-primary flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-[oklch(0.98_0.01_260)] text-[oklch(0.5_0.02_260)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 dark:bg-white/5">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <div className="space-y-6">
          <h2 className="font-heading text-brand-depth text-3xl font-black tracking-tighter uppercase italic dark:text-white">
            {title}
          </h2>
          <p className="font-body text-lg font-bold text-[oklch(0.45_0.02_260)] dark:text-[oklch(0.7_0.02_260)]">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
