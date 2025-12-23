/** @format */
import React from "react"
import Image from "next/image"

/**
 * 🟢 ปรับ Interface ให้ยืดหยุ่น (Flexible Interface)
 * รองรับทั้ง 'image' และ 'imageUrl' เพื่อแก้ปัญหา TS2322
 */
export interface Project {
  id?: string | number
  title: string
  image: string // รองรับข้อมูลที่ส่งมาเป็น image
  imageUrl?: string // รองรับข้อมูลที่ส่งมาเป็น imageUrl
  description?: string
}

export interface ProjectGalleryProps {
  projects: Project[]
  primaryColor?: string
}

export default function ProjectGallery({
  projects = [],
  primaryColor = "#0f172a",
}: ProjectGalleryProps) {
  if (!projects.length) return null

  return (
    <section className="py-12">
      {/* --- Section Header --- */}
      <div className="mb-10 flex items-center gap-4">
        <div className="h-12 w-3" style={{ backgroundColor: primaryColor }} />
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
          Featured Projects
        </h2>
      </div>

      {/* --- Projects Grid --- */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, idx) => (
          <div
            key={item.id || idx}
            className="group relative flex flex-col border-2 border-slate-900 bg-white transition-all hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]"
          >
            {/* ✅ Project Image Container with Next.js Image Optimization */}
            <div className="relative aspect-video overflow-hidden border-b-2 border-slate-900 bg-slate-100">
              <Image
                src={item.image || item.imageUrl || "/api/placeholder/600/400"}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 z-10 border-2 border-slate-900 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-900">
                Project 0{idx + 1}
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-3 text-xl font-black uppercase leading-tight text-slate-900">
                {item.title}
              </h3>

              {item.description && (
                <p className="mb-6 text-sm font-bold leading-relaxed text-slate-500">
                  {item.description}
                </p>
              )}

              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Architecture & Build
                </span>
                <div
                  className="h-2 w-10"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
