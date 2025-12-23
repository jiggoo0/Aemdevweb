/** @format */
import React from "react"
import Image from "next/image"

/**
 * 🟢 ปรับ Interface ให้ยืดหยุ่น (Flexible Interface)
 * รองรับทั้ง 'title' และ 'specialty' เพราะข้อมูลใน Catalog อาจใช้ชื่อต่างกัน
 */
export interface Doctor {
  id?: string | number
  name: string
  title?: string
  specialty?: string
  image: string
  bio?: string
}

export interface DoctorProfileProps {
  doctors: Doctor[]
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctors = [] }) => {
  return (
    <section className="py-16">
      <div className="mb-12 flex items-center gap-4">
        <div className="h-10 w-2 bg-blue-600" />
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
          Professional Medical Team
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc, idx) => (
          <div
            key={doc.id || idx}
            className="group relative overflow-hidden border-2 border-slate-900 bg-white p-6 transition-all hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]"
          >
            {/* ✅ Doctor Image with Next.js Image Optimization */}
            <div className="relative mb-6 aspect-[4/5] overflow-hidden border-2 border-slate-900 bg-slate-100">
              <Image
                src={doc.image || "/api/placeholder/400/500"}
                alt={doc.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 z-10 bg-slate-900 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white">
                Verified Specialist
              </div>
            </div>

            {/* Doctor Info */}
            <div className="space-y-2">
              <h3 className="text-2xl font-black uppercase italic text-slate-900">
                {doc.name}
              </h3>

              {/* 🟢 Render Title หรือ Specialty อย่างใดอย่างหนึ่งที่ส่งมา */}
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                {doc.title || doc.specialty || "Medical Specialist"}
              </p>

              {doc.bio && (
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm font-medium leading-relaxed text-slate-500">
                  {doc.bio}
                </p>
              )}
            </div>

            {/* Interactive Corner Decor */}
            <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-slate-100 transition-colors group-hover:bg-blue-50" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default DoctorProfile
