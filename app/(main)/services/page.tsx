/** @format */

"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { Search, Clock, Zap, ShieldCheck, ArrowRight } from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * ServicesPage: ศูนย์รวมโซลูชันแผนงานระบบ (Strategic Service Inventory)
 * -------------------------------------------------------------------------
 * มาตรฐาน: Ultra-Deep Level 7 | Tailwind 4 OKLCH | Zero Warning
 * ควบคุมโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function ServicesPage() {
  // พิกัดการเคลื่อนไหวเชิงระบบ (Motion Protocol)
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer: Variants = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-[oklch(1_0_0)] pb-32 antialiased dark:bg-[oklch(0.12_0.02_260)]"
    >
      {/* [1. SERVICE SCHEMA]: การระบุโครงสร้างข้อมูลเพื่อชิงพิกัด Rich Snippets */}
      <JsonLd
        type="Graph"
        data={{
          "@graph": [
            {
              "@type": "Service",
              "@id": `${siteConfig.project.url}/services/#service`,
              name: "Web Infrastructure & Technical SEO",
              provider: { "@id": "https://me.aemdevweb.com/#person" },
              areaServed: "TH",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AEM Strategic Solutions",
                itemListElement: servicesData.map((s, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Offer",
                    name: s.title,
                    price: s.priceValue,
                    priceCurrency: "THB",
                  },
                })),
              },
            },
          ],
        }}
      />

      {/* Background Technical Grid Layer */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.03] dark:invert" />

      {/* [2. HERO SECTION]: พิกัดนำเสนอระดับประสิทธิภาพ */}
      <section className="relative overflow-hidden border-b border-[oklch(0.95_0.02_260)] bg-[oklch(0.98_0.01_260)] pt-32 pb-24 lg:pt-48 lg:pb-40 dark:border-white/5 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <div className="max-w-5xl">
            <motion.div
              variants={fadeInUp}
              className="mb-10 flex items-center gap-4"
            >
              <div className="bg-brand-primary h-px w-12" />
              <span className="font-heading text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase italic">
                Strategic System Solutions
              </span>
            </motion.div>

            <h1 className="font-heading text-brand-depth text-7xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-[10rem] dark:text-white">
              Service <br />
              <span className="text-brand-primary">
                Inventory
                <span className="text-brand-depth dark:text-white">.</span>
              </span>
            </h1>

            <motion.p
              variants={fadeInUp}
              className="font-body mt-12 max-w-3xl text-xl leading-relaxed font-bold text-[oklch(0.45_0.02_260)] md:text-3xl dark:text-[oklch(0.7_0.02_260)]"
            >
              เลือกโหนดบริการที่ตอบโจทย์ความต้องการทางธุรกิจของคุณ
              ทุกพิกัดรหัสถูกปรับแต่งเพื่อสมรรถนะและความเร็วระดับสูงสุด
            </motion.p>
          </div>
        </div>
      </section>

      {/* [3. MAIN CATALOG]: รายการแผนงานระบบ (Staggered Grid) */}
      <section className="relative z-10 -mt-24">
        <div className="container-za">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {servicesData.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <ServiceCard
                  data={service}
                  className="bg-white/90 backdrop-blur-xl dark:bg-white/5"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* [4. THE STANDARD]: ความเชี่ยวชาญเบื้องหลังความสำเร็จ */}
      <section className="py-32 lg:py-56">
        <div className="container-za">
          <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
            <div className="space-y-20">
              <h2 className="font-heading text-brand-depth text-6xl font-black tracking-tighter uppercase italic md:text-8xl dark:text-white">
                Built for <span className="text-brand-primary">Scale.</span>
              </h2>

              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                {[
                  {
                    icon: <Zap />,
                    title: "LCP < 0.8s",
                    desc: "การแสดงผลที่รวดเร็วระดับสูงสุด",
                  },
                  {
                    icon: <Search />,
                    title: "Strategic SEO",
                    desc: "วางโครงสร้าง Schema ที่แม่นยำ",
                  },
                  {
                    icon: <ShieldCheck />,
                    title: "Stability First",
                    desc: "เสถียรภาพระบบที่เชื่อถือได้",
                  },
                  {
                    icon: <Clock />,
                    title: "Rapid Deploy",
                    desc: "พร้อมดำเนินการภายใน 48 ชม.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="group space-y-4 border-l-2 border-[oklch(0.9_0.02_260)] pl-6 transition-colors hover:border-brand-primary dark:border-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.98_0.01_260)] text-brand-primary transition-all group-hover:bg-brand-depth group-hover:text-brand-primary dark:bg-white/5">
                      {/* [FIXED]: Assert type as React.ReactElement<{ size?: number }> to prevent ESLint 'no-explicit-any' warning */}
                      {React.cloneElement(
                        item.icon as React.ReactElement<{ size?: number }>,
                        { size: 24 }
                      )}
                    </div>
                    <h3 className="font-heading text-brand-depth text-lg font-black tracking-tight uppercase italic dark:text-white">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm font-bold text-[oklch(0.5_0.02_260)]">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* [5. STRATEGIC QUOTE] */}
            <div className="relative">
              <motion.div
                whileHover={{ rotate: -2, scale: 1.02 }}
                className="depth-card bg-brand-depth relative p-12 text-white md:p-20 dark:bg-[oklch(0.2_0.02_260)]"
              >
                <blockquote className="font-body text-4xl leading-[1] font-black italic md:text-6xl">
                  "ผมสร้าง{" "}
                  <span className="text-brand-primary">Digital Assets</span>{" "}
                  ที่จะสร้างมูลค่าเพิ่มให้ธุรกิจของคุณอย่างยั่งยืน"
                </blockquote>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* [6. FINAL CTA NODE] */}
      <section className="container-za">
        <div className="bg-brand-primary text-brand-depth shadow-aurora rounded-[4rem] p-12 text-center md:p-24">
          <h2 className="font-heading mb-10 text-4xl leading-none font-black uppercase italic md:text-6xl lg:text-8xl">
            Ready to <br /> Accelerate?
          </h2>
          <a
            href={siteConfig.links.line}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-brand-depth hover:text-brand-depth inline-flex items-center gap-4 rounded-3xl px-12 py-7 text-white shadow-2xl transition-all hover:bg-white active:scale-95"
          >
            <span className="font-heading text-lg font-black tracking-widest uppercase italic">
              START PROJECT NOW
            </span>
            <ArrowRight
              size={24}
              className="transition-transform group-hover:translate-x-2"
            />
          </a>
        </div>
      </section>
    </motion.main>
  )
}
