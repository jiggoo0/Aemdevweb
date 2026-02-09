/**
 * [LAYOUT COMPONENT]: SYSTEM_FOOTER v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Information Architecture | Theme-Aware Physics | Deterministic Stability
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo } from "react";
import Link from "next/link";

// --- 1. Infrastructure & Data ---
import { SITE_CONFIG } from "@/constants/site-config";
import { FOOTER_MAP } from "@/constants/navigation";

// --- 2. UI Components ---
import IconRenderer from "@/components/ui/IconRenderer";

const Footer = () => {
  /* [DETERMINISTIC FIX]: ล็อคค่าปีให้ตรงกับ Server-side เพื่อค่า CLS: 0 */
  const currentYear = SITE_CONFIG.business.established.split('-')[0] || "2026";

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface-main pt-24 pb-12 transition-colors duration-700">
      
      {/* 01. ATMOSPHERIC INFRASTRUCTURE: เลเยอร์บรรยากาศแบบ Dynamic */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
        
        {/* GPU-Accelerated Auras: ปรับตามตัวแปร --ambient-opacity ของระบบ */}
        <div className="ambient-aura absolute -bottom-24 -left-24 h-[500px] w-[500px] opacity-[var(--ambient-opacity)]" />
        <div className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px] opacity-[var(--ambient-opacity)]" />
      </div>

      

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* [NODE GRID]: 4-Column Architecture */}
        <div className="mb-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Node 01: Brand Identity & Intelligence */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Link href="/" className="group inline-flex items-center gap-4">
                {/* Logo Box: ใช้สี Inverted เพื่อความคมชัดสูงสุดในทุกธีม */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-text-primary text-surface-main shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <IconRenderer name="Cpu" size={24} strokeWidth={2.5} className="text-surface-main" />
                </div>
                <div className="flex flex-col">
                  <span className="text-text-primary font-sans text-xl leading-none font-black tracking-tighter uppercase">
                    {SITE_CONFIG.brandName}
                  </span>
                  <span className="text-brand-primary font-mono text-[8px] font-black tracking-[0.3em] uppercase">
                    Specialist.Node_v{SITE_CONFIG.project.version}
                  </span>
                </div>
              </Link>
              <p className="text-text-secondary max-w-xs text-sm leading-relaxed font-medium italic">
                “{SITE_CONFIG.description}”
              </p>
            </div>

            {/* Social Interconnects Protocol */}
            <div className="flex items-center gap-3">
              {[
                { name: "Facebook", href: SITE_CONFIG.links.facebook, icon: "Facebook" },
                { name: "Github", href: SITE_CONFIG.links.github, icon: "Github" },
                { name: "Line OA", href: SITE_CONFIG.links.line, icon: "MessageCircle" },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border bg-surface-card text-text-secondary hover:border-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:shadow-glow"
                >
                  <IconRenderer name={social.icon} size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Node 02: Strategic Solutions */}
          <div className="space-y-8">
            <h3 className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Strategic_Solutions
            </h3>
            <ul className="space-y-4">
              {FOOTER_MAP.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm font-bold text-text-secondary transition-all duration-300 hover:text-text-primary"
                  >
                    <span className="bg-brand-primary h-1 w-1 rounded-full opacity-0 transition-all group-hover:w-2 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Node 03: Corporate Nexus */}
          <div className="space-y-8">
            <h3 className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Corporate_Nexus
            </h3>
            <ul className="space-y-4">
              {[...FOOTER_MAP.company, ...FOOTER_MAP.connect].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm font-bold text-text-secondary transition-all duration-300 hover:text-text-primary"
                  >
                    <span className="bg-brand-primary h-1 w-1 rounded-full opacity-0 transition-all group-hover:w-2 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Node 04: Coordination Center */}
          <div className="space-y-8">
            <h3 className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Coordination_Center
            </h3>
            <div className="space-y-6">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="group -ml-2 flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-surface-offset"
              >
                <div className="border-border bg-surface-card text-brand-primary group-hover:bg-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-500 group-hover:text-surface-main group-hover:shadow-glow">
                  <IconRenderer name="Mail" size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-text-muted font-mono text-[8px] font-black tracking-widest uppercase">Email_Protocol</p>
                  <p className="text-text-primary group-hover:text-brand-primary text-sm font-black tracking-tight transition-colors">
                    {SITE_CONFIG.contact.email}
                  </p>
                </div>
              </a>

              <div className="group -ml-2 flex items-start gap-4 p-2">
                <div className="border-border bg-surface-card text-brand-primary group-hover:bg-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-500 group-hover:text-surface-main group-hover:shadow-glow">
                  <IconRenderer name="MapPin" size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-text-muted font-mono text-[8px] font-black tracking-widest uppercase">Base_Location</p>
                  <address className="text-text-secondary text-sm leading-relaxed font-medium not-italic">
                    {SITE_CONFIG.contact.address} <br />
                    {SITE_CONFIG.contact.postalCode}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* [LEGAL & SYSTEM STATUS] */}
        <div className="border-border flex flex-col items-center justify-between gap-8 border-t pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:items-start lg:flex-row lg:gap-12">
            <div className="text-center md:text-left">
              <p className="text-text-muted mb-2 font-mono text-[9px] font-black tracking-widest uppercase">
                System_Status: Online // Node_v{SITE_CONFIG.project.version}
              </p>
              <p className="text-text-secondary text-[10px] font-bold tracking-widest uppercase">
                &copy; {currentYear} {SITE_CONFIG.brandName}. All Rights Reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {FOOTER_MAP.legal.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-text-muted hover:text-brand-primary font-mono text-[9px] font-bold tracking-widest uppercase transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ACTIVE PULSE SIGNATURE */}
          <a
            href={SITE_CONFIG.links.line}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-surface-card hover:border-brand-primary/30 flex items-center gap-4 rounded-full border px-6 py-2 transition-all hover:bg-surface-offset hover:shadow-glow"
          >
            <div className="relative h-2 w-2">
              <div className="bg-brand-primary absolute inset-0 animate-ping rounded-full opacity-50" />
              <div className="bg-brand-primary relative h-2 w-2 rounded-full shadow-glow" />
            </div>
            <span className="text-text-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase">
              Engineered by {SITE_CONFIG.expert.displayName}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
