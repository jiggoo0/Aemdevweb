/** @format */

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/shared/IconRenderer";
// [PATCHED]: นำเข้าพิกัดคอนฟิกเพื่อแก้ไข ReferenceError: siteConfig is not defined
import { siteConfig } from "@/constants/site-config";

interface AuditMetric {
  label: string;
  value: string | number;
  status: "PASSED" | "WARNING" | "CRITICAL";
  description: string;
}

const MOCK_AUDIT_DATA: AuditMetric[] = [
  {
    label: "Security (Secrets)",
    value: "0 Found",
    status: "PASSED",
    description: "ตรวจสอบพิกัดรหัสผ่านและคีย์ลับในซอร์สโค้ด",
  },
  {
    label: "Type Integrity",
    value: "99.2%",
    status: "WARNING",
    description: "พบการใช้พิกัด 'any' หลงเหลือในระบบ 1 จุด",
  },
  {
    label: "Core Web Vitals",
    value: "100/100",
    status: "PASSED",
    description: "สมรรถนะการโหลดและเสถียรภาพการแสดงผล",
  },
  {
    label: "LCP Performance",
    value: "0.72s",
    status: "PASSED",
    description: "ความเร็วในการแสดงผลเนื้อหาหลัก (Target < 0.8s)",
  },
];

export default function AuditReport() {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-[oklch(0.9_0.02_260)] bg-white shadow-2xl dark:border-[oklch(0.2_0.02_260)] dark:bg-[oklch(0.15_0.02_260)]">
      {/* [HEADER]: Audit Metadata */}
      <div className="bg-[oklch(0.2_0.02_260)] p-8 text-white dark:bg-[oklch(0.1_0.02_260)]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.65_0.2_160_/_0.2)] px-4 py-1 text-[10px] font-black tracking-widest text-[oklch(0.65_0.2_160)] uppercase italic">
              Ultra-Deep Scan: Level 7
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tighter uppercase italic md:text-4xl">
              Project{" "}
              <span className="text-[oklch(0.65_0.2_160)]">Health.</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black tracking-widest text-[oklch(0.5_0.02_260)] uppercase">
              Scan Timestamp
            </p>
            <p className="font-mono text-sm font-bold text-[oklch(0.8_0.02_260)]">
              2026-01-30 22:53:49
            </p>
          </div>
        </div>
      </div>

      {/* [BODY]: Metric Grid */}
      <div className="grid gap-px bg-[oklch(0.9_0.02_260)] md:grid-cols-2 dark:bg-[oklch(0.2_0.02_260)]">
        {MOCK_AUDIT_DATA.map((metric, index) => (
          <div
            key={index}
            className="group bg-white p-8 transition-colors hover:bg-[oklch(0.98_0.01_260)] dark:bg-[oklch(0.15_0.02_260)] dark:hover:bg-[oklch(0.18_0.02_260)]"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.02_260)] uppercase">
                  {metric.label}
                </p>
                <p className="text-2xl font-black tracking-tighter text-[oklch(0.2_0.02_260)] italic dark:text-white">
                  {metric.value}
                </p>
              </div>
              <div
                className={cn(
                  "rounded-full px-3 py-1 text-[9px] font-black tracking-widest uppercase italic shadow-sm",
                  metric.status === "PASSED" &&
                    "bg-[oklch(0.96_0.04_160)] text-[oklch(0.4_0.15_160)]",
                  metric.status === "WARNING" &&
                    "bg-[oklch(0.95_0.05_50)] text-[oklch(0.4_0.1_50)]",
                  metric.status === "CRITICAL" &&
                    "bg-[oklch(0.95_0.05_20)] text-[oklch(0.4_0.15_20)]",
                )}
              >
                {metric.status}
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed font-bold text-[oklch(0.45_0.02_260)]">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      {/* [FOOTER]: Execution Authority */}
      <div className="flex flex-col items-center justify-between gap-6 border-t border-[oklch(0.9_0.02_260)] bg-[oklch(0.99_0.005_260)] p-8 md:flex-row dark:border-[oklch(0.2_0.02_260)] dark:bg-[oklch(0.14_0.01_260)]">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[oklch(0.2_0.02_260)] text-[oklch(0.65_0.2_160)] dark:bg-[oklch(0.95_0.01_260)]">
            <IconRenderer name="ShieldCheck" size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black tracking-widest text-[oklch(0.5_0.02_260)] uppercase">
              Verified Auditor
            </p>
            <p className="text-sm font-bold text-[oklch(0.2_0.02_260)] dark:text-white">
              {siteConfig.expert.name}
            </p>
          </div>
        </div>
        <button className="btn-za bg-[oklch(0.2_0.02_260)] text-white hover:shadow-xl">
          เริ่มตรวจสอบระบบของคุณ
        </button>
      </div>
    </div>
  );
}
