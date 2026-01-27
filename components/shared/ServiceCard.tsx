/** @format */

import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Code2,
  Gauge,
  Zap,
  Layout,
  TrendingUp,
} from "lucide-react"

import { ServiceItem, ServiceCategory } from "@/constants/services-data"

/**
 * [HELPER]: ส่วนจัดการไอคอนตามหมวดหมู่ระบบงาน
 * แยก Logic ออกมาเพื่อให้คอมโพเนนต์หลักสะอาดและไล่โค้ดง่ายขึ้น
 */
const ServiceIcon = ({
  category,
  className,
}: {
  category: ServiceCategory | string
  className?: string
}) => {
  const icons: Record<string, React.ReactNode> = {
    Starter: <Layout className={className} />,
    SME: <Rocket className={className} />,
    Corporate: <ShieldCheck className={className} />,
    Industrial: <Code2 className={className} />,
    SEO_Technical: <Gauge className={className} />,
    SEO_Organic: <TrendingUp className={className} />,
  }
  return icons[category] || <Zap className={className} />
}

interface ServiceCardProps {
  service: ServiceItem
}

/**
 * ServiceCard: ส่วนแสดงรายละเอียดพิกัดบริการรายหมวดหมู่
 * แนวทาง: เน้นความสะอาดตาและการจัดวางลำดับข้อมูลที่ช่วยให้ตัดสินใจง่าย
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export default function ServiceCard({ service }: ServiceCardProps) {
  // ระบบป้องกันความผิดพลาดกรณีข้อมูลไม่ครบ
  if (!service) return null

  return (
    <div className="group relative flex h-full flex-col rounded-[2.5rem] border border-slate-100 bg-white p-8 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-900/5 lg:p-10">
      {/* HEADER: พิกัดไอคอนและฉลากกลุ่มงานที่เน้น (Focus Area) */}
      <div className="mb-10 flex items-start justify-between">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-emerald-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
          <ServiceIcon category={service.category} className="h-8 w-8" />
        </div>
        <div className="text-right">
          <p className="font-heading text-[10px] leading-none font-black tracking-[0.2em] text-slate-300 uppercase italic">
            Focus Area
          </p>
          <p className="font-heading mt-2 text-xs leading-none font-black tracking-widest text-slate-900 uppercase italic">
            {service.category}
          </p>
        </div>
      </div>

      {/* BODY: รายละเอียดพิกัดบริการและโครงสร้างงาน */}
      <div className="flex-1">
        <div className="mb-8 space-y-4">
          <h3 className="font-heading line-clamp-1 text-2xl leading-tight font-black text-slate-950 italic transition-colors group-hover:text-emerald-600">
            {service.title}
          </h3>
          <p className="font-body line-clamp-3 text-sm leading-relaxed font-bold text-slate-500">
            {service.description}
          </p>
        </div>

        {/* FEATURES: รายการขอบเขตงานระบบ (ล็อกพิกัด 4 รายการเพื่อความสมดุล) */}
        <div className="mb-12 space-y-4">
          {service.features?.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-slate-600">
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-emerald-500"
              />
              <span className="font-body line-clamp-1 text-sm leading-snug font-bold">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER: พิกัดราคาและปุ่มเจาะลึกแผนงาน */}
      <div className="mt-auto border-t border-slate-50 pt-8">
        <div className="mb-8 flex items-baseline gap-2">
          <span className="font-heading text-[10px] font-black tracking-widest text-slate-400 uppercase italic">
            Starting at
          </span>
          <span className="font-heading text-3xl font-black text-slate-950 italic">
            ฿{service.priceValue?.toLocaleString() ?? "0"}
          </span>
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="group/btn flex items-center justify-between rounded-2xl bg-slate-50 px-8 py-5 shadow-sm transition-all hover:bg-slate-950 hover:text-white"
        >
          <span className="font-heading text-[11px] font-black tracking-[0.15em] uppercase italic">
            Explore Plan
          </span>
          <ArrowRight
            size={18}
            className="text-emerald-500 transition-transform duration-500 group-hover/btn:translate-x-2 group-hover/btn:text-white"
          />
        </Link>
      </div>

      {/* HIGHLIGHT BADGE: ป้ายแนะนำสำหรับพิกัดงานยอดนิยม */}
      {service.highlight && (
        <div className="absolute top-0 right-10 -translate-y-1/2">
          <span className="font-heading rounded-full bg-emerald-600 px-5 py-2 text-[10px] font-black tracking-[0.2em] text-white uppercase italic shadow-xl shadow-emerald-600/20">
            Recommended
          </span>
        </div>
      )}
    </div>
  )
}
