/** @format */
import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 1. 🖼️ Custom Image (Fixed: HTML Validation & Luminous Style)
    // เปลี่ยนจาก div เป็น span เพื่อป้องกัน Error: <div> cannot be a descendant of <p>
    img: (props) => (
      <span className="shadow-luminous group relative my-12 block w-full overflow-hidden rounded-[2rem] border border-white/10">
        <span className="relative block aspect-video w-full overflow-hidden">
          <Image
            src={props.src || ""}
            alt={props.alt || "Blog Image"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </span>
        {props.alt && (
          <span className="font-prompt block border-t border-white/5 bg-slate-950/90 p-4 text-center text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
            {props.alt}
          </span>
        )}
      </span>
    ),

    // 2. 🔗 Custom Link: Luminous Cyan Style
    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/") || href?.startsWith("#")
      const baseClass =
        "font-bold transition-all decoration-aurora-cyan/30 underline-offset-4 hover:decoration-aurora-cyan underline text-aurora-cyan hover:text-white"

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
          {children} <span className="text-[10px] opacity-50">↗</span>
        </a>
      )
    },

    // 3. 📣 Callout / Quote Box: Aurora Emerald Glow
    blockquote: ({ children }) => (
      <div className="border-aurora-emerald bg-aurora-emerald/5 shadow-luminous group relative my-10 rounded-r-[2rem] border-l-4 p-8 text-slate-300 italic">
        <div className="absolute top-4 right-6 opacity-10 transition-opacity group-hover:opacity-20">
          <Sparkles className="text-aurora-emerald h-10 w-10" />
        </div>
        {children}
      </div>
    ),

    // 4. 📢 CTA Box: The Conversion Engine
    CallToAction: ({
      title,
      url,
      label = "เริ่มโปรเจกต์ของคุณ",
    }: {
      title: string
      url: string
      label?: string
    }) => (
      <div className="shadow-luminous group relative my-12 overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.02] p-10 text-center md:p-14">
        <div className="aurora-bg inset-0 opacity-5 transition-opacity group-hover:opacity-10" />
        <h3 className="font-prompt relative z-10 mb-8 text-2xl font-black tracking-tighter text-white uppercase italic md:text-3xl">
          {title}
        </h3>
        <Link
          href={url}
          className="btn-luminous shadow-aurora-glow relative z-10 inline-flex items-center justify-center px-10 py-5 text-sm"
        >
          {label}{" "}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    ),

    // 5. Headings: High-End Typography
    h1: ({ children }) => (
      <h1 className="font-prompt mt-16 mb-8 text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-prompt mt-14 mb-6 flex items-center gap-3 border-b border-white/5 pb-4 text-3xl font-black tracking-tighter text-white uppercase italic md:text-4xl">
        <div className="bg-aurora-cyan h-8 w-1.5 rounded-full" /> {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-prompt mt-10 mb-4 text-2xl font-black tracking-tight text-slate-100 uppercase md:text-3xl">
        {children}
      </h3>
    ),

    // 6. Lists & Paragraphs
    p: ({ children }) => (
      <p className="font-anuphan mb-6 text-lg leading-relaxed font-medium text-slate-400">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mb-8 ml-2 list-none space-y-4 text-slate-400">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="flex items-start gap-3">
        <div className="bg-aurora-cyan mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_8px_rgba(122,243,255,0.8)]" />
        <span className="font-anuphan text-lg font-medium">{children}</span>
      </li>
    ),

    ...components,
  }
}
