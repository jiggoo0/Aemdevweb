/**
 * [COMPONENT]: THAI_TRUST_BADGE v17.9.103 (STABILIZED)
 * [STRATEGY]: Adaptive Theme Architecture | Conversion Psychology | Syntax Hardened
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface ThaiTrustBadgeProps {
  readonly clientTrust?: string;
  readonly isDark?: boolean;
  readonly accentColor?: string;
}

// Interface สำหรับ Sub-component เพื่อความชัดเจนของ Type
interface TrustItemProps {
  icon: string;
  title: string;
  description: string;
  isDark: boolean;
  accentColor: string;
}

export function ThaiTrustBadge({
  clientTrust,
  isDark = false,
  accentColor = "#e11d48",
}: ThaiTrustBadgeProps) {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-4">
      {/* 01. SECTION HEADER: Authority & Trust Signaling */}
      <div className="mb-12 text-center">
        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-black tracking-widest uppercase"
          style={{
            backgroundColor: `${accentColor}15`,
            color: accentColor,
            borderColor: `${accentColor}30`,
          }}
        >
          <IconRenderer name="ShieldCheck" size={14} strokeWidth={2.5} />
          <span>Verified Business Merchant</span>
        </div>

        <h2
          className={cn(
            "text-3xl font-black tracking-tight uppercase italic transition-colors sm:text-4xl lg:text-5xl",
            isDark ? "text-white drop-shadow-xl" : "text-slate-900",
          )}
        >
          มั่นใจในคุณภาพ <span className="text-brand-primary not-italic">&</span> ความปลอดภัย
        </h2>

        <div className="mt-6 flex justify-center">
          <div
            className="h-1.5 w-24 rounded-full shadow-sm"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      </div>

      {/* 02. TRUST GRID: Core Reliability Nodes */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <TrustItem
          icon="FileText"
          title="จดทะเบียนถูกต้อง"
          description="ดำเนินงานโปร่งใส ตรวจสอบสถานะบริษัทได้จริงตามกฎหมายพาณิชย์"
          isDark={isDark}
          accentColor={accentColor}
        />
        <TrustItem
          icon="Lock"
          title="ชำระเงินปลอดภัย"
          description="เข้ารหัสข้อมูลขั้นสูง 256-bit SSL มั่นใจได้ทุกธุรกรรมการเงิน"
          isDark={isDark}
          accentColor={accentColor}
        />
        <TrustItem
          icon="Truck"
          title="จัดส่งรวดเร็ว"
          description="จัดส่งผ่าน Kerry / Flash สินค้าถึงมือใน 1-3 วัน พร้อมเลข Tracking"
          isDark={isDark}
          accentColor={accentColor}
        />
        <TrustItem
          icon="Award"
          title="การันตีความพอใจ"
          description={
            clientTrust || "คัดสรรสินค้าเกรดพรีเมียม พร้อมทีมงานดูแลหลังการขายตลอด 24 ชม."
          }
          isDark={isDark}
          accentColor={accentColor}
        />
      </div>

      {/* 03. INFRASTRUCTURE SIGNALS: Tech & Payment Verification */}
      <div
        className="mt-16 border-y py-8 transition-colors"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)" }}
      >
        <div className="flex flex-col items-center justify-between gap-8 opacity-60 transition-all duration-500 hover:opacity-100 md:flex-row">
          <div className="flex items-center gap-5">
            <span
              className={cn(
                "text-[10px] font-black tracking-[0.2em] uppercase",
                isDark ? "text-slate-400" : "text-slate-500",
              )}
            >
              Secure Checkout:
            </span>
            <div className="flex gap-3 grayscale transition-all duration-500 hover:grayscale-0">
              <PaymentIcon icon="CreditCard" isDark={isDark} />
              <PaymentIcon icon="Landmark" isDark={isDark} />
              <PaymentIcon icon="Wallet" isDark={isDark} />
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-black/5 px-4 py-2 dark:bg-white/5">
            <IconRenderer
              name="Lock"
              size={14}
              className={isDark ? "text-brand-primary" : "text-slate-500"}
            />
            <span
              className={cn(
                "text-[10px] font-bold tracking-tight",
                isDark ? "text-slate-300" : "text-slate-600",
              )}
            >
              Industry-Standard SSL Encryption
            </span>
          </div>
        </div>
      </div>

      {/* 04. PDPA COMPLIANCE: Legal Safety Net */}
      <div
        className={cn(
          "mt-10 rounded-[1.5rem] border p-5 text-center shadow-sm backdrop-blur-md",
          isDark ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50",
        )}
      >
        <p
          className={cn(
            "text-xs leading-relaxed font-medium",
            isDark ? "text-slate-400" : "text-slate-500",
          )}
        >
          <strong
            className={cn("mr-1 font-black uppercase", isDark ? "text-white" : "text-slate-900")}
          >
            Privacy Policy:
          </strong>
          เราให้ความสำคัญกับข้อมูลส่วนบุคคลของคุณสูงสุด ข้อมูลทั้งหมดจะถูกจัดการภายใต้มาตรฐาน PDPA
        </p>
      </div>
    </div>
  );
}

// --- Internal Sub-Components ---

function TrustItem({ icon, title, description, isDark, accentColor }: TrustItemProps) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center rounded-[2.5rem] border p-8 text-center transition-all duration-500",
        isDark
          ? "hover:shadow-glow border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10"
          : "hover:shadow-pro-xl border-slate-100 bg-white hover:border-slate-200",
      )}
    >
      <div
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.5rem] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
        style={{
          backgroundColor: isDark ? `${accentColor}20` : `${accentColor}10`,
          color: accentColor,
        }}
      >
        <IconRenderer name={icon as IconName} size={32} strokeWidth={2} />
      </div>

      <h4
        className={cn(
          "mb-3 text-xl font-black tracking-tight",
          isDark ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h4>

      <p
        className={cn(
          "font-thai text-sm leading-relaxed",
          isDark ? "text-slate-400" : "text-slate-500",
        )}
      >
        {description}
      </p>
    </div>
  );
}

function PaymentIcon({ icon, isDark }: { icon: string; isDark: boolean }) {
  return (
    <div
      className={cn(
        "flex h-9 w-14 items-center justify-center rounded-lg border transition-all",
        isDark
          ? "border-white/10 bg-white/5 text-white"
          : "border-slate-200 bg-white text-slate-400",
      )}
    >
      <IconRenderer name={icon as IconName} size={18} />
    </div>
  );
}
