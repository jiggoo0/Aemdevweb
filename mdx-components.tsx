/** @format */

import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

// 🛠️ Icons Registry (Lucide React)
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Smartphone,
  Bell,
  Settings,
  Globe,
  Layout,
  Database,
  ShoppingBag,
  PackageCheck,
  BarChart3,
  Target,
  MousePointerClick,
  MapPin,
  CalendarCheck,
  Star,
  ClipboardList,
} from "lucide-react"

// 🧩 Specialist Logic Components Integration
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { SpeedDemon } from "@/components/sales-engine/SpeedDemon"
import WorkProcess from "@/components/sales-engine/WorkProcess"

/**
 * 🏗️ MDX Components Specialist Edition v2026
 * ลงทะเบียนคอมโพเนนต์และไอคอนมาตรฐานเพื่อให้เรียกใช้ใน .mdx ได้ทันทีโดยไม่เกิด ReferenceError
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // 🔗 1. Core Logic & Icons Registry
    ImpactStats,
    SpeedDemon,
    WorkProcess,
    Zap,
    ShieldCheck,
    Smartphone,
    Bell,
    Settings,
    Globe,
    Layout,
    Database,
    Sparkles,
    ShoppingBag,
    PackageCheck,
    BarChart3,
    Target,
    MousePointerClick,
    MapPin,
    CalendarCheck,
    Star,
    ClipboardList,

    // 🖼️ 2. Optimized Specialist Image (Industrial Standard)
    img: (props) => (
      <span className="group relative my-16 block w-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-2xl">
        <span className="relative block aspect-video w-full overflow-hidden">
          <Image
            src={props.src || ""}
            alt={props.alt || "AEM DEV WEB Specialist Image"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </span>
        {props.alt && (
          <span className="font-prompt block border-t border-slate-100 bg-white p-5 text-center text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
            {props.alt}
          </span>
        )}
      </span>
    ),

    // 🔗 3. Technical Logic Links
    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#")
      const baseClass =
        "font-bold transition-all text-emerald-600 hover:text-emerald-500 underline decoration-emerald-500/30 underline-offset-4 hover:decoration-emerald-500"

      if (isInternal) {
        return (
          <Link href={href as string} className={baseClass}>
            {children}
          </Link>
        )
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {children}{" "}
          <span className="ml-1 text-[10px] italic opacity-50">↗</span>
        </a>
      )
    },

    // 📣 4. Expert Insights Block
    blockquote: ({ children }) => (
      <div className="group relative my-12 overflow-hidden rounded-r-[2.5rem] border-l-4 border-emerald-500 bg-emerald-500/[0.03] p-8 text-slate-600 md:p-10">
        <div className="pointer-events-none absolute -top-4 -right-4 opacity-5 transition-opacity group-hover:opacity-10">
          <Zap className="h-24 w-24 text-emerald-500" />
        </div>
        <div className="font-anuphan relative z-10 text-xl leading-relaxed font-medium italic">
          {children}
        </div>
      </div>
    ),

    // 🚀 5. Specialist Marketing Blocks
    CallToAction: ({
      title,
      url,
      label = "เริ่มโปรเจกต์ของคุณ",
    }: {
      title: string
      url: string
      label?: string
    }) => (
      <div className="relative my-16 overflow-hidden rounded-[3rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 text-center md:p-16">
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-40" />
        <h3 className="font-prompt relative z-10 mb-8 text-3xl font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl">
          {title}
        </h3>
        <Link
          href={url}
          className="relative z-10 inline-flex items-center justify-center rounded-full bg-slate-950 px-12 py-6 text-[11px] font-black tracking-[0.3em] text-white uppercase shadow-2xl transition-all hover:scale-105 hover:bg-emerald-600 active:scale-95"
        >
          {label} <ArrowRight className="ml-3 h-4 w-4" />
        </Link>
      </div>
    ),

    FeatureList: ({ items }: { items: string[] }) => (
      <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-[1.5rem] border border-slate-100 bg-slate-50/50 p-5 transition-colors hover:bg-white"
          >
            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
            <span className="font-anuphan text-lg font-medium text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    ),

    // ✒️ 6. Industrial Typography System
    h1: ({ children }) => (
      <h1 className="font-prompt mt-24 mb-10 text-5xl leading-none font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-prompt mt-20 mb-8 flex items-center gap-4 border-b border-slate-100 pb-6 text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
        <div className="h-10 w-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-prompt mt-14 mb-6 text-2xl font-black tracking-tight text-slate-800 uppercase italic md:text-4xl">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="font-anuphan mb-8 text-xl leading-[1.9] font-medium text-slate-600">
        {children}
      </p>
    ),
    ul: ({ children }) => <ul className="mb-10 ml-2 space-y-6">{children}</ul>,
    li: ({ children }) => (
      <li className="flex items-start gap-4">
        <div className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
        <span className="font-anuphan text-xl font-medium text-slate-600">
          {children}
        </span>
      </li>
    ),
  }
}
