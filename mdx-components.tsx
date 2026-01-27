/** @format */

import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

// รายการชุดไอคอนมาตรฐานสำหรับงานระบบ (Work System Icons)
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

/**
 * useMDXComponents: พิกัดการลงทะเบียนคอมโพเนนต์สำหรับเนื้อหา MDX
 * ยุทธศาสตร์: แยกดีไซน์หน้างานออกจากโทนการนำเสนอ เพื่อความสะอาดตาและเป็นมืออาชีพ
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // 1. ลงทะเบียนพิกัดคอมโพเนนต์จัดการธุรกิจ (Sales Engine & UI Icons)
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

    // 2. ระบบจัดการรูปภาพ: เน้นสัดส่วนที่ชัดเจนและการแสดงผลที่รวดเร็ว (LCP Optimized)
    img: (props) => (
      <figure className="group relative my-16 block w-full overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 shadow-2xl shadow-slate-200/50">
        <div className="relative block aspect-video w-full overflow-hidden">
          <Image
            src={props.src || "/images/blog/placeholder.webp"}
            alt={props.alt || "รูปภาพประกอบเนื้อหา"}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={false}
          />
        </div>
        {props.alt && (
          <figcaption className="font-body block border-t border-slate-50 bg-white px-6 py-4 text-center text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
            {props.alt}
          </figcaption>
        )}
      </figure>
    ),

    // 3. ระบบจัดการพิกัดลิงก์ (Internal & External Linking)
    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#")
      const baseClass =
        "font-bold transition-all text-emerald-600 hover:text-emerald-500 underline decoration-emerald-500/20 underline-offset-4 hover:decoration-emerald-500"

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

    // 4. ส่วนเน้นข้อความสำคัญ (Insightful Callout)
    blockquote: ({ children }) => (
      <div className="group relative my-12 overflow-hidden rounded-r-[2rem] border-l-4 border-emerald-500 bg-emerald-50/30 p-8 text-slate-600 md:p-12">
        <div
          className="pointer-events-none absolute -top-4 -right-4 opacity-5"
          aria-hidden="true"
        >
          <Zap className="h-24 w-24 text-emerald-500" />
        </div>
        <div className="font-body relative z-10 text-xl leading-relaxed font-bold text-slate-700 italic md:text-2xl">
          {children}
        </div>
      </div>
    ),

    // 5. คอมโพเนนต์ปิดการขาย (Call to Action / Feature List)
    CallToAction: ({
      title,
      url,
      label = "เริ่มวางแผนโครงการ",
    }: {
      title: string
      url: string
      label?: string
    }) => (
      <div className="relative my-20 overflow-hidden rounded-[3.5rem] border border-slate-100 bg-slate-50/50 p-12 text-center shadow-xl md:p-20">
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-20"
          aria-hidden="true"
        />
        <h3 className="font-prompt relative z-10 mb-10 text-3xl leading-none font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
          {title}
        </h3>
        <Link
          href={url}
          className="relative z-10 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-12 py-6 text-[11px] font-black tracking-[0.3em] text-white uppercase italic transition-all hover:bg-emerald-600 hover:shadow-2xl active:scale-95"
        >
          {label} <ArrowRight className="ml-3 h-4 w-4" />
        </Link>
      </div>
    ),

    FeatureList: ({ items }: { items: string[] }) => (
      <div className="my-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-[1.5rem] border border-slate-50 bg-white p-6 shadow-sm transition-all hover:border-emerald-500/20 hover:shadow-md"
          >
            <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
            <span className="font-body text-lg font-bold text-slate-600">
              {item}
            </span>
          </div>
        ))}
      </div>
    ),

    // 6. ระบบหัวข้อและเนื้อหา (Typography Scale)
    h1: ({ children }) => (
      <h1 className="font-prompt mt-24 mb-10 text-5xl leading-none font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-prompt mt-20 mb-8 flex items-center gap-4 border-b border-slate-50 pb-6 text-3xl font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl">
        <span className="h-10 w-2 rounded-full bg-emerald-500" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-prompt mt-14 mb-6 text-2xl font-black tracking-tight text-slate-800 uppercase italic md:text-4xl">
        {children}
      </h3>
    ),

    // พิกัดจัดการ Hydration: ป้องกันการเรนเดอร์ Paragraph ซ้อนกัน
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
          className="font-body mb-8 text-xl leading-[1.9] font-medium text-slate-600"
          {...props}
        />
      )
    },

    ul: ({ children }) => <ul className="mb-12 ml-2 space-y-6">{children}</ul>,
    li: ({ children }) => (
      <li className="flex items-start gap-4">
        <div className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
        <span className="font-body text-xl font-medium text-slate-600">
          {children}
        </span>
      </li>
    ),
  }
}
