/** @format */

import React from "react"
import { Metadata } from "next"
import { Gauge, SearchCode, Rocket, PackageSearch, Star } from "lucide-react"

// [จูนสายส่งข้อมูล]: เรียกพิกัดจากไฟล์ในโฟลเดอร์เดียวกัน
import { templateRegistry } from "./_registry"
import { ShopNavbar } from "../_components/ShopNavbar"
import { ShopFooter } from "../_components/ShopFooter"
import { ShopCard } from "../_components/ShopCard"
import { ShopPromotion } from "../_components/ShopPromotion"

// ข้อมูลและระบบจัดการ
import { getAllTemplatesMetadata } from "@/lib/template"
import { TemplateGrid } from "@/components/marketplace/template/TemplateGrid"
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * [METADATA ENGINE]: วางพิกัดดักกลุ่ม SME ที่ต้องการระบบเว็บไซต์มาตรฐานสูง
 */
export const metadata: Metadata = {
  title: `Shops. | ร้านรวมแบบเว็บไซต์สำเร็จรูปมาตรฐานสูง | โดยนายเอ็มซ่ามากส์`,
  description:
    "โซน Shops. แหล่งรวมระบบงานปิดการขายในรูปแบบเว็บไซต์สำเร็จรูป ที่จูนความเร็วมาเพื่อธุรกิจยุค 2026 เลือกแบบที่ชอบ แล้วออนไลน์ได้ทันใจภายใน 24 ชม.",
  alternates: { canonical: `${siteConfig.project.url}/templates` },
}

/**
 * TemplateCatalogPage (Shops.)
 * แนวคิด: จัดวางแบบโชว์รูมที่คัดระบบตัวท็อปมาให้ลูกค้าตัดสินใจได้ทันที
 */
export default function TemplateCatalogPage() {
  // [จูนข้อมูลโปรโมชั่น]: คัด 3 ตัวแรงที่ต้องการมาขึ้นตู้โชว์
  const featuredSlugs = ["starter_landing", "shopmasterpro", "webrental"]

  // กรองเอาเฉพาะข้อมูล Metadata ของ 3 รุ่นนี้จาก Registry
  const featuredUnits = Object.values(templateRegistry)
    .filter((item) => featuredSlugs.includes(item.metadata.slug))
    .map((item) => item.metadata)

  // ข้อมูลแบบเว็บไซต์ทั้งหมดในระบบ
  const allThemes = getAllTemplatesMetadata()

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      <JsonLd
        type="CollectionPage"
        data={{
          name: "นายเอ็มซ่ามากส์ Shops. - แบบเว็บไซต์สเปกปีศาจ",
          description:
            "คลังแบบเว็บไซต์ธุรกิจที่จูนสปีดมาอย่างดี พร้อมออนไลน์ใน 24 ชม.",
          url: `${siteConfig.project.url}/templates`,
        }}
      />

      <ShopNavbar />

      <main className="pt-20">
        {/* [LAYER 1]: HERO SECTION - อัตลักษณ์หน้าร้าน Shops. */}
        <section className="relative overflow-hidden bg-slate-50 pt-24 pb-20 lg:pt-40 lg:pb-32">
          <div
            className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px] opacity-[0.03]"
            aria-hidden="true"
          />

          <div className="relative container mx-auto px-6 text-left">
            <div className="max-w-5xl space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-1.5 w-12 rounded-full bg-emerald-500" />
                <span className="font-heading text-[10px] font-black tracking-[0.5em] text-emerald-600 uppercase italic">
                  Specialist Shop Unit • 2026 Edition
                </span>
              </div>

              <h1 className="font-heading text-7xl leading-[0.85] font-black tracking-tighter text-slate-950 uppercase italic md:text-9xl lg:text-[11rem]">
                Shops<span className="text-emerald-500">.</span>
              </h1>

              <div className="grid grid-cols-1 gap-12 border-t border-slate-200 pt-12 md:grid-cols-2">
                <p className="font-body text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
                  ยินดีต้อนรับสู่{" "}
                  <span className="text-slate-900 underline decoration-emerald-500/30">
                    นายเอ็มซ่ามากส์ Shops.
                  </span>{" "}
                  <br />
                  แหล่งรวมระบบงานปิดการขายสเปกแรง
                  ที่วางโครงสร้างมาเพื่อให้ธุรกิจของคุณเดินหน้าได้ทันทีตั้งแต่วันแรกครับ
                </p>

                <div className="flex flex-wrap items-start gap-4">
                  {[
                    { icon: <Gauge size={16} />, label: "โหลดไวระดับปีศาจ" },
                    { icon: <Rocket size={16} />, label: "ออนไลน์ใน 24 ชม." },
                    {
                      icon: <SearchCode size={16} />,
                      label: "SEO มาตรฐานปี 2026",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="font-heading flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-[10px] font-black tracking-widest text-slate-950 uppercase shadow-sm ring-1 ring-slate-100 transition-all hover:ring-emerald-500"
                    >
                      <span className="text-emerald-500">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [LAYER 2]: FEATURED PROMOTION - 3 ระบบงานตัวท็อป */}
        <section className="bg-slate-950 py-24 lg:py-40">
          <div className="container mx-auto px-6">
            <div className="mb-20 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 ring-1 ring-emerald-500/20">
                <Star size={14} className="fill-emerald-500 text-emerald-500" />
                <span className="font-heading text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase italic">
                  Recommended Units
                </span>
              </div>
              <h2 className="font-heading text-5xl font-black tracking-tighter text-white uppercase italic md:text-7xl">
                3 แผนงาน <span className="text-emerald-500">ตัวจบธุรกิจ.</span>
              </h2>
              <p className="font-body mx-auto max-w-2xl text-lg font-bold text-slate-400">
                นายเอ็มคัดพิกัดมาให้แล้ว
                แผนงานเว็บไซต์ที่คุ้มค่าและคืนทุนไวที่สุดสำหรับ SME ปี 2026
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredUnits.map((unit) => (
                <div
                  key={unit.slug}
                  className="group transition-transform duration-500 hover:scale-[1.02]"
                >
                  <ShopCard
                    id={unit.id}
                    name={unit.name}
                    category={unit.category}
                    image={unit.thumbnail}
                    slug={unit.slug}
                    isNew={unit.isNew}
                    price={unit.slug === "webrental" ? "590" : "1,990"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* [LAYER 3]: TRUST BANNER */}
        <section className="container mx-auto px-6 py-20">
          <ShopPromotion />
        </section>

        {/* [LAYER 4]: FULL CATALOG */}
        <section className="py-24 lg:py-40">
          <div className="container mx-auto px-6">
            <div className="mb-20 flex flex-col items-start justify-between gap-10 border-b border-slate-100 pb-16 md:flex-row md:items-end">
              <div className="max-w-2xl space-y-4 border-l-8 border-slate-950 pl-8 text-left">
                <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl">
                  All Business <span className="text-emerald-500">Units.</span>
                </h2>
                <p className="font-body text-lg font-bold text-slate-400 md:text-xl">
                  เลือกแพ็กเกจเว็บไซต์สำเร็จรูปที่ตรงพิกัด
                  แล้วเริ่มออนไลน์ระบบงานได้ทันที
                </p>
              </div>
              <div className="font-heading flex items-center gap-4 rounded-3xl bg-slate-950 px-8 py-5 text-white shadow-2xl">
                <PackageSearch size={18} className="text-emerald-500" />
                <span className="text-[11px] font-black tracking-[0.3em] uppercase italic">
                  Total: {allThemes.length} Units
                </span>
              </div>
            </div>

            <TemplateGrid templates={allThemes} />
          </div>
        </section>
      </main>

      <ShopFooter />
    </div>
  )
}
