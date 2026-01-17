/** @format */
"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Github,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";
import { navigation } from "@/constants/navigation";
import { AemBrandBadge } from "./AemBrandBadge";

interface FooterProps {
  className?: string;
}

/**
 * 🌑 Footer: Luminous Midnight Edition
 * ปิดท้ายหน้าเว็บด้วยความพรีเมียมและความสว่างที่นวลตา
 */
export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "bg-background relative overflow-hidden border-t border-white/5 pt-24 pb-12",
        className
      )}
      aria-label="Site Footer"
    >
      {/* 🌌 Aurora Ambient: แสงจางๆ ท้ายหน้าเว็บ */}
      <div className="aurora-bg -bottom-20 left-1/2 h-64 w-full -translate-x-1/2 opacity-[0.05]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Main Grid */}
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* 1. Brand & Value Section */}
          <div className="space-y-8">
            <AemBrandBadge withText={true} className="origin-left scale-110" />
            <p className="font-anuphan max-w-xs text-base leading-relaxed text-slate-400 opacity-80">
              {siteConfig.description ||
                "High-Conversion Web Factory for SMEs. เปลี่ยนเว็บไซต์ให้เป็นเครื่องจักรผลิตยอดขาย"}
            </p>
            <div className="flex gap-4">
              <SocialIcon
                href={siteConfig.links.facebook || "#"}
                icon={Facebook}
                label="Facebook"
                colorClass="hover:bg-[#1877F2] hover:border-white/20"
              />
              <SocialIcon
                href={siteConfig.links.line}
                icon={MessageCircle}
                label="Line"
                colorClass="hover:bg-[#06C755] hover:border-white/20"
              />
              <SocialIcon
                href={siteConfig.links.github || "#"}
                icon={Github}
                label="GitHub"
                colorClass="hover:bg-white/10 hover:border-white/20"
              />
            </div>
          </div>

          {/* 2. Solutions Area */}
          <div>
            <h4 className="font-prompt mb-8 flex items-center gap-2 text-lg font-black text-white">
              <span className="bg-aurora-cyan h-1 w-4 rounded-full" />
              SOLUTIONS
            </h4>
            <ul className="font-anuphan space-y-4">
              {navigation.footer.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-aurora-cyan group flex w-fit items-center gap-3 text-slate-400 transition-all"
                  >
                    <ArrowRight className="text-aurora-cyan h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    <span className="transition-transform group-hover:translate-x-1">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="bg-aurora-cyan/10 text-aurora-cyan border-aurora-cyan/20 rounded-full border px-2 py-0.5 text-[9px] font-black tracking-widest uppercase">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Knowledge & Company */}
          <div>
            <h4 className="font-prompt mb-8 flex items-center gap-2 text-lg font-black text-white">
              <span className="bg-aurora-violet h-1 w-4 rounded-full" />
              COMPANY
            </h4>
            <ul className="font-anuphan space-y-4">
              {navigation.footer.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-aurora-violet group flex w-fit items-center gap-3 text-slate-400 transition-all",
                      item.disabled && "pointer-events-none opacity-30"
                    )}
                  >
                    <ArrowRight className="text-aurora-violet h-3 w-3 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    <span className="transition-transform group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Support & Direct Contact */}
          <div>
            <h4 className="font-prompt mb-8 flex items-center gap-2 text-lg font-black text-white">
              <span className="bg-aurora-emerald h-1 w-4 rounded-full" />
              SUPPORT
            </h4>
            <ul className="space-y-6">
              <ContactItem
                icon={Phone}
                text={siteConfig.contact.telDisplay}
                href={`tel:${siteConfig.contact.tel}`}
              />
              <ContactItem
                icon={Mail}
                text={siteConfig.contact.email}
                href={`mailto:${siteConfig.contact.email}`}
              />
              <ContactItem icon={MapPin} text={siteConfig.contact.address} />

              <li className="pt-4">
                <div className="glass-card hover:border-aurora-cyan/30 group shadow-luminous cursor-default border-white/5 p-5 transition-all">
                  <p className="group-hover:text-aurora-cyan mb-2 flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase transition-colors">
                    <Sparkles className="h-3 w-3 animate-pulse" /> Direct Line
                  </p>
                  <p className="group-hover:text-aurora-emerald font-mono text-xl font-bold tracking-wider text-white transition-colors">
                    {siteConfig.links.lineId}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 text-[11px] font-black tracking-[0.2em] text-slate-600 uppercase md:flex-row">
          <p className="text-center md:text-left">
            © {currentYear} {siteConfig.companyName}. Crafted by{" "}
            <span className="text-slate-400">Luminous Tech Engine</span>
          </p>

          <div className="flex gap-8">
            <Link
              href="/sitemap.xml"
              className="transition-colors hover:text-white"
            >
              Sitemap
            </Link>
            {navigation.footer.legal?.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-white",
                  item.disabled && "pointer-events-none opacity-30"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// 🧩 Footer Sub-components

interface SocialIconProps {
  href: string;
  icon: LucideIcon; // ✅ Fixed: Specify LucideIcon instead of any
  label: string;
  colorClass: string;
}

function SocialIcon({
  href,
  icon: Icon,
  label,
  colorClass,
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "hover:shadow-aurora-glow flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-slate-400 transition-all duration-500 hover:-translate-y-2 hover:text-white",
        colorClass
      )}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

interface ContactItemProps {
  icon: LucideIcon; // ✅ Fixed: Specify LucideIcon instead of any
  text: string;
  href?: string;
}

function ContactItem({ icon: Icon, text, href }: ContactItemProps) {
  const content = (
    <>
      <div className="text-aurora-cyan group-hover:bg-aurora-cyan shadow-luminous flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/5 transition-all duration-500 group-hover:text-slate-950">
        <Icon className="h-4 w-4" />
      </div>
      <span className="font-anuphan text-sm leading-relaxed font-medium opacity-70 transition-colors group-hover:text-white group-hover:opacity-100 md:text-base">
        {text}
      </span>
    </>
  );

  return (
    <li className="group flex items-start gap-4">
      {href ? (
        <a href={href} className="flex w-full items-center gap-4">
          {content}
        </a>
      ) : (
        <div className="flex w-full cursor-default items-center gap-4">
          {content}
        </div>
      )}
    </li>
  );
}
