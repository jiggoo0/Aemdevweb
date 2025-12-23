/** @format */
import { Metadata } from "next"
import { catalogProjects } from "@/data/catalog.projects"
import { CatalogProjectsGrid } from "@/components/catalog/CatalogProjectsGrid"

export const metadata: Metadata = {
  title: "Project Catalog | AEM Dev",
  description:
    "รวมผลงานเว็บไซต์และ Landing Page สำหรับธุรกิจจริง ที่ออกแบบเพื่อ Conversion, Performance และ Trust",
}

export default function CatalogPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-40" />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        {/* Header */}
        <header className="mb-20 max-w-3xl">
          <p className="mb-4 text-xs font-black uppercase tracking-widest text-brand-blue">
            Project Catalog
          </p>
          <h1 className="text-display-xl text-brand-navy md:text-display-2xl">
            ตัวอย่างผลงาน
            <br />
            <span className="underline decoration-brand-blue decoration-8 underline-offset-8">
              ที่ใช้งานจริง
            </span>
          </h1>
          <p className="mt-6 text-lg font-bold leading-relaxed text-slate-600">
            ทุกโปรเจกต์ถูกออกแบบจากโจทย์ธุรกิจจริง เน้นผลลัพธ์ด้านยอดขาย
            ความน่าเชื่อถือ และประสิทธิภาพระดับ Enterprise
          </p>
        </header>

        {/* Catalog Grid */}
        <CatalogProjectsGrid projects={catalogProjects} />
      </section>
    </main>
  )
}
