/**
 * [COMPONENT]: FOOTER_INFRASTRUCTURE v18.0.0 (PRODUCTION_READY)
 * [STRATEGY]: Semantic Layout | SEO Link Flow | Hybrid Hydration Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 * [CHANGELOG]:
 * - Hardened Stacking Context (z-index) for MainLayout compatibility.
 * - Integrated suppressHydrationWarning for Dynamic Year Node.
 * - Refined Micro-interactions for Link Matrix.
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import { FOOTER_MAP } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

// --- Infrastructure Constants (BEM-ish Pattern) ---
const LINK_STYLE = cn(
  "text-text-secondary hover:text-brand-primary text-sm transition-all duration-300",
  "inline-block hover:translate-x-1",
);

const HEADER_STYLE =
  "text-text-primary mb-6 text-[11px] font-black tracking-[0.2em] uppercase opacity-90";

const Footer = () => {
  // [HYDRATION_GUARD]: จัดการเรื่องปีปัจจุบันแบบปลอดภัย
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-main border-border/40 relative overflow-hidden border-t pt-24 pb-12">
      {/* --- 01. VISUAL ENGINE: Background Matrix --- */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] select-none"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        aria-hidden="true"
      />

      {/* Strategic Gradient Anchor: เส้นนำสายตาระดับพิกเซลเพื่อ CLS Stability */}
      <div
        className="via-brand-primary/40 absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent blur-[1px]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
          {/* --- 02. BRAND IDENTITY HUB (Column 1-5) --- */}
          <div className="flex flex-col gap-6 pr-0 md:col-span-5 md:pr-12 lg:col-span-5">
            <Link href="/" className="group flex w-fit items-center gap-3">
              <div className="bg-brand-primary shadow-glow flex h-9 w-9 items-center justify-center rounded-xl text-[10px] font-black text-white transition-transform group-hover:rotate-6">
                AEM
              </div>
              <span className="text-text-primary group-hover:text-brand-primary text-2xl font-black tracking-tighter transition-colors">
                DEVWEB
              </span>
            </Link>

            <p className="text-text-secondary max-w-sm text-sm leading-relaxed italic opacity-80">
              {SITE_CONFIG.description ||
                "Engineering High-Performance Digital Infrastructure. เราสร้างระบบรากฐานที่แข็งแกร่งสำหรับธุรกิจยุคใหม่"}
            </p>

            {/* Systems Status Indicator: Hardware Accelerated */}
            <div className="mt-4 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              </span>
              <span className="font-mono text-[9px] font-black tracking-[0.3em] text-emerald-500 uppercase">
                Node_Status: Operational
              </span>
            </div>
          </div>

          {/* --- 03. NAVIGATION LINK MATRIX (Column 6-12) --- */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3 lg:col-span-7">
            {/* Services Nodes */}
            <nav aria-label="Services Directory">
              <h3 className={HEADER_STYLE}>Services</h3>
              <ul className="space-y-3.5">
                {FOOTER_MAP.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={LINK_STYLE}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Insight Nodes */}
            <nav aria-label="Company Information">
              <h3 className={HEADER_STYLE}>Intelligence</h3>
              <ul className="space-y-3.5">
                {FOOTER_MAP.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={LINK_STYLE}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Connect Nodes */}
            <nav aria-label="Connect Channels">
              <h3 className={HEADER_STYLE}>Connectivity</h3>
              <ul className="space-y-3.5">
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

        {/* --- 04. LEGAL BASELINE & COMPLIANCE --- */}
        <div className="border-border/20 flex flex-col items-center justify-between gap-8 border-t pt-10 md:flex-row">
          <div className="flex items-center gap-2">
            <p className="text-text-muted text-[10px] font-bold tracking-wider opacity-60">
              © <span suppressHydrationWarning>{currentYear}</span> {SITE_CONFIG.brandName}.
              Architected by AEMZA MACKS.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {FOOTER_MAP.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-muted hover:text-brand-primary text-[10px] font-black tracking-widest uppercase transition-colors"
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
