/** @format */

import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

// ชุดสัญลักษณ์มาตรฐานเพื่อประสิทธิภาพการใช้งานปี 2026 (Lucide Connectivity)
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Smartphone,
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
  Cpu,
} from "lucide-react"

// นำเข้าส่วนประกอบเชิงกลยุทธ์ (Strategic Components by นายเอ็มซ่ามากส์)
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { PerformanceAuthority } from "@/components/sales-engine/PerformanceAuthority"
import { WorkProcess } from "@/components/sales-engine/WorkProcess"

/**
 * useMDXComponents: ลงทะเบียนคอมโพเนนต์สำหรับเนื้อหาบทความ (MDX Architecture)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การเปลี่ยนเนื้อหาทั่วไปให้เป็นพิกัดนำเสนอธุรกิจที่มีประสิทธิภาพ
 * วางระบบและควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    // [GROUP 1] - Business Strategy Engines (พิกัดแสดงผลลัพธ์เชิงประจักษ์)
    ImpactStats,
    PerformanceAuthority,
    SpeedDemon: PerformanceAuthority, // [ALIAS FIXED]: ล้างพิกัด Error เพื่อให้ Build ผ่านฉลุย
    WorkProcess,

    // [GROUP 2] - UI Icons Registry (Strategic Visual Icons)
    Zap,
    ShieldCheck,
    Smartphone,
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
    Cpu,

    // [GROUP 3] - Typography and Specialist Visual Elements

    h1: ({ children }) => (
      <h1 className="font-heading mt-24 mb-10 text-5xl leading-[1.1] font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl lg:text-8xl">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="font-heading mt-20 mb-8 flex items-center gap-4 border-b border-slate-100 pb-6 text-3xl font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl">
        <span className="h-10 w-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="font-heading mt-14 mb-6 text-2xl font-black tracking-tight text-slate-800 uppercase italic md:text-4xl">
        {children}
      </h3>
    ),

    // จัดการพิกัดย่อหน้าเพื่อรองรับการแสดงผลรูปภาพที่ซ้อนภายใน (P-Tag Fix)
    p: (props) => {
      const { children } = props
      if (React.isValidElement(children)) {
        const childProps = children.props as Record<string, unknown>
        if (typeof children.type === "string" || childProps.src) {
          return <>{children}</>
        }
      }
      return (
        <p
          className="font-body mb-8 text-lg leading-[1.8] font-bold text-slate-600 md:text-xl"
          {...props}
        />
      )
    },

    // ส่วนแสดงผลภาพประกอบที่จูนความประณีตโดย นายเอ็มซ่ามากส์
    img: (props) => (
      <figure className="group relative my-16 block w-full overflow-hidden rounded-[3rem] border border-slate-100 bg-slate-50 shadow-2xl shadow-slate-200/40">
        <div className="relative block aspect-video w-full overflow-hidden">
          <Image
            src={props.src || "/images/blog/placeholder.webp"}
            alt={props.alt || "Strategic Visual - AEMDEVWEB"}
            fill
            className="object-cover transition-all duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
        {props.alt && (
          <figcaption className="font-heading block border-t border-slate-50 bg-white px-6 py-4 text-center text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
            Reference Authority — {props.alt}
          </figcaption>
        )}
      </figure>
    ),

    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#")
      const baseClass =
        "font-black transition-all text-emerald-600 hover:text-emerald-400 underline decoration-emerald-500/30 underline-offset-4 hover:decoration-emerald-500"
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

    blockquote: ({ children }) => (
      <div className="group relative my-16 overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/50 p-10 backdrop-blur-sm md:p-16">
        <div className="absolute -top-6 -right-6 opacity-10 transition-transform group-hover:rotate-12">
          <Zap className="h-32 w-32 text-emerald-500" />
        </div>
        <div className="font-body relative z-10 text-2xl leading-relaxed font-black text-slate-900 italic md:text-3xl">
          {children}
        </div>
      </div>
    ),

    // [CUSTOM COMPONENT]: ส่วนกระตุ้นการตัดสินใจเชิงกลยุทธ์ (CTA Protocol)
    CallToAction: ({
      title,
      url,
      label = "เริ่มต้นโครงการของคุณ",
    }: {
      title: string
      url: string
      label?: string
    }) => (
      <div className="relative my-20 overflow-hidden rounded-[4rem] bg-slate-950 p-12 text-center md:p-24">
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-10"
          aria-hidden="true"
        />
        <h3 className="font-heading relative z-10 mb-12 text-3xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl">
          {title}
        </h3>
        <Link
          href={url}
          className="relative z-10 inline-flex items-center justify-center gap-4 rounded-2xl bg-emerald-500 px-12 py-6 text-sm font-black tracking-[0.2em] text-slate-950 uppercase italic shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all hover:bg-white active:scale-95"
        >
          {label} <ArrowRight size={20} strokeWidth={3} />
        </Link>
      </div>
    ),

    // [CUSTOM COMPONENT]: รายการคุณสมบัติเนี้ยบกริบ (Feature List Node)
    FeatureList: ({ items }: { items: string[] }) => (
      <div className="my-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item: string, i: number) => (
          <div
            key={i}
            className="group flex items-center gap-5 rounded-[2rem] border border-slate-100 bg-white p-8 transition-all hover:border-emerald-500/30 hover:shadow-xl"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
              <CheckCircle2 size={20} strokeWidth={3} />
            </div>
            <span className="font-body text-lg font-bold text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    ),

    ul: ({ children }) => <ul className="mb-12 ml-4 space-y-6">{children}</ul>,
    li: ({ children }) => (
      <li className="flex items-start gap-5">
        <div className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
        <span className="font-body text-lg font-bold text-slate-600 md:text-xl">
          {children}
        </span>
      </li>
    ),
  }
}
