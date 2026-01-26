/** @format */

import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

// รายการไอคอนมาตรฐานสำหรับงานระบบ (Infrastructure Icons)
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

import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { SpeedDemon } from "@/components/sales-engine/SpeedDemon"
import WorkProcess from "@/components/sales-engine/WorkProcess"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // 1. ลงทะเบียนพิกัดคอมโพเนนต์พิเศษสำหรับการแสดงผลข้อมูล (Business Logic Components)
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

    // 2. ระบบจัดการรูปภาพ: ใช้ figure เพื่อความถูกต้องตามหลักการจัดวางพิกัดข้อมูล
    img: (props) => (
      <figure className="group relative my-16 block w-full overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 shadow-2xl">
        <span className="relative block aspect-video w-full overflow-hidden">
          <Image
            src={props.src || "/images/og-image.png"}
            alt={props.alt || "รูปภาพประกอบเนื้อหาโดย AEMDEVWEB"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </span>
        {props.alt && (
          <figcaption className="font-heading block border-t border-slate-100 bg-white p-5 text-center text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
            {props.alt}
          </figcaption>
        )}
      </figure>
    ),

    // 3. ระบบจัดการลิงก์: แยกพิกัดการเชื่อมโยงภายในและภายนอก (Link Engine)
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
          {children}
        </a>
      )
    },

    // 4. ส่วนแสดงข้อความสำคัญ (High-Impact Blockquote)
    blockquote: ({ children }) => (
      <div className="group relative my-12 overflow-hidden rounded-r-[2.5rem] border-l-4 border-emerald-500 bg-emerald-500/[0.03] p-8 text-slate-600 md:p-10">
        <div
          className="pointer-events-none absolute -top-4 -right-4 opacity-5 transition-opacity group-hover:opacity-10"
          aria-hidden="true"
        >
          <Zap className="h-24 w-24 text-emerald-500" />
        </div>
        <div className="font-body relative z-10 text-xl leading-relaxed font-bold italic">
          {children}
        </div>
      </div>
    ),

    // 5. คอมโพเนนต์สั่งการธุรกิจ (Call to Action / Feature List)
    CallToAction: ({
      title,
      url,
      label = "เริ่มโครงการของคุณ",
    }: {
      title: string
      url: string
      label?: string
    }) => (
      <div className="relative my-16 overflow-hidden rounded-[3rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 text-center md:p-16">
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-40"
          aria-hidden="true"
        />
        <h3 className="font-heading relative z-10 mb-8 text-3xl leading-none font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl">
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
            className="flex items-center gap-4 rounded-[1.5rem] border border-slate-100 bg-slate-50/50 p-5 shadow-sm transition-colors hover:bg-white hover:shadow-md"
          >
            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
            <span className="font-body text-lg font-bold text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    ),

    // 6. การจัดการพิกัดหัวข้อ (Infrastructure Typography)
    h1: ({ children }) => (
      <h1 className="font-heading mt-24 mb-10 text-5xl leading-none font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-heading mt-20 mb-8 flex items-center gap-4 border-b border-slate-100 pb-6 text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
        <div className="h-10 w-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading mt-14 mb-6 text-2xl font-black tracking-tight text-slate-800 uppercase italic md:text-4xl">
        {children}
      </h3>
    ),

    // ระบบจัดการจุดเสี่ยง Hydration Error: Unwrapping Paragraph สำหรับเนื้อหาประเภท Block
    p: (props) => {
      const { children } = props
      if (
        React.isValidElement(children) &&
        (typeof children.type === "string" ||
          (children.props as { src?: string })?.src)
      ) {
        return <>{children}</>
      }
      return (
        <p
          className="font-body mb-8 text-xl leading-[1.9] font-bold text-slate-600"
          {...props}
        />
      )
    },

    ul: ({ children }) => <ul className="mb-10 ml-2 space-y-6">{children}</ul>,
    li: ({ children }) => (
      <li className="flex items-start gap-4">
        <div
          className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
          aria-hidden="true"
        />
        <span className="font-body text-xl font-bold text-slate-600">
          {children}
        </span>
      </li>
    ),
  }
}
