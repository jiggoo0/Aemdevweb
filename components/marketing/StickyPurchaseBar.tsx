/** @format */
"use client"

import React from "react"
import { ArrowRight, Zap } from "lucide-react"

interface StickyPurchaseBarProps {
  templateName: string
  price: string
  promoPrice: string
}

export const StickyPurchaseBar = ({
  templateName,
  price,
  promoPrice,
}: StickyPurchaseBarProps) => {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-[100] p-4 duration-500 animate-in fade-in slide-in-from-bottom-10">
      <div className="container mx-auto max-w-5xl">
        <div className="pointer-events-auto flex items-center justify-between border-[4px] border-slate-900 bg-white p-4 shadow-[8px_8px_0px_0px_#000] md:p-5">
          {/* Info Section */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange"></span>
              </span>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Active_Promotion
              </p>
            </div>
            <h4 className="font-heading text-lg font-black uppercase italic text-slate-900">
              {templateName}
            </h4>
          </div>

          {/* Action Section */}
          <div className="flex w-full items-center justify-between gap-6 sm:w-auto sm:justify-end">
            <div className="text-right">
              <span className="font-mono text-[10px] font-bold text-slate-400 line-through">
                THB {price}
              </span>
              <p className="font-heading text-2xl font-black leading-none text-brand-blue">
                {promoPrice}
              </p>
            </div>

            <button className="group flex items-center gap-3 bg-slate-900 px-6 py-4 text-xs font-black uppercase italic text-white transition-all hover:bg-brand-orange hover:shadow-[-4px_-4px_0px_0px_rgba(37,99,235,1)] active:translate-x-1 active:translate-y-1">
              <Zap size={16} className="fill-current" />
              Get_Started
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
