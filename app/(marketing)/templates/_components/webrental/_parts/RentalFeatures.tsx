/** @format */
import React from "react"
import {
  Zap,
  Search,
  Server,
  Wrench,
  Lock,
  PenTool,
  LucideIcon,
} from "lucide-react"

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อล้าง Warning: no-explicit-any          */
/* -------------------------------------------------------------------------- */

interface FeatureItem {
  icon: string
  title: string
  desc: string
}

interface RentalFeaturesProps {
  data: {
    title: string
    list: FeatureItem[]
  }
}

/**
 * RentalFeatures - ส่วนแสดงคุณสมบัติเด่นของระบบเช่าเว็บ
 * ปรับปรุงระบบ Icon Mapping และพิกัด Font ให้เป็นมาตรฐาน Specialist
 */
export const RentalFeatures = ({ data }: RentalFeaturesProps) => {
  // พิกัดการ Map ชื่อสตริงเข้ากับ Component ของ Lucide
  const getIcon = (name: string) => {
    const icons: Record<string, LucideIcon> = {
      Zap,
      Search,
      Server,
      Wrench,
      Lock,
      PenTool,
    }
    const Icon = icons[name] || Zap
    return <Icon size={24} />
  }

  return (
    <section id="features" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="font-heading mb-4 text-3xl font-black text-slate-900 uppercase italic lg:text-5xl">
            {data.title}
          </h2>
          <div className="mx-auto h-1.5 w-20 rounded-full bg-indigo-500"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.list.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="group rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                {getIcon(item.icon)}
              </div>

              <h3 className="font-heading mb-4 text-xl font-black text-slate-900 uppercase italic">
                {item.title}
              </h3>

              <p className="font-body text-base leading-relaxed font-bold text-slate-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
