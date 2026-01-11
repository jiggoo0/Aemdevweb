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
import { cn } from "@/lib/utils"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Direct Line",
      value: siteConfig.contact.tel,
      href: `tel:${siteConfig.contact.tel.replace(/-/g, "")}`,
      status: "Available Now",
      accent: "border-[#1E3A8A]", // Brand Blue
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Line Official",
      value: siteConfig.contact.lineId,
      href: siteConfig.contact.lineUrl,
      status: "Fast Response",
      accent: "border-[#10B981]", // Emerald
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Enterprise Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      status: "Official Inquiries",
      accent: "border-[#F97316]", // Brand Orange
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Operation Hours",
      value: "Mon - Sat (09:00 - 18:00)",
      href: null,
      status: "Office Time",
      accent: "border-slate-500",
    },
  ]

  return (
    <div className="space-y-12">
      {/* ─── 01. HEADER SECTION: INDUSTRIAL COMMAND ─── */}
      <header className="space-y-6">
        <div className="inline-block border-b-[6px] border-[#1E3A8A] pb-3">
          <h2 className="font-heading text-5xl font-black uppercase italic tracking-tighter text-white lg:text-6xl">
            Connection <span className="text-[#1E3A8A]">Hub.</span>
          </h2>
        </div>
        <p className="max-w-md text-lg font-bold leading-relaxed text-slate-400">
          ยินดีให้คำปรึกษาฟรีแบบพาร์ทเนอร์ ทักมาคุยรายละเอียดก่อนได้เลยครับ
          <span className="block text-white">
            ผมพร้อมช่วยวางแผนระบบที่คุ้มค่าที่สุด
          </span>
        </p>
      </header>

      {/* ─── 02. CONTACT CARDS: DATA LOG STYLE ─── */}
      <div className="grid grid-cols-1 gap-4">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="group relative border-2 border-white/5 bg-[#0F172A] p-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] transition-all hover:border-[#1E3A8A] hover:bg-white/5 hover:shadow-[4px_4px_0px_0px_#1E3A8A]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {/* ICON BOX */}
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center border-4 bg-slate-950 text-white transition-transform group-hover:rotate-12",
                    item.accent
                  )}
                >
                  {item.icon}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                      {item.label}
                    </span>
                    <span className="border border-[#1E3A8A]/20 bg-white/5 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-[#1E3A8A]">
                      {item.status}
                    </span>
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xl font-black text-white transition-colors hover:text-[#1E3A8A]"
                    >
                      {item.value}
                      <ExternalLink className="h-4 w-4 opacity-30 transition-opacity group-hover:opacity-100" />
                    </a>
                  ) : (
                    <p className="text-xl font-black text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ─── 03. OFFICE LOCATION: TECHNICAL PLAQUE ─── */}
      <div className="group relative overflow-hidden border-4 border-slate-800 bg-white/5 p-8 transition-all hover:border-[#F97316]">
        <div
          className="absolute -right-6 -top-6 opacity-5 transition-transform group-hover:scale-110 group-hover:opacity-10"
          aria-hidden="true"
        >
          <MapPin size={120} className="text-white" />
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse bg-[#F97316]" />
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white">
              Workstation_Location
            </h3>
          </div>
          <p className="max-w-xs text-base font-bold leading-tight text-slate-300">
            {siteConfig.contact.address}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-3 bg-[#1E3A8A] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-[#0F172A]"
          >
            Open GPS Navigation
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>

      {/* ─── 04. SOCIAL & VERIFICATION ─── */}
      <footer className="space-y-8 pt-4">
        <div className="flex items-center gap-4">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600">
            Secure_Network_Systems
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
        </div>

        <div className="flex gap-4">
          <a
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center border-2 border-white/10 bg-white/5 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-2 hover:border-[#1E3A8A] hover:bg-[#1E3A8A]"
          >
            <Facebook size={24} />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center border-2 border-white/10 bg-white/5 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-2 hover:border-white hover:bg-white hover:text-[#0F172A]"
          >
            {/* X (Twitter) or GitHub Icon */}
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}
