/**
 * [LAYOUT COMPONENT]: SYSTEM_FOOTER v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Explicit Class Normalization | Typed Routes Resolution | EEAT Signals
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";
import type { Route } from "next";

import React, { memo } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import { FOOTER_MAP } from "@/constants/navigation";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";

const Footer = () => {
  // [DETERMINISTIC]: ล็อกปี 2026 เพื่อป้องกัน Server/Client Mismatch
  const currentYear = 2026;

  return (
    <footer className="border-border bg-surface-main relative overflow-hidden border-t pt-24 pb-12 transition-colors duration-700">
      {/* --- 01. INFRASTRUCTURE LAYER --- */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]" aria-hidden="true">
        <div className="bg-infrastructure-grid absolute inset-0" />
      </div>

      <div
        className="ambient-aura pointer-events-none absolute -bottom-48 -left-48 h-[600px] w-[600px] opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mb-24 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Node 01: Brand Identity */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Link href="/" className="group inline-flex items-center gap-4 outline-none">
                <div className="bg-text-primary flex h-14 w-14 items-center justify-center rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg]">
                  <IconRenderer name="Cpu" size={28} className="text-surface-main" />
                </div>
                <div className="flex flex-col">
                  <span className="text-text-primary text-2xl leading-none font-black tracking-tighter uppercase italic">
                    {SITE_CONFIG.brandName}
                  </span>
                  <span className="text-brand-primary mt-1 font-mono text-[9px] font-black tracking-[0.4em] uppercase">
                    Specialist_Infrastructure
                  </span>
                </div>
              </Link>
              <p className="text-text-secondary max-w-[280px] text-sm leading-relaxed font-medium italic opacity-80">
                “{SITE_CONFIG.description}”
              </p>
            </div>

            <div className="flex items-center gap-3">
              {[
                { name: "Facebook", href: SITE_CONFIG.links.facebook, icon: "Facebook" },
                { name: "Line OA", href: SITE_CONFIG.links.line, icon: "MessageCircle" },
                { name: "Github", href: SITE_CONFIG.links.github, icon: "Github" },
              ].map((social) => (
                /* [FIXED]: ใช้แท็ก <a> แทน <Link> สำหรับ External Links เพื่อแก้ TS2322 */
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-surface-card text-text-secondary hover:border-brand-primary hover:text-brand-primary hover:shadow-glow flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300"
                  aria-label={social.name}
                >
                  <IconRenderer name={social.icon as IconName} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Node 02: Strategic Solutions */}
          <div className="space-y-10">
            <h3 className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
              Strategic_Solutions
            </h3>
            <ul className="space-y-4">
              {FOOTER_MAP.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href as Route} /* [FIXED]: Type casting เพื่อรองรับ Typed Routes */
                    className="group text-text-secondary hover:text-brand-primary flex items-center gap-3 text-sm font-bold transition-all duration-300"
                  >
                    <span className="bg-brand-primary h-1 w-1 rounded-full opacity-0 transition-all group-hover:scale-150 group-hover:opacity-100" />
                    <span className="transition-transform group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Node 03: Corporate Nexus */}
          <div className="space-y-10">
            <h3 className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
              Corporate_Nexus
            </h3>
            <ul className="space-y-4">
              {[...FOOTER_MAP.company, ...FOOTER_MAP.connect].map((item) => (
                <li key={item.label}>
                  <Link
                    href={
                      item.href as Route
                    } /* [FIXED]: Type casting สำหรับ Dynamic internal links */
                    className="group text-text-secondary hover:text-brand-primary flex items-center gap-3 text-sm font-bold transition-all duration-300"
                  >
                    <span className="bg-brand-primary h-1 w-1 rounded-full opacity-0 transition-all group-hover:scale-150 group-hover:opacity-100" />
                    <span className="transition-transform group-hover:translate-x-1">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Node 04: Coordination Center */}
          <div className="space-y-10">
            <h3 className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
              Coordination_Center
            </h3>
            <div className="space-y-7">
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="group block">
                <div className="flex items-start gap-4">
                  <div className="border-border bg-surface-card text-brand-primary group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-500">
                    <IconRenderer name="Mail" size={18} />
                  </div>
                  <div>
                    <p className="text-text-muted font-mono text-[9px] font-black tracking-widest uppercase opacity-60">
                      Primary_Email
                    </p>
                    <p className="text-text-primary group-hover:text-brand-primary font-bold transition-colors">
                      {SITE_CONFIG.contact.email}
                    </p>
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="border-border bg-surface-card text-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
                  <IconRenderer name="MapPin" size={18} />
                </div>
                <div>
                  <p className="text-text-muted font-mono text-[9px] font-black tracking-widest uppercase opacity-60">
                    Base_Deployment
                  </p>
                  <address className="text-text-secondary text-xs leading-relaxed font-medium not-italic">
                    {SITE_CONFIG.contact.address} <br />
                    {SITE_CONFIG.contact.postalCode}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 02. SYSTEM STATUS --- */}
        <div className="border-border flex flex-col items-center justify-between gap-10 border-t pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:items-start lg:flex-row lg:gap-16">
            <div className="text-center md:text-left">
              <div className="mb-2 flex items-center justify-center gap-3 md:justify-start">
                <div className="relative h-2 w-2">
                  <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-40" />
                  <div className="relative h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                </div>

                <p className="text-text-muted font-mono text-[9px] tracking-widest uppercase">
                  System_Status:{" "}
                  <span suppressHydrationWarning className="font-black text-emerald-500">
                    Online
                  </span>{" "}
                  // v{SITE_CONFIG.project.version}
                </p>
              </div>
              <p className="text-text-secondary text-[10px] font-bold tracking-widest uppercase opacity-60">
                &copy; {currentYear} {SITE_CONFIG.brandName}. Engineered for Excellence.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {FOOTER_MAP.legal.map((item) => (
                /* [FIXED]: ใช้ <a> สำหรับ sitemap.xml และ assets อื่นๆ เพื่อหลีกเลี่ยง Typed Routes strictness */
                <a
                  key={item.label}
                  href={item.href}
                  className="text-text-muted hover:text-brand-primary font-mono text-[9px] font-bold tracking-widest uppercase transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-border bg-surface-card hover:border-brand-primary/40 hover:shadow-glow flex items-center gap-4 rounded-2xl border px-6 py-2.5 transition-all duration-500">
            <IconRenderer name="ShieldCheck" size={16} className="text-brand-primary" />
            <span className="text-text-primary font-mono text-[10px] font-black tracking-widest uppercase">
              DECODED BY {SITE_CONFIG.expert.displayName}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
