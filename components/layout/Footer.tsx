/**
 * [LAYOUT COMPONENT]: SYSTEM_FOOTER v17.0.2 (OPTIMIZED)
 * [STRATEGY]: Information Architecture | Depth Physics | Trust Anchor
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo } from "react";
import Link from "next/link";

// --- 1. Infrastructure & Data ---
import { SITE_CONFIG } from "@/constants/site-config";
import { FOOTER_MAP } from "@/constants/navigation";
import type { IconName } from "@/types";

// --- 2. UI Components ---
import IconRenderer from "@/components/ui/IconRenderer";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505] pt-24 pb-12">
      {/* 01. ATMOSPHERIC INFRASTRUCTURE */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        {/* Grid System */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Ambient Glow */}
        <div className="bg-brand-primary/5 absolute -bottom-24 -left-24 h-[500px] w-[500px] rounded-full blur-[120px]" />
        <div className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* [NODE GRID]: 4-Column Architecture */}
        <div className="mb-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Node 01: Brand Identity */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Link href="/" className="group inline-flex items-center gap-4">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <IconRenderer name="Cpu" size={24} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xl leading-none font-black tracking-tighter text-white uppercase">
                    {SITE_CONFIG.brandName}
                  </span>
                  <span className="text-brand-primary font-mono text-[8px] font-black tracking-[0.3em] uppercase">
                    Specialist.Node
                  </span>
                </div>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed font-medium text-gray-400 italic">
                “{SITE_CONFIG.description}”
              </p>
            </div>

            {/* Social Interconnects */}
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
                  className="hover:border-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                  aria-label={`Connect via ${social.name}`}
                >
                  <IconRenderer name={social.icon as IconName} size={18} />
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
                    className="group flex items-center gap-2 text-sm font-bold text-gray-400 transition-all duration-300 hover:text-white"
                  >
                    <span className="bg-brand-primary h-1 w-1 rounded-full opacity-0 transition-all group-hover:w-2 group-hover:opacity-100" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Node 03: Company & Connect */}
          <div className="space-y-8">
            <h3 className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Corporate_Nexus
            </h3>
            <ul className="space-y-4">
              {[...FOOTER_MAP.company, ...FOOTER_MAP.connect].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm font-bold text-gray-400 transition-all duration-300 hover:text-white"
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
                className="group -ml-2 flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
              >
                <div className="text-brand-primary group-hover:bg-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-500 group-hover:text-black">
                  <IconRenderer name="Mail" size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[8px] font-black tracking-widest text-gray-500 uppercase">
                    Email_Protocol
                  </p>
                  <p className="group-hover:text-brand-primary text-sm font-bold tracking-tight text-white transition-colors">
                    {SITE_CONFIG.contact.email}
                  </p>
                </div>
              </a>

              <div className="group -ml-2 flex items-start gap-4 p-2">
                <div className="text-brand-primary group-hover:bg-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-all duration-500 group-hover:text-black">
                  <IconRenderer name="MapPin" size={18} />
                </div>
                <div className="space-y-1">
                  <p className="font-mono text-[8px] font-black tracking-widest text-gray-500 uppercase">
                    Base_Location
                  </p>
                  <address className="text-sm leading-relaxed font-medium text-gray-300 not-italic">
                    {SITE_CONFIG.contact.address} <br />
                    {SITE_CONFIG.contact.postalCode}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* [LEGAL & SYSTEM STATUS] */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:items-start lg:flex-row lg:gap-12">
            <div className="text-center md:text-left">
              <p className="mb-2 font-mono text-[9px] font-black tracking-widest text-gray-600 uppercase">
                System_Status: Online // Node_v17.0
              </p>
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                &copy; {currentYear} {SITE_CONFIG.brandName}. All Rights Reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {FOOTER_MAP.legal.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-brand-primary font-mono text-[9px] font-bold tracking-widest text-gray-600 uppercase transition-colors"
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
            className="hover:border-brand-primary/30 flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-2 transition-all hover:bg-white/10"
          >
            <div className="relative h-2 w-2">
              <div className="bg-brand-primary absolute inset-0 animate-ping rounded-full opacity-50" />
              <div className="bg-brand-primary relative h-2 w-2 rounded-full shadow-[0_0_10px_var(--color-brand-primary)]" />
            </div>
            <span className="font-mono text-[9px] font-black tracking-[0.3em] text-white uppercase">
              Engineered by {SITE_CONFIG.expert.displayName}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
