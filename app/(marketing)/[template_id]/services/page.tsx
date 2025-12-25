/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: PRODUCTION PRODUCT CATALOG (REFACTORED)
// Identity: Grid-based Inventory, Thai UX Optimized
// ----------------------------------------------------

import React from "react"
import { notFound } from "next/navigation"
import { Check, ArrowRight } from "lucide-react" // ✅ Removed unused ShoppingCart
import { TEMPLATE_REGISTRY } from "../_config/registry"

interface Props {
  params: Promise<{ template_id: string }>
}

export default async function ServicesPage({ params }: Props) {
  const { template_id } = await params
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  if (!entry) return notFound()

  const { themeColor, products } = entry.config

  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-white px-6 pb-20 pt-40">
      {/* 1. SECTION_HEADER: Industrial Sharp Design */}
      <div className="mb-16 border-l-8 border-slate-900 pl-6">
        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
          Available_Inventory
        </span>
        <h1 className="text-6xl font-black uppercase leading-none tracking-tighter text-slate-900">
          บริการและแพ็กเกจ
        </h1>
      </div>

      {/* 2. PRODUCT_GRID: High-Contrast Display */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {products?.map((item: any) => (
          <div
            key={item.id}
            className="group flex flex-col border border-slate-200 bg-white transition-all duration-500 hover:border-slate-900"
          >
            {/* PRODUCT_IMAGE_PLACEHOLDER */}
            <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-50">
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 transition-transform duration-700 group-hover:scale-110">
                Product_Image_Visual
              </div>
              {/* Animated Accent Line */}
              <div
                className="absolute bottom-0 left-0 h-1.5 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: themeColor }}
              />
            </div>

            <div className="flex flex-grow flex-col p-8 md:p-10">
              <div className="mb-6 flex items-start justify-between">
                <h3 className="text-3xl font-black uppercase leading-tight tracking-tighter text-slate-900">
                  {item.name}
                </h3>
                <div className="text-right">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Starting_At
                  </span>
                  <span className="text-3xl font-black italic text-slate-900">
                    ฿{item.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="mb-8 text-sm font-bold uppercase leading-relaxed tracking-tight text-slate-500">
                {item.description}
              </p>

              {/* SPECS_LIST */}
              <ul className="mb-10 flex-grow space-y-4">
                {item.specs?.map((spec: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-slate-700"
                  >
                    <div className="flex h-5 w-5 items-center justify-center bg-slate-100">
                      <Check
                        size={12}
                        className="text-green-600"
                        strokeWidth={4}
                      />
                    </div>
                    {spec}
                  </li>
                ))}
              </ul>

              {/* ACTION_BUTTON */}
              <a
                href={`/${template_id}/contact?product=${item.id}`}
                style={{ backgroundColor: themeColor }}
                className="flex w-full items-center justify-center gap-3 py-5 font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-slate-900/10 transition-all hover:brightness-110 active:scale-[0.98]"
              >
                Order_Service <ArrowRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
