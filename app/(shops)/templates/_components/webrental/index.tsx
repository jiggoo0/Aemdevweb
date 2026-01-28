/** @format */

import React from "react"
import Image from "next/image"
import { WebRentalData } from "./schema"
import { cn } from "@/lib/utils"
import { CheckCircle2, Phone, MessageCircle, ShieldAlert } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  isPopular?: boolean
  features: string[]
  buttonText: string
}

/**
 * WebRentalTemplate - ระบบหน้าเว็บสำหรับแผนงานเช่ารายเดือน
 * [FIX]: ระบุพิกัดราคา 0 บาท และล้างพิกัด any ในระบบงาน
 */
const WebRentalTemplate: React.FC<{ data: WebRentalData }> = ({ data }) => {
  if (!data) return null

  const { navigation, hero, painPoints, pricing, footer } = data

  return (
    <div className="web-rental-template bg-white text-left font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="text-xl font-black tracking-tighter text-emerald-600 uppercase italic">
            {navigation.logo}
          </div>
          <div className="hidden items-center gap-10 md:flex">
            {navigation.links.map(
              (link: { label: string; href: string }, i: number) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-xs font-black tracking-widest text-slate-500 uppercase transition-colors hover:text-emerald-600"
                >
                  {link.label}
                </a>
              )
            )}
            <button className="rounded-xl bg-emerald-600 px-8 py-3 text-[10px] font-black tracking-widest text-white uppercase">
              {navigation.cta}
            </button>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2">
              <span className="text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase italic">
                {hero.badge}
              </span>
            </div>
            <h1 className="font-heading text-5xl leading-[1.1] font-black tracking-tighter text-slate-950 md:text-7xl lg:text-8xl">
              {hero.title}{" "}
              <span className="text-emerald-600">{hero.highlight}</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed font-bold text-slate-500">
              {hero.description}
            </p>
            <div className="flex items-center gap-6 rounded-[2rem] border border-slate-100 bg-slate-50 p-8">
              <div>
                <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  {hero.priceLabel}
                </p>
                <p className="text-4xl font-black text-emerald-600 italic">
                  ฿{hero.priceValue}{" "}
                  <span className="text-sm font-bold text-slate-400 uppercase">
                    / month
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-[3rem] shadow-2xl">
            <Image
              src={hero.bgImage}
              alt={hero.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-32 text-white">
        <div className="container mx-auto px-6">
          <h2 className="font-heading mb-20 text-center text-4xl font-black tracking-tighter italic md:text-6xl">
            {painPoints.title}
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {painPoints.items.map(
              (item: { title: string; desc: string }, i: number) => (
                <div
                  key={i}
                  className="space-y-6 rounded-[2.5rem] border border-white/10 p-10"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950">
                    <ShieldAlert size={28} />
                  </div>
                  <h4 className="text-xl font-black italic">{item.title}</h4>
                  <p className="text-sm leading-relaxed font-bold text-slate-400">
                    {item.desc}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading mb-20 text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
            {pricing.title}
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {pricing.tiers.map((tier: PricingTier, i: number) => (
              <div
                key={i}
                className={cn(
                  "relative flex flex-col rounded-[3.5rem] border p-12 text-left transition-all",
                  tier.isPopular
                    ? "scale-105 border-slate-950 bg-slate-950 text-white shadow-2xl"
                    : "border-slate-100"
                )}
              >
                <h3 className="mb-6 text-2xl font-black uppercase italic">
                  {tier.name}
                </h3>
                <div className="mb-10 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-emerald-500 italic">
                    ฿{tier.price}
                  </span>
                </div>
                <ul className="mb-12 flex-1 space-y-5">
                  {tier.features.map((feat: string, j: number) => (
                    <li
                      key={j}
                      className="flex items-start gap-4 text-sm font-bold opacity-80"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-emerald-500"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  className={cn(
                    "w-full rounded-2xl py-5 text-[10px] font-black tracking-[0.3em] uppercase transition-all",
                    tier.isPopular
                      ? "bg-emerald-500 text-slate-950"
                      : "bg-slate-100 text-slate-600 hover:bg-emerald-600 hover:text-white"
                  )}
                >
                  {tier.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12 text-2xl font-black tracking-tighter text-emerald-600 uppercase italic">
            {footer.brand}
          </div>
          <p className="mb-12 text-sm font-bold tracking-widest text-slate-400 uppercase">
            {footer.tagline}
          </p>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-16">
            <div className="flex items-center gap-3 font-black text-slate-950">
              <Phone size={18} className="text-emerald-500" />{" "}
              {footer.contact.phone}
            </div>
            <div className="flex items-center gap-3 font-black text-slate-950">
              <MessageCircle size={18} className="text-emerald-500" />{" "}
              {footer.contact.line}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WebRentalTemplate
