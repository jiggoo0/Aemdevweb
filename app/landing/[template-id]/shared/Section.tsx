/** @format */
import React from "react"

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  config?: {
    primaryColor?: string
  }
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  config,
}: SectionProps) {
  return (
    <section id={id} className={`px-6 py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          {/* Industrial Sharp Style: ขีดข้างหัวข้อสื่อถึงความมั่นคง */}
          <div
            className="mb-4 h-2 w-20"
            style={{ backgroundColor: config?.primaryColor || "#000" }}
          />
          <h2 className="text-3xl font-black uppercase tracking-tighter md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg font-medium text-slate-500">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
