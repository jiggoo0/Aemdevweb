/** @format */
import React from "react"
import Image from "next/image"

/**
 * 🟢 Interface สำหรับ Gallery
 * items: รับ Array ของ URL รูปภาพ
 */
export interface CafeGalleryProps {
  items: string[]
  primaryColor?: string
}

export default function CafeGallery({
  items = [],
  primaryColor = "#eab308",
}: CafeGalleryProps) {
  // 🛡️ Guard: ถ้าไม่มีรูปไม่ต้อง Render
  if (!items || items.length === 0) return null

  // กำหนด Layout สำหรับ Bento Grid (แสดง 5 รูปแรก)
  const displayItems = items.slice(0, 5)

  return (
    <section className="py-16">
      {/* --- Section Header --- */}
      <div className="mb-10 flex items-center gap-4">
        <div className="h-10 w-2" style={{ backgroundColor: primaryColor }} />
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
          Atmosphere
        </h2>
      </div>

      {/* --- Bento Grid Layout --- */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
        {displayItems.map((src, idx) => {
          // Logic สำหรับสลับขนาดช่อง (รูปแรกเป็นรูปใหญ่)
          const isLarge = idx === 0
          const gridClass = isLarge
            ? "col-span-2 row-span-2 aspect-square"
            : "aspect-square"

          return (
            <div
              key={idx}
              className={`${gridClass} group relative overflow-hidden border-2 border-slate-900 bg-slate-100 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]`}
            >
              {/* ✅ เปลี่ยนจาก <img> เป็น <Image /> เพื่อ Performance */}
              <Image
                src={src || "/api/placeholder/600/600"}
                alt={`Cafe atmosphere ${idx + 1}`}
                fill // ใช้ fill ร่วมกับ aspect-square ของ parent
                sizes={
                  isLarge
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={isLarge} // ให้รูปใหญ่เป็น Priority เพื่อค่า LCP ที่ดี
              />

              {/* Overlay Decor */}
              <div className="absolute inset-0 bg-slate-900/10 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="absolute bottom-2 right-2 z-10 border border-slate-900 bg-white px-2 py-1 text-[8px] font-black uppercase tracking-widest text-slate-900">
                Shot 0{idx + 1}
              </div>
            </div>
          )
        })}
      </div>

      {/* Social Call to Action */}
      <div className="mt-8 flex items-center justify-end gap-2 text-slate-400">
        <span className="text-[10px] font-bold uppercase tracking-widest">
          Share your moment
        </span>
        <div className="h-[1px] w-8 bg-slate-200" />
        <span className="text-[10px] font-black text-slate-900">#CAFEVIBE</span>
      </div>
    </section>
  )
}
