/** @format */

"use client"

import React, { useState, useMemo } from "react"
import { CheckCircle2, Plus, MessageCircle, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/constants/site-config"

// 📊 ข้อมูลสำหรับการประเมิน (เน้นภาษาที่คนทำธุรกิจเข้าใจง่าย)
const BASE_PACKAGES = [
  {
    id: "starter",
    name: "เว็บหน้าเดียว (One-Page)",
    price: 5900,
    description: "เน้นแนะนำตัว หรือปิดการขายสินค้าเดียว",
  },
  {
    id: "sme",
    name: "เว็บ SME / ร้านค้า",
    price: 12900,
    description: "มาตรฐานธุรกิจ เพิ่มยอดขายด้วยความเร็ว",
  },
  {
    id: "corporate",
    name: "เว็บบริษัท / หจก.",
    price: 29000,
    description: "เน้นความน่าเชื่อถือและภาพลักษณ์องค์กร",
  },
  {
    id: "industrial",
    name: "เว็บโรงงาน / อุตสาหกรรม",
    price: 55000,
    description: "ระบบรองรับข้อมูลหนักและเสถียรสูงสุด",
  },
]

const ADD_ONS = [
  { id: "seo", name: "ชุดปรับจูน SEO ดันอันดับ Google", price: 4900 },
  { id: "lang", name: "ระบบรองรับ 2 ภาษา (ไทย-อังกฤษ)", price: 5000 },
  { id: "blog", name: "ระบบบทความ / แชร์เทคนิคการตลาด", price: 4500 },
]

/**
 * 🏗️ PriceEstimator — ระบบประเมินงบประมาณเบื้องต้น
 * ผมสร้างเครื่องมือนี้มาเพื่อให้คุณวางแผนงบประมาณได้ง่ายๆ
 * โปร่งใส ไม่ต้องรอสอบถามราคาให้เสียเวลาครับ
 */
const PriceEstimator = () => {
  const [selectedBase, setSelectedBase] = useState(BASE_PACKAGES[1]) // ค่าเริ่มต้นเป็น SME
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  // 🧬 คำนวณราคารวมแบบ Real-time
  const totalPrice = useMemo(() => {
    const addOnsTotal = ADD_ONS.filter((a) =>
      selectedAddOns.includes(a.id)
    ).reduce((sum, a) => sum + a.price, 0)
    return selectedBase.price + addOnsTotal
  }, [selectedBase, selectedAddOns])

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* 1️⃣ ส่วนเลือกบริการ (Selection Area) */}
            <div className="space-y-10 lg:col-span-3">
              {/* เลือกแพ็กเกจหลัก */}
              <div className="space-y-4">
                <h3 className="font-prompt text-xs font-black tracking-widest text-slate-400 uppercase">
                  1. เลือกรูปแบบเว็บไซต์ที่เหมาะกับคุณ
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {BASE_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedBase(pkg)}
                      className={cn(
                        "flex flex-col items-start rounded-2xl border-2 p-5 text-left transition-all active:scale-95",
                        selectedBase.id === pkg.id
                          ? "border-emerald-500 bg-emerald-50/30"
                          : "border-slate-100 hover:border-slate-200"
                      )}
                    >
                      <div className="font-prompt mb-1 font-black text-slate-900 uppercase italic">
                        {pkg.name}
                      </div>
                      <div className="font-anuphan text-xs text-slate-500">
                        {pkg.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* เลือกบริการเสริม */}
              <div className="space-y-4">
                <h3 className="font-prompt text-xs font-black tracking-widest text-slate-400 uppercase">
                  2. เลือกส่วนเสริมที่ต้องการ (เลือกได้หลายรายการ)
                </h3>
                <div className="space-y-3">
                  {ADD_ONS.map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-2xl border px-6 py-4 transition-all active:scale-[0.99]",
                        selectedAddOns.includes(addon.id)
                          ? "border-emerald-500 bg-emerald-50/30"
                          : "border-slate-100 hover:bg-slate-50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {selectedAddOns.includes(addon.id) ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        ) : (
                          <Plus className="h-5 w-5 text-slate-300" />
                        )}
                        <span className="font-anuphan text-sm font-bold text-slate-700">
                          {addon.name}
                        </span>
                      </div>
                      <span className="font-prompt text-sm font-bold text-slate-400">
                        + ฿{addon.price.toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2️⃣ ส่วนสรุปงบประมาณ (Summary Area) */}
            <div className="lg:col-span-2">
              <div className="sticky top-32 overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl md:p-10">
                <div className="mb-8 border-b border-white/5 pb-8">
                  <h3 className="font-prompt mb-2 text-lg font-bold tracking-tight text-emerald-400 uppercase italic">
                    สรุปงบประมาณเบื้องต้น
                  </h3>
                  <div className="font-anuphan text-[10px] tracking-widest text-slate-500 uppercase">
                    Project Estimate v.2026
                  </div>
                </div>

                <div className="mb-12 space-y-4">
                  <div className="font-anuphan flex justify-between text-sm font-bold">
                    <span className="text-slate-400">
                      แพ็กเกจ: {selectedBase.name}
                    </span>
                    <span>฿{selectedBase.price.toLocaleString()}</span>
                  </div>
                  {selectedAddOns.map((id) => {
                    const addon = ADD_ONS.find((a) => a.id === id)
                    return (
                      <div
                        key={id}
                        className="font-anuphan flex justify-between text-xs"
                      >
                        <span className="text-slate-500">+ {addon?.name}</span>
                        <span>฿{addon?.price.toLocaleString()}</span>
                      </div>
                    )
                  })}

                  {/* สรุปราคาสุทธิ */}
                  <div className="mt-6 flex items-baseline justify-between border-t border-white/5 pt-6">
                    <span className="font-prompt text-sm font-black tracking-widest text-emerald-400 uppercase">
                      รวมทั้งสิ้น
                    </span>
                    <div className="text-right">
                      <div className="font-prompt text-5xl font-black tracking-tighter text-white">
                        ฿{totalPrice.toLocaleString()}
                      </div>
                      <div className="text-[10px] tracking-widest text-slate-500 uppercase">
                        ราคาประเมินเบื้องต้น
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href={`${siteConfig.links.line}?text=${encodeURIComponent(`สวัสดีครับนายเอ็ม สนใจทำเว็บแพ็กเกจ ${selectedBase.name} เสริมด้วย ${selectedAddOns.length > 0 ? selectedAddOns.map((id) => ADD_ONS.find((a) => a.id === id)?.name).join(", ") : "ไม่มี"} งบประมาณประเมิน ฿${totalPrice.toLocaleString()} ครับ`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-prompt flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-500 py-5 text-base font-black text-slate-950 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.95]"
                  >
                    <MessageCircle className="h-5 w-5 fill-slate-950" />
                    ส่งสเปกนี้ให้ผมช่วยดูต่อ
                  </a>

                  <div className="flex items-center justify-center gap-2 text-center opacity-40">
                    <Zap className="h-3 w-3 text-emerald-400" />
                    <span className="text-[9px] font-black tracking-widest uppercase">
                      คำนวณราคาตามจริง 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceEstimator
