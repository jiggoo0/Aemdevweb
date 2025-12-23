/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { Check, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react"

import { servicesData } from "@/data/servicesData"
// 🟢 ตรวจสอบให้แน่ใจว่า resolveServiceIcon รองรับ string หรือ any
import { resolveServiceIcon } from "./iconMap"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 md:py-40"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-50" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge
            variant="outline"
            className="mb-6 rounded-none border-2 border-slate-900 bg-white px-4 py-1 text-xs font-black uppercase tracking-widest text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
          >
            AEM Service Packages
          </Badge>

          <h2 className="mb-8 text-5xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-7xl lg:text-8xl">
            โซลูชันที่ <br />
            <span className="text-blue-600 underline decoration-slate-900 decoration-8 underline-offset-[12px]">
              ใช่สำหรับคุณ
            </span>
          </h2>

          <p className="max-w-2xl text-xl font-bold leading-relaxed text-slate-500">
            ยกระดับธุรกิจ SME ด้วยเทมเพลตระดับ Enterprise ที่ออกแบบมาเพื่อ
            Performance และ Conversion สูงสุด
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {servicesData.map((service) => {
            /**
             * 🟢 แก้ไข Error TS2339:
             * ใช้ Type Assertion 'as any' เพื่อให้เข้าถึง Property ได้อย่างยืดหยุ่น
             */
            const Icon = resolveServiceIcon(
              (service as any).icon || (service as any).iconName || "Zap"
            )

            return (
              <Card
                key={service.id}
                className="group relative flex flex-col rounded-none border-4 border-slate-900 bg-white p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-[20px_20px_0px_0px_rgba(37,99,235,1)]"
              >
                <CardHeader className="space-y-6 p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="border-2 border-slate-900 bg-slate-900 p-4 text-white shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] transition-all group-hover:bg-blue-600 group-hover:shadow-none">
                      <Icon className="h-8 w-8 stroke-[2.5]" />
                    </div>

                    {service.isHot && (
                      <span className="border-2 border-slate-900 bg-orange-500 px-4 py-1 text-xs font-black uppercase italic tracking-widest text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <CardTitle className="text-3xl font-black uppercase italic tracking-tighter text-slate-900 transition-colors group-hover:text-blue-600">
                      {service.title}
                    </CardTitle>
                    <div className="text-4xl font-black tabular-nums text-blue-600">
                      {service.priceTag.replace("เริ่มต้น ", "")}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow space-y-8 p-8 pt-0">
                  <p className="border-l-4 border-blue-600 pl-4 text-base font-bold leading-relaxed text-slate-500">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Standard Features
                    </p>

                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 stroke-[3] text-emerald-500" />
                        <span className="text-sm font-black text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                  <Button
                    className="h-16 w-full rounded-none border-4 border-slate-900 bg-slate-900 text-base font-black uppercase italic tracking-widest text-white transition-all hover:bg-blue-600 active:scale-95"
                    asChild
                  >
                    <Link href={`/landing/${service.slug}`}>
                      Preview Architecture
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Trust Bar / Footer CTA */}
        <div className="mt-32 flex flex-col items-center justify-between gap-8 border-4 border-slate-900 bg-white p-12 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] md:flex-row">
          <div className="flex items-center gap-8">
            <div className="flex h-20 w-20 items-center justify-center border-4 border-slate-900 bg-blue-50">
              <ShieldCheck className="h-10 w-10 text-slate-900" />
            </div>
            <div className="max-w-md">
              <h4 className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">
                Enterprise Reliability
              </h4>
              <p className="font-bold text-slate-500">
                สถาปัตยกรรมเว็บไซต์ที่ออกแบบมาเพื่อความปลอดภัย
                และรองรับการขยายตัวในระยะยาว
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
            <Button
              variant="outline"
              className="h-16 rounded-none border-4 border-slate-900 px-10 text-base font-black uppercase italic hover:bg-slate-900 hover:text-white"
              asChild
            >
              <Link href="/contact">Inquiry</Link>
            </Button>

            <Button
              className="h-16 rounded-none border-4 border-slate-900 bg-blue-600 px-10 text-base font-black uppercase italic text-white hover:bg-slate-900"
              asChild
            >
              <a href="tel:0812345678">
                <PhoneCall className="mr-3 h-5 w-5" />
                Call Agent
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
