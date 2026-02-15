"use client";
import React from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";

interface Capability {
  title: string;
  description: string;
  icon: string;
}

export const CapabilityMatrix = ({ items }: { items: Capability[] }) => {
  return (
    <section className="bg-[var(--brand-primary)]/5 py-24 md:py-40">
      <div className="container mx-auto px-4">
        <div className="mb-20 space-y-4">
          <p className="font-mono text-xs font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
            // Core_Capabilities
          </p>
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-black uppercase italic md:text-6xl">
            โครงสร้างบริการเชิงกลยุทธ์
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[var(--border-width)] overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--foreground)]/10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group space-y-8 bg-[var(--surface-main)] p-10 transition-all duration-700 hover:bg-[var(--brand-primary)] md:p-14"
            >
              <div className="inline-block rounded-[calc(var(--radius)*0.5)] bg-[var(--brand-primary)]/10 p-4 text-[var(--brand-primary)] group-hover:bg-white/20 group-hover:text-white">
                <IconRenderer name={item.icon as IconName} size={40} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase italic transition-colors group-hover:text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed font-medium text-[var(--text-primary)]/60 transition-colors group-hover:text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
