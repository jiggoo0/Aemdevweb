/** @format */

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import IconRenderer from "@/components/shared/IconRenderer";

/**
 * SeoFooter: พิกัดยืนยันความน่าเชื่อถือและการเชื่อมโยงข้อมูล (Internal Link Hub)
 */
export default function SeoFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[oklch(0.95_0.02_260)] bg-white py-16 dark:bg-[oklch(0.12_0.02_260)]">
      <div className="container-za">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* 1. Brand Authority Node */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-black text-[oklch(0.2_0.02_260)] uppercase italic dark:text-white">
              {siteConfig.company.name}
            </h3>
            <p className="text-sm leading-relaxed font-bold text-[oklch(0.45_0.02_260)]">
              {siteConfig.project.description}
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg bg-[oklch(0.98_0.01_260)] px-3 py-2 text-[10px] font-black text-[oklch(0.3_0.02_260)] uppercase italic dark:bg-[oklch(0.18_0.02_260)] dark:text-[oklch(0.8_0.02_260)]">
              <IconRenderer
                name="ShieldCheck"
                size={14}
                className="text-[oklch(0.65_0.2_160)]"
              />
              Verified by {siteConfig.expert.name}
            </div>
          </div>

          {/* 2. SEO internal Linking System */}
          <div className="space-y-6">
            <h4 className="text-sm font-black tracking-[0.2em] text-[oklch(0.65_0.2_160)] uppercase italic">
              Service Infrastructure
            </h4>
            <ul className="space-y-3 text-sm font-bold text-[oklch(0.3_0.02_260)] dark:text-[oklch(0.8_0.02_260)]">
              {[
                "technical-structure-audit",
                "core-web-vitals-speed",
                "advanced-schema-markup",
              ].map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/seo/${slug}`}
                    className="transition-colors hover:text-[oklch(0.65_0.2_160)]"
                  >
                    {slug
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Global Connectivity Protocol */}
          <div className="space-y-6">
            <h4 className="text-sm font-black tracking-[0.2em] text-[oklch(0.65_0.2_160)] uppercase italic">
              Connect Point
            </h4>
            <ul className="space-y-3 text-sm font-bold text-[oklch(0.3_0.02_260)] dark:text-[oklch(0.8_0.02_260)]">
              <li>
                <a
                  href={siteConfig.links.line}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 hover:text-[oklch(0.65_0.2_160)]"
                >
                  <IconRenderer name="MessageSquare" size={16} /> LINE Official
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 hover:text-[oklch(0.65_0.2_160)]"
                >
                  <IconRenderer name="Facebook" size={16} /> Facebook Page
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Expert Insight Node (E-E-A-T) */}
          <div className="space-y-6">
            <h4 className="text-sm font-black tracking-[0.2em] text-[oklch(0.65_0.2_160)] uppercase italic">
              Strategic Insight
            </h4>
            <p className="text-sm leading-relaxed font-bold text-[oklch(0.45_0.02_260)]">
              {siteConfig.expert.bio}
            </p>
          </div>
        </div>

        <hr className="my-12 border-[oklch(0.95_0.02_260)] dark:border-[oklch(0.3_0.02_260)]" />

        <div className="flex flex-col items-center justify-between gap-6 text-[10px] font-black tracking-widest text-[oklch(0.6_0.02_260)] uppercase italic md:flex-row">
          <p>
            © {currentYear} {siteConfig.company.name}. All Nodes Synchronized.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-[oklch(0.65_0.2_160)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[oklch(0.65_0.2_160)]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
