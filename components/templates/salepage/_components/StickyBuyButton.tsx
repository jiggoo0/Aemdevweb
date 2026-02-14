/**
 * [COMPONENT]: STICKY_BUY_BUTTON v17.9.100 (MOBILE_CONVERSION_DOCK)
 * [STRATEGY]: iOS Safe Area | Entrance Physics | Shimmer Effect
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface StickyBuyButtonProps {
  readonly href: string;
  readonly price?: number | string;
  readonly discount?: number; // จำนวนเงินที่ลด (เช่น ลด 500 บาท)
  readonly label?: string;
  readonly color?: string;
}

export const StickyBuyButton = memo(
  ({
    href,
    price,
    discount = 0,
    label = "จองสิทธิ์ทันที",
    color = "#ef4444",
  }: StickyBuyButtonProps) => {
    const [isVisible, setIsVisible] = useState(false);

    // [LOGIC]: หน่วงเวลาเล็กน้อยเพื่อให้ Animation ทำงานสวยงามหลังโหลดหน้า
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }, []);

    // [LOGIC]: คำนวณราคาเต็ม (Original Price)
    const originalPrice = typeof price === "number" && discount > 0 ? price + discount : null;

    return (
      <div
        className={cn(
          "cubic-bezier(0.16, 1, 0.3, 1) fixed bottom-0 left-0 z-[100] w-full px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] transition-transform duration-700 md:hidden",
          isVisible ? "translate-y-0" : "translate-y-[150%]",
        )}
      >
        {/* Glass Dock Container */}
        <div className="flex items-center justify-between gap-4 rounded-[2rem] border border-white/20 bg-white/80 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-black/60 dark:text-white">
          {/* [LEFT]: Price Display */}
          {price ? (
            <div className="flex flex-col pl-4">
              <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase dark:text-slate-400">
                Total
              </span>
              <div className="flex items-baseline gap-2">
                <span style={{ color }} className="text-xl leading-none font-black drop-shadow-sm">
                  ฿{typeof price === "number" ? price.toLocaleString() : price}
                </span>
                {originalPrice && (
                  <span className="text-[10px] text-slate-400 line-through decoration-slate-400/50 decoration-2">
                    ฿{originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col pl-4">
              <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                Special
              </span>
              <span className="text-sm font-bold opacity-90">โปรโมชั่นพิเศษ</span>
            </div>
          )}

          {/* [RIGHT]: Action Trigger (Shimmer Button) */}
          <Link
            href={href}
            style={{
              backgroundColor: color,
              boxShadow: `0 8px 20px -6px ${color}80`,
            }}
            className="group relative flex h-12 flex-grow items-center justify-center overflow-hidden rounded-[1.5rem] px-6 text-white transition-transform active:scale-95"
          >
            <div className="relative z-10 flex items-center gap-2 text-sm font-black tracking-wide uppercase">
              <ShoppingBag size={18} strokeWidth={2.5} className="mb-0.5" />
              {label}
            </div>

            {/* Shine Animation */}
            <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </Link>
        </div>
      </div>
    );
  },
);

StickyBuyButton.displayName = "StickyBuyButton";
