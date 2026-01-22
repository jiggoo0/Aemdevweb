/** @format */

import React from "react"
import { siteConfig } from "@/constants/site-config"
import { services } from "@/constants/services-data"
import {
  CheckCircle2,
  Rocket,
  Zap,
  ShieldCheck,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button" // ปรับ path ตามโปรเจกต์ของคุณ
import { Card, CardContent } from "@/components/ui/card" // ปรับ path ตามโปรเจกต์ของคุณ

/**
 * 🚀 LandingContent: SME Pro Sales Section
 * เน้นการดึง Data จาก Constants เพื่อให้ง่ายต่อการทำงานคนเดียว (Single Source of Truth)
 */
const LandingContent = () => {
  // ดึงข้อมูลบริการ SME Pro มาใช้เป็นหลัก
  const smeService = services.find((s) => s.id === "sme-speed-launch")

  if (!smeService) return null

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* --- Header Section --- */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl leading-tight font-extrabold text-slate-900 md:text-5xl">
            เว็บไซต์ SME ยุค 2026 ต้องไม่ใช่แค่ "มี" <br />
            <span className="text-emerald-600">
              แต่ต้อง "ปิดการขายได้จริง" 🚀
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            {siteConfig.description} เปลี่ยนเว็บ "ภาระ" ให้เป็น
            "พนักงานขายมือทอง" ด้วยมาตรฐาน Next.js & Technical SEO จาก AEMDEVWEB
          </p>
        </div>

        {/* --- Value Propositions Grid --- */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ValueCard
            icon={<Zap className="text-amber-500" />}
            title="Ultra-Fast"
            desc="PageSpeed 100/100 ลูกค้าไม่รอนาน โหลดไวใน 1.5 วินาที"
          />
          <ValueCard
            icon={<Rocket className="text-blue-500" />}
            title="AI Search Ready"
            desc="โครงสร้าง Schema Markup รองรับ Google SGE สมบูรณ์แบบ"
          />
          <ValueCard
            icon={<ShieldCheck className="text-emerald-500" />}
            title="Secure & Trust"
            desc="Enterprise SSL และ Clean Code ปลอดภัย ไร้กังวล"
          />
          <ValueCard
            icon={<MessageCircle className="text-rose-500" />}
            title="High Conversion"
            desc="ออกแบบปุ่ม Call-to-Action ให้ทักง่าย ปิดการขายไว"
          />
        </div>

        {/* --- Main Product Section (SME Pro) --- */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Side: Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-bold text-emerald-700">
                {smeService.highlight && "BEST SELLER 🔥"}
              </div>
              <h3 className="mb-4 text-3xl font-bold text-slate-900">
                {smeService.title}
              </h3>
              <p className="mb-8 text-lg text-slate-600">
                {smeService.description}
              </p>

              <ul className="mb-10 space-y-4">
                {smeService.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircle2
                      className="mt-1 shrink-0 text-emerald-500"
                      size={20}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <a
                  href={siteConfig.links.line}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    className="h-14 rounded-full bg-emerald-600 px-8 text-lg text-white hover:bg-emerald-700"
                  >
                    {siteConfig.cta.main}
                  </Button>
                </a>
                <div className="text-2xl font-bold text-slate-900">
                  {smeService.price}
                </div>
              </div>
            </div>

            {/* Right Side: Visual/Guarantee */}
            <div className="flex flex-col items-center justify-center bg-slate-900 p-12 text-center text-white">
              <div className="mb-6">
                <div className="mb-2 text-6xl font-black text-emerald-400">
                  100/100
                </div>
                <div className="text-xl font-medium">
                  Google PageSpeed Score
                </div>
              </div>
              <blockquote className="max-w-xs border-l-4 border-emerald-500 pl-4 text-left text-slate-400 italic">
                "ผมไม่ได้แค่ทำเว็บ แต่ผมวางโครงสร้างให้ธุรกิจคุณเติบโตในระยะยาว"
                <cite className="mt-4 block font-semibold text-white not-italic">
                  — {siteConfig.expert}
                </cite>
                <span className="text-sm text-slate-500">
                  {siteConfig.role}
                </span>
              </blockquote>

              {smeService.promotion && (
                <div className="mt-10 rounded-lg border border-amber-500/50 bg-amber-500/10 p-4 text-sm text-amber-400">
                  {smeService.promotion}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * 🧩 Sub-component สำหรับ Value Card
 */
const ValueCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) => (
  <Card className="border-none bg-white shadow-md transition-shadow hover:shadow-lg">
    <CardContent className="pt-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50">
        {icon}
      </div>
      <h4 className="mb-2 font-bold text-slate-900">{title}</h4>
      <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
    </CardContent>
  </Card>
)

export default LandingContent
