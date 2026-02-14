"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_MAP } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="bg-surface-card border-border border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Services */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-text-primary mb-4 text-lg font-bold">บริการของเรา</h3>
            <ul className="space-y-2">
              {FOOTER_MAP.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-brand-primary text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-text-primary mb-4 text-lg font-bold">เกี่ยวกับเรา</h3>
            <ul className="space-y-2">
              {FOOTER_MAP.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-brand-primary text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-text-primary mb-4 text-lg font-bold">ติดต่อเรา</h3>
            <ul className="space-y-2">
              {FOOTER_MAP.connect.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="text-text-secondary hover:text-brand-primary text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal / Copyright */}
        <div className="border-border flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} AEMDEVWEB. สงวนลิขสิทธิ์.
          </p>
          <div className="flex gap-6">
            {FOOTER_MAP.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-muted hover:text-brand-primary text-xs transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
