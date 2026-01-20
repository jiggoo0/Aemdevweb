/** @format */

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Factory, Zap } from "lucide-react";

/**
 * 🤝 รายชื่อลูกค้าที่ไว้ใจผม (Client Portfolio)
 * แนะนำ: ใช้รูป .webp ขนาดเล็กเพื่อให้เว็บโหลดไวที่สุดตามมาตรฐานผมครับ
 */
const clients = [
  { name: "Unlink TH", logo: "/images/showcase/unlink-th1.webp" },
  { name: "Industrial Solutions", logo: "/images/showcase/project-01.webp" },
  { name: "SME Thailand", logo: "/images/showcase/aemdevweb-hero.webp" },
  { name: "Factory Pro", logo: "/images/showcase/project-01.webp" },
  { name: "Digital Partner", logo: "/images/showcase/unlink-th1.webp" },
  { name: "Tech Export", logo: "/images/showcase/aemdevweb-hero.webp" },
];

/**
 * 📊 สถิติที่ผมสร้างให้ลูกค้า (Impact Stats)
 * ผมเน้นตัวเลขที่เจ้าของธุรกิจให้ความสำคัญ: การเติบโต, ความน่าเชื่อถือ และความเร็ว
 */
const stats = [
  {
    label: "ดูแลธุรกิจมาแล้ว",
    value: "50+",
    icon: Users,
    description: "ช่วย SME และสตาร์ทอัพไทยให้เติบโตบนโลกออนไลน์",
  },
  {
    label: "กลุ่มโรงงานอุตสาหกรรม",
    value: "12+",
    icon: Factory,
    description: "วางระบบและดูแลเว็บไซต์ให้โรงงานระดับประเทศ",
  },
  {
    label: "คะแนนความเร็วเว็บ",
    value: "99/100",
    icon: Zap,
    description: "คะแนนเฉลี่ย Google PageSpeed ที่ผมทำให้ทุกโปรเจกต์",
  },
];

/**
 * 🧬 HomeClientSections — ส่วนแสดงความน่าเชื่อถือ
 */
const HomeClientSections = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 antialiased lg:py-32">
      {/* 📐 พื้นหลังลายตาราง (Industrial Grid Pattern) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        
        {/* --- 🤝 ส่วนที่ 1: โลโก้ลูกค้า (Infinite Auto-Slider) --- */}
        <div className="mb-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-prompt mb-10 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase"
          >
            Trusted by Forward-Thinking Businesses
          </motion.p>

          {/* ระบบสไลด์โลโก้: เน้นความลื่นไหลและไม่กินทรัพยากรเครื่อง */}
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] py-10">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex shrink-0 items-center gap-16 md:gap-24"
            >
              {[...Array(4)].map((_, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  {clients.map((client, i) => (
                    <div
                      key={`${groupIndex}-${i}`}
                      className="relative h-10 w-32 shrink-0 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:h-12 md:w-40"
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="(max-width: 768px) 128px, 160px"
                        className="object-contain"
                        priority={groupIndex === 0}
                      />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- 📊 ส่วนที่ 2: สถิติผลงาน (Impact Stats) --- */}
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 transition-all duration-500 hover:-translate-y-3 hover:border-emerald-500/30 hover:shadow-2xl"
            >
              {/* Icon Container */}
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all duration-500 group-hover:rotate-[10deg] group-hover:bg-emerald-500 group-hover:text-white">
                <stat.icon className="h-7 w-7" />
              </div>

              {/* ตัวเลขสถิติ */}
              <div className="mb-3 flex items-baseline gap-2">
                <span className="font-prompt text-5xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
                  {stat.value}
                </span>
                <CheckCircle2 className="h-6 w-6 animate-pulse text-emerald-500" />
              </div>

              <h3 className="font-prompt text-[11px] font-black tracking-[0.25em] text-slate-500 uppercase italic">
                {stat.label}
              </h3>
              <p className="font-anuphan mt-4 text-sm leading-relaxed font-bold text-slate-400 transition-colors group-hover:text-slate-500">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- 💡 ส่วนที่ 3: ข้อความปิดท้าย (Final Hook) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 rounded-[3.5rem] bg-slate-950 p-12 text-center shadow-2xl md:p-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="font-prompt text-3xl leading-none font-black tracking-tighter text-white uppercase italic md:text-5xl lg:text-6xl">
              ตั้งแต่ธุรกิจ SME จนถึงโรงงานอุตสาหกรรม{" "}
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                ผมเปลี่ยน "ความเร็ว" ให้เป็น "ยอดขาย"
              </span>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeClientSections;
