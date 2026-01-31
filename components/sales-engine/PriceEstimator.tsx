/** @format */

"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  CheckCircle2,
  MessageCircle,
  Zap,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";
import { servicesData } from "@/constants/services-data";

/* -------------------------------------------------------------------------- */
/* 1. เตรียมข้อมูลแพ็กเกจเช่าเว็บ (Package Setup)                                  */
/* -------------------------------------------------------------------------- */

const BASE_PACKAGES = (servicesData || [])
  .filter((s) => ["ReadyMade", "Business", "Digital"].includes(s.category))
  .map((s) => ({
    id: s.id,
    name: s.title,
    monthlyPrice: s.priceValue,
    // ค่าติดตั้งเริ่มต้น (ปรับให้สอดคล้องกับ DNA ของนายเอ็ม)
    setupPrice: s.priceValue > 5000 ? 3000 : 1500,
    description: s.description,
  }));

/* -------------------------------------------------------------------------- */
/* 2. รายการบริการเสริมเพื่อความแรง (Add-ons)                                     */
/* -------------------------------------------------------------------------- */

const ADD_ONS = [
  {
    id: "seo-boost",
    name: "ปรับจูนโครงสร้าง SEO ให้แรงตั้งแต่ออกตัว",
    price: 4900,
  },
  {
    id: "multi-lang",
    name: "ระบบแสดงผล 2 ภาษา (ไทย/อังกฤษ)",
    price: 7500,
  },
  {
    id: "content-ready",
    name: "บริการเตรียมข้อมูลและลงเนื้อหาให้พร้อมขาย",
    price: 3500,
  },
];

/**
 * PriceEstimator - ระบบคำนวณงบประมาณเช่าเว็บไซต์
 * แนวคิด: ชัดเจน โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง
 * โดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
const PriceEstimator = () => {
  const [mounted, setMounted] = useState(false);

  // กำหนดค่าเริ่มต้นเป็นแพ็กเกจแรก
  const [selectedBase, setSelectedBase] = useState(BASE_PACKAGES[0] || null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // คำนวณยอดรวม
  const totalSetupPrice = useMemo(() => {
    if (!selectedBase) return 0;
    const addOnsTotal = ADD_ONS.filter((a) =>
      selectedAddOns.includes(a.id),
    ).reduce((sum, a) => sum + a.price, 0);
    return selectedBase.setupPrice + addOnsTotal;
  }, [selectedBase, selectedAddOns]);

  const monthlyRental = selectedBase?.monthlyPrice || 0;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // สร้างข้อความทัก LINE
  const generateLineMessage = () => {
    if (!selectedBase) return "#";
    const addonNames = selectedAddOns
      .map((id) => ADD_ONS.find((a) => a.id === id)?.name)
      .join(", ");

    const text = `สวัสดีครับนายเอ็ม สนใจเช่าเว็บครับ\n\n🚀 แพ็กเกจ: ${
      selectedBase.name
    }\n💰 รายเดือน: ฿${monthlyRental.toLocaleString()}\n🛠 เสริมความเทพ: ${
      addonNames || "ไม่มี"
    }\n✅ ยอดจ่ายงวดแรก: ฿${(
      totalSetupPrice + monthlyRental
    ).toLocaleString()}\n\nแนะนำขั้นตอนหน่อยครับ!`;

    return `${siteConfig.contact.line}?text=${encodeURIComponent(text)}`;
  };

  if (!mounted || !selectedBase) return null;

  return (
    <section
      className="bg-slate-50 py-24 antialiased selection:bg-emerald-100"
      id="pricing-estimator"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-5 py-2 text-[10px] font-black tracking-widest text-emerald-700 uppercase italic">
              <Calculator size={14} /> Budget Planning Tool
            </div>
            <h2 className="font-heading mb-6 text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl">
              คำนวณ <span className="text-emerald-500">งบประมาณ.</span>
            </h2>
            <p className="font-body text-lg font-bold text-slate-500">
              ตัวเลขชัดเจน ไม่มีหมกเม็ด เพื่อให้ธุรกิจของคุณเริ่มได้ไวที่สุด
            </p>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* เลือกแพ็กเกจ */}
            <div className="space-y-16 lg:col-span-7">
              <div className="space-y-8">
                <h3 className="font-heading flex items-center gap-4 text-2xl font-black text-slate-950 uppercase italic">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-base text-emerald-500 shadow-xl">
                    01
                  </span>
                  เลือกแพ็กเกจที่ชอบ
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {BASE_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedBase(pkg)}
                      className={cn(
                        "group relative flex flex-col items-start rounded-[2.5rem] border-2 p-8 text-left transition-all duration-500",
                        selectedBase.id === pkg.id
                          ? "border-emerald-500 bg-white shadow-2xl shadow-emerald-500/10"
                          : "border-white bg-white/50 hover:border-slate-200",
                      )}
                    >
                      <div
                        className={cn(
                          "mb-2 text-xl font-black uppercase italic transition-colors",
                          selectedBase.id === pkg.id
                            ? "text-emerald-600"
                            : "text-slate-900",
                        )}
                      >
                        {pkg.name}
                      </div>
                      <div className="font-body mb-6 text-xs leading-relaxed font-bold text-slate-400">
                        {pkg.description}
                      </div>
                      <div className="mt-auto">
                        <span className="text-2xl font-black text-slate-950">
                          ฿{pkg.monthlyPrice.toLocaleString()}
                        </span>
                        <span className="ml-2 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                          / เดือน
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* เพิ่มบริการเสริม */}
              <div className="space-y-8">
                <h3 className="font-heading flex items-center gap-4 text-2xl font-black text-slate-950 uppercase italic">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-base text-emerald-500 shadow-xl">
                    02
                  </span>
                  เพิ่มความแรงให้ระบบ
                </h3>
                <div className="grid gap-4">
                  {ADD_ONS.map((addon) => (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[1.5rem] border-2 px-8 py-6 transition-all duration-300",
                        selectedAddOns.includes(addon.id)
                          ? "border-emerald-500 bg-emerald-50/30 shadow-lg"
                          : "border-white bg-white hover:border-slate-100",
                      )}
                    >
                      <div className="flex items-center gap-5">
                        <div
                          className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all",
                            selectedAddOns.includes(addon.id)
                              ? "border-emerald-500 bg-emerald-500"
                              : "border-slate-200",
                          )}
                        >
                          {selectedAddOns.includes(addon.id) && (
                            <CheckCircle2 size={14} className="text-white" />
                          )}
                        </div>
                        <span className="font-body text-sm font-bold text-slate-700">
                          {addon.name}
                        </span>
                      </div>
                      <span className="font-heading font-black text-emerald-600">
                        + ฿{addon.price.toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar สรุปยอด */}
            <div className="lg:sticky lg:top-32 lg:col-span-5">
              <div className="rounded-[3.5rem] bg-slate-950 p-10 text-white shadow-2xl md:p-12">
                <div className="mb-10 flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-emerald-400 uppercase italic">
                      ยอดรวมทั้งหมด
                    </h3>
                    <p className="text-[9px] font-black tracking-[0.5em] text-slate-500 uppercase italic">
                      Best Value Selection
                    </p>
                  </div>
                  <Zap
                    size={28}
                    className="fill-emerald-400 text-emerald-400"
                  />
                </div>

                <div className="mb-10 space-y-6 border-t border-white/5 pt-10">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm font-bold text-slate-400">
                      แพ็กเกจที่คุณเลือก:
                    </span>
                    <span className="font-heading font-black text-white italic">
                      {selectedBase.name}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 rounded-3xl bg-white/5 p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-xs font-bold text-emerald-400">
                        ค่าแรกเข้า (ติดตั้ง):
                      </span>
                      <span className="font-heading text-2xl font-black text-emerald-400 italic">
                        ฿{totalSetupPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="font-body text-xs font-bold text-slate-400">
                        ค่าเช่ารายเดือน:
                      </span>
                      <span className="font-heading text-2xl font-black text-white italic">
                        ฿{monthlyRental.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-12 text-right">
                  <p className="mb-2 text-[10px] font-black tracking-widest text-slate-500 uppercase italic">
                    ยอดชำระงวดแรก (รวมเดือนแรก)
                  </p>
                  <div className="font-heading text-6xl font-black tracking-tighter text-white italic">
                    <span className="mr-3 text-xl font-normal text-slate-600">
                      ฿
                    </span>
                    {(totalSetupPrice + monthlyRental).toLocaleString()}
                  </div>
                </div>

                <a
                  href={generateLineMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-center gap-4 rounded-2xl bg-emerald-500 py-6 text-[11px] font-black tracking-[0.3em] text-slate-950 uppercase italic transition-all hover:bg-white active:scale-95"
                >
                  <MessageCircle size={18} fill="currentColor" />
                  ทักหาเอ็มเพื่อเริ่มงานทันที
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </a>

                <div className="mt-10 space-y-2 text-center text-[9px] font-bold tracking-tight text-slate-600 uppercase italic">
                  <p>* ราคานี้รวมค่า Hosting และการดูแลระบบเบื้องต้นแล้ว</p>
                  <p>ค่าบริการรายปีครอบคลุมชื่อโดเมนและการดูแลระบบ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceEstimator;
