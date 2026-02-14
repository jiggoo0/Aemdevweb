/**
 * [COMPONENT]: FOOTER_INFRASTRUCTURE v17.9.120 (ARCHITECT_EDITION)
 * [STRATEGY]: Semantic Layout | SEO Link Flow | Brand Anchor
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import { FOOTER_MAP } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

// [CONSTANTS]: แยก Class เพื่อความสะอาดและ Maintain ง่าย
const LINK_STYLE = cn(
  "text-text-secondary hover:text-brand-primary text-sm transition-all duration-300",
  "hover:translate-x-1 inline-block", // [MICRO-INTERACTION]: ขยับเล็กน้อยเมื่อ Hover
);

const HEADER_STYLE = "text-text-primary mb-6 text-sm font-black tracking-[0.15em] uppercase";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-main relative overflow-hidden border-t border-white/10 pt-24 pb-12">
      {/* --- 01. VISUAL LAYER: Grid Pattern Extension --- */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] select-none"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        aria-hidden="true"
      />

      {/* Visual Anchor Gradient */}
      <div
        className="via-brand-primary/50 absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent blur-[1px]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-8">
          {/* --- 02. BRAND AUTHORITY NODE (Column 1-4) --- */}
          <div className="flex flex-col gap-6 pr-8 md:col-span-4 lg:col-span-5">
            <Link href="/" className="group flex w-fit items-center gap-2">
              <div className="bg-brand-primary shadow-glow flex h-8 w-8 items-center justify-center rounded-lg text-xs font-black text-white">
                AEM
              </div>
              <span className="text-text-primary text-2xl font-black tracking-tighter transition-opacity group-hover:opacity-80">
                DEVWEB
              </span>
            </Link>

            <p className="text-text-secondary max-w-sm text-sm leading-relaxed">
              {SITE_CONFIG.description ||
                "Engineering High-Performance Digital Infrastructure. เราไม่ได้สร้างแค่เว็บไซต์ แต่เราวางระบบรากฐานที่แข็งแกร่งสำหรับธุรกิจยุคใหม่"}
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] font-bold tracking-widest text-emerald-500 uppercase">
                Systems Operational
              </span>
            </div>
          </div>

          {/* --- 03. NAVIGATION MATRIX (Column 5-12) --- */}
          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3 lg:col-span-7">
            {/* Services Node */}
            <nav aria-label="Services Directory">
              <h3 className={HEADER_STYLE}>บริการ</h3>
              <ul className="space-y-3">
                {FOOTER_MAP.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={LINK_STYLE}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Company Node */}
            <nav aria-label="Company Information">
              <h3 className={HEADER_STYLE}>เกี่ยวกับเรา</h3>
              <ul className="space-y-3">
                {FOOTER_MAP.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={LINK_STYLE}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Connect Node */}
            <nav aria-label="Connect Channels">
              <h3 className={HEADER_STYLE}>ติดต่อทีมงาน</h3>
              <ul className="space-y-3">
                {FOOTER_MAP.connect.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={LINK_STYLE}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* --- 04. LEGAL BASELINE --- */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-text-muted text-[11px] font-medium tracking-wide">
            © {currentYear} {SITE_CONFIG.brandName} Corp. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {FOOTER_MAP.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-muted hover:text-text-primary text-[11px] font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
