/** @format */

import React from "react"
import { Metadata } from "next"
import { getAllTemplates } from "@/lib/template"
import TemplateNavbar from "@/components/marketplace/shared/TemplateNavbar"
import { TemplateGrid } from "@/components/marketplace/template/TemplateGrid"

/**
 * ตั้งค่าข้อมูลสำหรับการค้นหา (SEO)
 */
export const metadata: Metadata = {
  title:
    "Template Shops นายเอ็มซ่ามากส์ | คลังโครงสร้างเว็บไซต์ธุรกิจ AEMDEVWEB",
  description:
    "เลือกชมโครงสร้างเว็บไซต์ที่ถูกออกแบบมาเพื่อความเร็วและความเสถียร รองรับทุกกลุ่มธุรกิจตั้งแต่โรงแรมจนถึงร้านค้าออนไลน์",
}

export default async function TemplateCatalogPage() {
  /**
   * ดึงข้อมูลในระดับ Server เพื่อให้หน้าเว็บแสดงผลได้ทันที
   */
  const templates = await getAllTemplates()

  return (
    <div className="thai-font-smoothing min-h-screen bg-white">
      {/* 1. แถบนำทางเฉพาะส่วน Marketplace */}
      <TemplateNavbar />

      <main className="container mx-auto px-6">
        {/* 2. ส่วนหัวของหน้า (Hero Section) */}
        <section className="py-16 text-center md:py-24">
          <div className="mx-auto max-w-4xl">
            {/* [FIXED]: เปลี่ยนพาดหัวหลักตามความต้องการ */}
            <h1 className="font-prompt text-4xl font-black tracking-tighter text-slate-950 uppercase md:text-6xl">
              Template <span className="text-emerald-500">Shops</span>{" "}
              นายเอ็มซ่ามากส์
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-500 md:text-lg">
              รวมพิกัดโครงสร้างหน้าเว็บที่เน้นผลลัพธ์การใช้งานจริง
              ทุกตัวอย่างถูกจูนมาเพื่อความเร็วและรองรับการค้นหาตั้งแต่วันแรกที่เริ่มใช้งาน
            </p>
          </div>
        </section>

        {/* 3. ส่วนแสดงผลรายการเทมเพลต (Filter & Grid) */}
        <div className="pb-24">
          <TemplateGrid templates={templates} />
        </div>
      </main>
    </div>
  )
}
