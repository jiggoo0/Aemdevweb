/** @format */
import React from "react"
import { Truck, ShieldCheck, CreditCard, LucideIcon } from "lucide-react"

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) - ปรับปรุงให้ยืดหยุ่นขึ้นเพื่อแก้ Error TS2322 */
/* -------------------------------------------------------------------------- */

interface ShopStatItem {
  icon?: string // [FIXED]: ใส่ ? เพื่อให้เป็นทางเลือก ป้องกัน Error หากข้อมูลต้นทางไม่มี icon
  title: string
  desc: string
}

interface ShopStatsProps {
  data: ShopStatItem[]
}

/**
 * ShopStats - ส่วนแสดงข้อมูลความน่าเชื่อถือ (Trust Signals)
 * จัดการพิกัด Icon Mapping โดยมีระบบ Fallback กรณีไม่มีข้อมูล icon ส่งมา
 */
export const ShopStats = ({ data }: ShopStatsProps) => {
  // พิกัดการ Map ชื่อสตริงเข้ากับ Component ของ Lucide
  const getIcon = (name?: string, index?: number) => {
    const icons: Record<string, LucideIcon> = {
      Truck,
      ShieldCheck,
      CreditCard,
    }

    // หากระบุชื่อไอคอนมาให้ใช้ตามชื่อ หากไม่มีให้ถอยไปใช้ลำดับ Index (Fallback Logic)
    if (name && icons[name])
      return React.createElement(icons[name], { size: 24 })

    // พิกัดสำรองตามลำดับ (Index-based Fallback)
    const fallbackIcons = [Truck, ShieldCheck, CreditCard]
    const FallbackIcon = fallbackIcons[index ?? 0] || ShieldCheck
    return <FallbackIcon size={24} />
  }

  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 text-left md:grid-cols-3">
          {data.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="group flex items-center gap-6"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                {getIcon(item.icon, i)}
              </div>

              <div>
                <h4 className="font-heading text-sm font-black tracking-tight text-slate-950 uppercase italic">
                  {item.title}
                </h4>
                <p className="font-body mt-1 text-xs font-bold text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
