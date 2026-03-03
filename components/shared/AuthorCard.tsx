/**
 * [SHARED COMPONENT]: AUTHOR_CARD v1.0.0 (IDENTITY_SOVEREIGNTY)
 * [STRATEGY]: E-E-A-T Presentation | Responsive Design | Identity Sync
 */

import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";

export default function AuthorCard() {
  return (
    <div className="shadow-glow-sm border-border/40 bg-surface-card/60 mt-16 rounded-3xl border p-8 backdrop-blur-lg md:p-10">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        {/* Profile Image with Glow Effect */}
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[var(--color-brand-primary)]/10 p-1 md:h-32 md:w-32">
          <Image
            src={SITE_CONFIG.expert.avatar}
            alt={SITE_CONFIG.expert.displayName}
            fill
            className="rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
          <div className="absolute inset-0 animate-pulse rounded-xl bg-[var(--color-brand-primary)]/20" />
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--color-brand-primary)] uppercase italic">
              Verified_Expert_Identity
            </span>
            <h3 className="text-text-primary text-2xl font-black tracking-tight uppercase italic md:text-3xl">
              {SITE_CONFIG.expert.displayName}
            </h3>
            <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-[var(--color-brand-primary)]/80 uppercase italic">
              {SITE_CONFIG.expert.jobTitle}
            </p>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed italic opacity-80 md:max-w-xl">
            {SITE_CONFIG.expert.bio}
          </p>

          {/* Social Connectors */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
            {[
              { icon: "Linkedin", href: SITE_CONFIG.links.linkedin, label: "LinkedIn" },
              { icon: "Github", href: SITE_CONFIG.links.github, label: "GitHub" },
              { icon: "Twitter", href: SITE_CONFIG.links.twitter, label: "Twitter" },
              { icon: "Facebook", href: SITE_CONFIG.links.facebook, label: "Facebook" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted flex items-center gap-2 transition-all hover:-translate-y-1 hover:text-[var(--color-brand-primary)]"
                aria-label={link.label}
              >
                <IconRenderer name={link.icon as IconName} size={18} />
                <span className="font-mono text-[9px] font-bold tracking-tighter uppercase opacity-0 transition-opacity hover:opacity-100">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
