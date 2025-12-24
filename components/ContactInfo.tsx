/** @format */
"use client"

import React from "react"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  MessageCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react"
import { siteConfig } from "@/config/siteConfig"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Direct Line",
      value: siteConfig.contact.tel,
      href: `tel:${siteConfig.contact.tel.replace(/-/g, "")}`,
      status: "Available Now",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Line Official",
      value: siteConfig.contact.lineId,
      href: siteConfig.contact.lineUrl,
      status: "Fast Response",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Enterprise Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      status: "Official Inquiries",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Operation Hours",
      value: "Mon - Sat (09:00 - 18:00)",
      href: null,
      status: "Office Time",
    },
  ]

  return (
    <div className="space-y-12">
      {/* 1. Header Section: Industrial Command */}
      <header className="space-y-6">
        <div className="inline-block border-b-4 border-brand-blue pb-2">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
            Connection <span className="text-brand-blue">Hub</span>
          </h2>
        </div>
        <p className="text-lg font-bold leading-relaxed text-slate-400">
          ยินดีให้คำปรึกษาฟรีแบบพาร์ทเนอร์ ทักมาคุยรายละเอียดก่อนได้เลยครับ
          ผมพร้อมช่วยวางแผนระบบที่คุ้มค่าที่สุดให้ธุรกิจคุณ
        </p>
      </header>

      {/* 2. Contact Cards Grid: Data Log Style */}
      <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-between bg-brand-navy p-6 transition-all hover:bg-white/5"
          >
            <div className="flex items-center gap-6">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-slate-700 bg-slate-800 text-brand-blue transition-transform group-hover:scale-110 group-hover:border-brand-blue group-hover:text-white">
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </span>
                  <span className="border border-brand-blue/30 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-brand-blue/60">
                    {item.status}
                  </span>
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base font-black text-white transition-colors hover:text-brand-blue"
                  >
                    {item.value}
                    <ExternalLink className="h-3 w-3 opacity-30" />
                  </a>
                ) : (
                  <p className="text-base font-black text-white">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Office Location Box: Plaque Style */}
      <div className="group relative overflow-hidden border-2 border-brand-blue/30 bg-brand-blue/5 p-8">
        <div
          className="absolute right-0 top-0 p-2 opacity-10"
          aria-hidden="true"
        >
          <MapPin size={80} className="text-brand-blue" />
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-brand-blue" />
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">
              Workstation Location
            </h3>
          </div>
          <p className="text-sm font-bold leading-relaxed text-slate-300">
            {siteConfig.contact.address}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue transition-all hover:gap-5"
          >
            Open GPS Navigation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* 4. Social & Verification Support */}
      <footer className="flex flex-col gap-6 pt-4">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">
            Secure Network
          </span>
          <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
        </div>

        <div className="flex justify-center gap-4">
          <a
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-white shadow-enterprise-sm transition-all hover:-translate-y-1 hover:border-brand-blue hover:text-brand-blue"
          >
            <Facebook size={20} />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter) / GitHub"
            className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-white shadow-enterprise-sm transition-all hover:-translate-y-1 hover:border-white hover:text-white"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}
