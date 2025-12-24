/** @format */
import { Metadata } from "next"
import { catalogProjects } from "@/data/catalog.projects"
import { CatalogProjectsGrid } from "@/components/catalog/CatalogProjectsGrid"
import { Sparkles, LayoutPanelLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Project Catalog | AEM Dev",
  description:
    "รวมผลงานเว็บไซต์และ Landing Page สำหรับธุรกิจจริง ที่ออกแบบเพื่อ Conversion, Performance และ Trust",
}

export default function CatalogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 🛠️ BACKGROUND ARCHITECTURE ─── */}
      {/* ใช้ลายเส้นตารางแบบ Blueprint จางๆ */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] opacity-60 [background-size:40px_40px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 right-0 top-0 -z-10 h-96 bg-gradient-to-b from-slate-50 to-transparent"
        aria-hidden="true"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-40">
        {/* ─── 1. INDUSTRIAL HEADER ─── */}
        <header className="relative mb-24 max-w-4xl">
          {/* Badge Style Label */}
          <div className="mb-8 inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-5 py-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
            <LayoutPanelLeft size={16} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">
              Registry / Project_Catalog_V1
            </span>
          </div>

          <h1 className="text-5xl font-black uppercase italic leading-[0.85] tracking-tighter text-slate-900 md:text-8xl lg:text-[100px]">
            ตัวอย่างผลงาน <br />
            <span className="text-blue-600 underline decoration-slate-900 decoration-[12px] underline-offset-[12px]">
              ที่ใช้งานจริง
            </span>
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
                ทุกโปรเจกต์ถูกออกแบบจากโจทย์ธุรกิจจริง เน้นผลลัพธ์ด้านยอดขาย
                ความน่าเชื่อถือ และประสิทธิภาพระดับ{" "}
                <span className="text-slate-900 underline decoration-blue-600/30">
                  Enterprise
                </span>
              </p>
            </div>
            <div className="hidden items-center justify-end md:col-span-4 md:flex">
              {/* Spinning Badge Decor */}
              <div className="h-24 w-24 animate-[spin_10s_linear_infinite] rounded-full border-4 border-dashed border-slate-200 p-2">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-tighter text-slate-300">
                  AEM.DEV
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ─── 2. CATALOG GRID ─── */}
        <div className="relative pb-20">
          <CatalogProjectsGrid
            projects={catalogProjects}
            columns={3}
            showCTA={true}
          />
        </div>

        {/* ─── 3. BOTTOM DECOR ─── */}
        <footer className="mt-20 flex items-center gap-4 border-t-2 border-slate-100 pt-10">
          <div className="flex h-10 w-10 items-center justify-center bg-slate-900 text-white">
            <Sparkles size={18} />
          </div>
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            More projects are being added to the database.
          </p>
        </footer>
      </section>
    </main>
  )
}
