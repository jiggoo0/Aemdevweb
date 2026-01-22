/** @format */

"use client"

import React, { useState, useMemo } from "react"
import {
  CheckCircle2,
  MessageCircle,
  Zap,
  Calculator,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/constants/site-config"
import { services } from "@/constants/services-data"

// 📊 [LOGIC]: กรองแพ็กเกจหลักจากฐานข้อมูล Services
const BASE_PACKAGES = services
  .filter((s) =>
    ["Starter", "SME", "Corporate", "Industrial"].includes(s.category)
  )
  .map((s) => ({
    id: s.id,
    name: s.title.split(":")[0], // ตัดชื่อสั้นๆ ก่อนเครื่องหมาย :
    price: s.priceValue,
    description: s.description,
  }))

// ➕ [LOGIC]: ส่วนเสริมสำหรับการทำ Upselling
const ADD_ONS = [
  {
    id: "seo-audit",
    name: "Technical SEO Audit (ปรับโครงสร้างเว็บเดิม)",
    price: 4900,
  },
  { id: "multi-lang", name: "ระบบ 2 ภาษา (ไทย-อังกฤษ)", price: 7500 },
  {
    id: "blog-system",
    name: "ระบบบทความ MDX (เพิ่มความน่าเชื่อถือ)",
    price: 5000,
  },
  { id: "maintenance", name: "บริการดูแลระบบ & Security 1 ปี", price: 8900 },
]

/**
 * 🏗️ PriceEstimator — ระบบประเมินงบประมาณอัจฉริยะ (AEM 2026 Edition)
 * [FIXED]: ลบ Unused Variable 'Plus' ออกเพื่อให้ผ่านการ Linting
 */
const PriceEstimator = () => {
  const [selectedBase, setSelectedBase] = useState(BASE_PACKAGES[1]) // Default: SME
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

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

  // 🛠️ [STRATEGY]: สร้าง Dynamic Message สำหรับปิดการขายผ่าน LINE
  const generateLineMessage = () => {
    const addonNames = selectedAddOns
      .map((id) => ADD_ONS.find((a) => a.id === id)?.name)
      .join(", ")
    
    const text = `สวัสดีครับคุณเอ็ม ผมสนใจทำเว็บไซต์แบบประเมินราคาเองครับ\n\n📌 แพ็กเกจหลัก: ${selectedBase.name}\n➕ ส่วนเสริม: ${addonNames || "ไม่มี"}\n💰 งบประมาณประเมิน: ฿${totalPrice.toLocaleString()}\n\nช่วยให้คำปรึกษาเพิ่มเติมหน่อยครับ`
    
    return `${siteConfig.links.line}?text=${encodeURIComponent(text)}`
  }

  return (
    <section className="bg-slate-50 py-24 selection:bg-emerald-500/10">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          
          {/* Header Specialist Branding */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-[10px] font-black tracking-widest text-emerald-700 uppercase">
              <Calculator size={14} /> Price Estimator Specialist
            </div>
            <h2 className="font-prompt mb-4 text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl">
              ประเมินงบประมาณโปรเจกต์
            </h2>
            <p className="font-anuphan text-lg font-bold text-slate-500">
              โปร่งใส ชัดเจน เลือกฟีเจอร์ที่ต้องการเพื่อรับราคาประเมินเบื้องต้นได้ทันที
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* 1️⃣ Selection Architecture */}
            <div className="space-y-12 lg:col-span-7">
              
              {/* Step 1: Base Selection */}
              <div className="space-y-6">
                <h3 className="font-prompt flex items-center gap-4 text-xl font-black text-slate-900 uppercase italic">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-black text-white italic">
                    01
                  </span>
                  เลือกรูปแบบเว็บไซต์พื้นฐาน
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {BASE_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedBase(pkg)}
                      className={cn(
                        "group relative flex flex-col items-start rounded-[2rem] border-2 p-8 text-left transition-all duration-300",
                        selectedBase.id === pkg.id
                          ? "border-emerald-500 bg-white shadow-2xl shadow-emerald-500/10"
                          : "border-transparent bg-white/50 hover:border-slate-200"
                      )}
                    >
                      <div className={cn(
                        "font-prompt mb-2 text-lg font-black uppercase italic transition-colors",
                        selectedBase.id === pkg.id ? "text-emerald-600" : "text-slate-900"
                      )}>
                        {pkg.name}
                      </div>
                      <div className="font-anuphan text-xs font-bold leading-relaxed text-slate-400">
                        {pkg.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Add-ons Selection */}
              <div className="space-y-6">
                <h3 className="font-prompt flex items-center gap-4 text-xl font-black text-slate-900 uppercase italic">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-black text-white italic">
                    02
                  </span>
                  เพิ่มประสิทธิภาพ (Add-ons)
                </h3>
                <div className="grid gap-3">
                  {ADD_ONS.map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-2xl border-2 px-6 py-5 transition-all",
                        selectedAddOns.includes(addon.id)
                          ? "border-emerald-500 bg-emerald-50/50"
                          : "border-white bg-white hover:border-slate-100"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all",
                          selectedAddOns.includes(addon.id) ? "border-emerald-500 bg-emerald-500" : "border-slate-200"
                        )}>
                          {selectedAddOns.includes(addon.id) && <CheckCircle2 className="h-4 w-4 text-white" />}
                        </div>
                        <span className="font-anuphan text-sm font-bold text-slate-700">
                          {addon.name}
                        </span>
                      </div>
                      <span className="font-prompt font-black text-emerald-600">
                        + ฿{addon.price.toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2️⃣ Summary Specialist Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[3rem] bg-slate-900 p-10 text-white shadow-3xl">
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <h3 className="font-prompt mb-1 text-2xl font-black text-emerald-400 uppercase italic">
                      Price Summary
                    </h3>
                    <p className="font-prompt text-[9px] font-black tracking-[0.4em] text-slate-500 uppercase">
                      Official Estimation v.2026
                    </p>
                  </div>
                  <Zap className="fill-amber-400 text-amber-400 animate-pulse" size={28} />
                </div>

                {/* Items List */}
                <div className="mb-10 space-y-5 border-t border-white/10 pt-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-anuphan font-bold text-slate-400">Package: {selectedBase.name}</span>
                    <span className="font-prompt font-black">฿{selectedBase.price.toLocaleString()}</span>
                  </div>
                  {selectedAddOns.map((id) => {
                    const addon = ADD_ONS.find((a) => a.id === id)
                    return (
                      <div key={id} className="flex items-center justify-between text-xs">
                        <span className="font-anuphan font-bold text-slate-500">+ {addon?.name}</span>
                        <span className="font-prompt font-black text-emerald-400">฿{addon?.price.toLocaleString()}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Grand Total */}
                <div className="mb-12 text-right">
                  <div className="font-prompt mb-1 text-[10px] font-black tracking-widest text-slate-500 uppercase italic">
                    Estimated Investment
                  </div>
                  <div className="font-prompt text-6xl font-black tracking-tighter text-white">
                    <span className="mr-3 text-2xl font-normal text-slate-500">฿</span>
                    {totalPrice.toLocaleString()}
                  </div>
                </div>

                <a
                  href={generateLineMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-4 rounded-2xl bg-emerald-500 py-6 font-prompt text-lg font-black text-slate-900 shadow-2xl shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:bg-white"
                >
                  <MessageCircle size={24} fill="currentColor" />
                  ส่งสเปกนี้ให้นายเอ็ม
                </a>

                <p className="font-anuphan mt-8 text-center text-[10px] font-bold leading-relaxed tracking-tighter text-slate-500 uppercase">
                  * ราคาประเมินนี้รวมภาษีแล้ว และอาจมีการปรับเปลี่ยน <br />
                  ตามขอบเขตงานจริงที่ตกลงกัน (Final Scope)
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceEstimator
