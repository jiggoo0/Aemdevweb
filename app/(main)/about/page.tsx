/** @format */

import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"
import LineLeadForm from "@/components/sales-engine/LineLeadForm"
import {
  Zap,
  Terminal,
  Code2,
  Cpu,
  ArrowRight,
  Fingerprint,
} from "lucide-react"

/**
 * [STRATEGIC METADATA]: การกำหนดพิกัดชุดข้อมูลตัวตน
 * เชื่อมโยงพิกัด Authority ระหว่าง Domain หลักและ Portfolio
 */
export const metadata: Metadata = {
  title: `เกี่ยวกับ ${siteConfig.expert.name} | Technical System Specialist`,
  description: `เบื้องหลังการวางโครงสร้างระบบประสิทธิภาพสูงของ AEMDEVWEB โดย ${siteConfig.expert.realName} ผู้เชี่ยวชาญด้านสถาปัตยกรรมเว็บไซต์และกลยุทธ์ SEO เชิงเทคนิค`,
  alternates: { canonical: `${siteConfig.project.url}/about` },
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[oklch(1_0_0)] pb-32 antialiased dark:bg-[oklch(0.12_0.02_260)]">
      {/* [1. SCHEMA]: พิกัดยืนยันข้อมูลบุคคล (Entity Authority) */}
      <JsonLd
        type="Person"
        data={{
          "@id": "https://me.aemdevweb.com/#person",
          name: siteConfig.expert.realName,
          alternateName: [
            siteConfig.expert.name,
            "Alongkorl Yomkerd",
            "นายเอ็มซ่ามากส์",
          ],
          jobTitle: siteConfig.expert.role,
          url: siteConfig.links.personal,
          image: `${siteConfig.project.url}/og-image.png`,
          sameAs: [
            siteConfig.links.facebook,
            siteConfig.links.linkedin,
            siteConfig.links.tiktok,
            siteConfig.links.x,
            siteConfig.links.github,
            siteConfig.links.line,
          ].filter(Boolean),
          worksFor: {
            "@id": `${siteConfig.project.url}/#organization`,
          },
          description: siteConfig.expert.bio,
        }}
      />

      {/* Background Technical Grid */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.03] dark:invert" />

      {/* [LAYER 1]: HERO SECTION - IDENTITY VERIFICATION */}
      <section className="relative overflow-hidden bg-[oklch(0.98_0.01_260)] pt-32 pb-24 lg:pt-48 lg:pb-40 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <div className="flex flex-col gap-20 lg:flex-row lg:items-center">
            {/* Left Content: Messaging */}
            <div className="flex-1 space-y-12">
              <div className="border-brand-primary/20 text-brand-primary inline-flex items-center gap-3 rounded-full border bg-white px-5 py-2 text-[10px] font-black tracking-[0.3em] uppercase italic shadow-sm dark:bg-white/5">
                <Fingerprint size={14} />
                Identity Verified: Alongkorl
              </div>

              <h1 className="font-heading text-brand-depth text-7xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-[10rem] dark:text-white">
                The <br />
                <span className="text-brand-primary">Specialist.</span>
              </h1>

              <div className="border-brand-primary max-w-2xl border-l-8 pl-8 md:pl-12">
                <p className="font-body text-brand-depth text-2xl leading-relaxed font-black md:text-3xl dark:text-white">
                  "เราสร้างระบบเพื่อให้ธุรกิจของคุณ <br />
                  ขับเคลื่อนไปข้างหน้าด้วยประสิทธิภาพสูงสุด"
                </p>
                <p className="font-body mt-8 text-lg leading-relaxed font-bold text-[oklch(0.45_0.02_260)] dark:text-[oklch(0.7_0.02_260)]">
                  ผมคือ{" "}
                  <strong className="text-brand-primary">
                    {siteConfig.expert.name}
                  </strong>{" "}
                  ผู้วางรากฐานสถาปัตยกรรมระบบของ AEMDEVWEB
                  เพื่อเปลี่ยนเว็บไซต์ทั่วไปให้เป็น Strategic Digital Asset
                  ที่มีความเร็ว ความปลอดภัย และรองรับ AI Search 2026
                </p>
              </div>
            </div>

            {/* Right Content: Identity Node */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="depth-card bg-brand-depth dark:bg-brand-surface relative aspect-[4/5] p-1">
                <div className="bg-brand-depth flex h-full w-full flex-col items-center justify-center rounded-[2.2rem] p-12 text-center dark:bg-[oklch(0.2_0.02_260)]">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                  <Zap
                    size={80}
                    fill="currentColor"
                    className="text-brand-primary mb-10"
                  />
                  <h2 className="font-heading text-4xl font-black tracking-tighter text-white italic">
                    {siteConfig.expert.name}
                  </h2>
                  <p className="font-heading text-brand-primary mt-2 text-[11px] font-black tracking-[0.5em] uppercase italic">
                    STRATEGIC INFRASTRUCTURE
                  </p>
                  <div className="bg-brand-primary/20 mt-12 h-px w-20" />
                  <p className="font-body mt-8 text-sm font-bold text-[oklch(0.8_0.02_260)]">
                    Technical System Specialist and Strategic Consultant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [LAYER 2]: STRATEGIC PHILOSOPHY */}
      <section className="py-24 lg:py-48">
        <div className="container-za">
          <div className="grid gap-8 md:grid-cols-3">
            <AboutFeature
              icon={<Code2 size={32} />}
              title="Advanced Stack"
              description="ประยุกต์ใช้ Next.js 16 และ React 19 เพื่อความเสถียรและประสิทธิภาพระดับสูงสุด"
            />
            <AboutFeature
              icon={<Cpu size={32} />}
              title="Infrastructure"
              description="วางสถาปัตยกรรม Hybrid เพื่อค่า Core Web Vitals (LCP < 0.8s) ที่ยอดเยี่ยม"
            />
            <AboutFeature
              icon={<Terminal size={32} />}
              title="AI Strategy"
              description="บูรณาการระบบ Schema Markup เพื่อให้ AI Search ประมวลผลข้อมูลได้แม่นยำ"
            />
          </div>
        </div>
      </section>

      {/* [LAYER 3]: CONSULTATION NODE */}
      <section className="container-za">
        <div className="bg-brand-depth shadow-node relative overflow-hidden rounded-[4.5rem] p-12 text-white md:p-24 lg:p-32">
          <div className="bg-brand-primary/10 absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full blur-[140px]" />

          <div className="relative z-10 flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-10">
              <div className="flex items-center gap-4">
                <div className="bg-brand-primary h-0.5 w-12" />
                <span className="font-heading text-brand-primary text-[11px] font-black tracking-[0.4em] uppercase italic">
                  Project Scale-Up
                </span>
              </div>

              <h2 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter italic md:text-8xl lg:text-9xl">
                Scale Your <br />
                <span className="text-brand-primary">Engine.</span>
              </h2>

              <p className="font-body text-xl font-bold text-[oklch(0.8_0.02_260)] md:text-2xl">
                ยกระดับประสิทธิภาพธุรกิจของคุณด้วยระบบงานมาตรฐานสากล
              </p>

              <div className="flex flex-wrap items-center gap-8 pt-6">
                <LineLeadForm
                  variant="button"
                  label="START CONSULTATION"
                  className="bg-brand-primary text-brand-depth shadow-aurora h-20 rounded-3xl px-12 text-xl font-black tracking-widest italic transition-all hover:scale-105 active:scale-95"
                />
                <Link
                  href="/services"
                  className="group hover:text-brand-primary inline-flex items-center gap-4 text-sm font-black tracking-widest text-white uppercase italic transition-colors"
                >
                  EXPLORE SOLUTIONS
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer Branding */}
      <footer className="mt-40 text-center opacity-20 select-none">
        <p className="font-heading text-brand-depth text-[10px] font-black tracking-[0.5em] uppercase italic dark:text-white">
          MODEL v2026 • DESIGNED BY {siteConfig.expert.realName}
        </p>
      </footer>
    </main>
  )
}

/**
 * [SUB-COMPONENT]: AboutFeature
 */
function AboutFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="depth-card group hover:border-brand-primary/40 p-12">
      <div className="text-brand-primary group-hover:bg-brand-depth group-hover:text-brand-primary mb-12 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[oklch(0.98_0.01_260)] shadow-inner transition-all duration-700 group-hover:scale-110 group-hover:rotate-[10deg] dark:bg-white/5">
        {icon}
      </div>
      <div className="space-y-6">
        <h3 className="font-heading text-brand-depth text-3xl font-black tracking-tighter uppercase italic dark:text-white">
          {title}
        </h3>
        <p className="font-body text-lg font-bold text-[oklch(0.45_0.02_260)] dark:text-[oklch(0.7_0.02_260)]">
          {description}
        </p>
      </div>
    </div>
  )
}
