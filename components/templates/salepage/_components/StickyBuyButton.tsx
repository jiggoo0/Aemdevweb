/**
 * [COMPONENT]: STICKY_BUY_BUTTON v17.9.9 (STABILIZED)
 * [STRATEGY]: Conversion Anchor | Neural Physics FAB | Adaptive Pricing
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import { FloatingContainer } from "@/components/shared/FloatingContainer";
import { Button } from "@/components/ui/Button";
import IconRenderer from "@/components/ui/IconRenderer";

interface StickyBuyButtonProps {
  readonly href: string;
  readonly price?: number | string;
  readonly discount?: number;
  readonly label?: string;
}

/**
 * @component StickyBuyButton
 * @description ปุ่มลอยด้านล่างสำหรับ Mobile ที่ช่วยตรึงความสนใจในการสั่งซื้อตลอดเวลา
 */
const StickyBuyButton = ({ href, price, discount, label = "Buy_Now" }: StickyBuyButtonProps) => {
  return (
    <FloatingContainer className="bottom-0 left-0 z-[60] w-full p-4 md:hidden">
      <div className="shadow-pro-xl flex items-center justify-between gap-4 rounded-3xl border border-rose-100 bg-white/80 p-4 backdrop-blur-2xl">
        {/* [PRICE_DISPLAY]: แสดงราคาเฉพาะเมื่อมีการส่งค่ามาเท่านั้น */}
        {price && (
          <div className="flex flex-col pl-2">
            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
              Investment
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-rose-600">
                ฿{typeof price === "number" ? price.toLocaleString() : price}
              </span>
              {discount && (
                <span className="text-xs text-slate-300 line-through">
                  ฿{((typeof price === "number" ? price : 0) + discount).toLocaleString()}
                </span>
              )}
            </div>
          </div>
        )}

        {/* [ACTION_TRIGGER]: ปุ่มสั่งซื้อแบบ Neural Gradient */}
        <Button
          asChild
          className="h-12 flex-grow rounded-2xl bg-rose-600 font-black tracking-widest text-white uppercase shadow-lg shadow-rose-200 transition-all active:scale-95"
        >
          <a href={href}>
            <IconRenderer name="ShoppingBag" size={18} className="mr-2" />
            {label}
          </a>
        </Button>
      </div>
    </FloatingContainer>
  );
};

export default memo(StickyBuyButton);
