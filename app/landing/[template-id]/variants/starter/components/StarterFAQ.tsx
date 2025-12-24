/** @format */
"use client"

import React, { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { MultiLangText } from "@/app/landing/[template-id]/types"

export interface FAQItem {
  question: string | MultiLangText
  answer: string | MultiLangText
}

export interface StarterFAQProps {
  items: FAQItem[]
  primaryColor?: string
  t: (content: string | MultiLangText | undefined) => string
}

export default function StarterFAQ({
  items = [],
  primaryColor = "#000000",
  t,
}: StarterFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="flex flex-col gap-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx

          return (
            <div
              key={idx}
              className={`group border-4 border-slate-900 bg-white transition-all ${
                isOpen
                  ? "translate-x-[-2px] translate-y-[-2px] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
                  : "hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
              }`}
            >
              {/* 🏗️ Question Toggle */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 border-slate-900 transition-colors ${
                      isOpen
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-900"
                    }`}
                    style={
                      isOpen
                        ? { backgroundColor: primaryColor, color: "#fff" }
                        : {}
                    }
                  >
                    <HelpCircle size={20} />
                  </div>
                  <span className="text-lg font-black uppercase italic tracking-tighter text-slate-900 md:text-xl">
                    {t(item.question)}
                  </span>
                </div>

                <div
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  <ChevronDown size={24} strokeWidth={3} />
                </div>
              </button>

              {/* 🏗️ Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-[500px] border-t-4 border-slate-900"
                    : "max-h-0"
                }`}
              >
                <div className="bg-slate-50 p-8">
                  <p className="text-base font-bold leading-relaxed text-slate-600 md:text-lg">
                    {t(item.answer)}
                  </p>

                  {/* Decorative Blueprint Line */}
                  <div
                    className="mt-6 h-1.5 w-12"
                    style={{ backgroundColor: primaryColor }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
