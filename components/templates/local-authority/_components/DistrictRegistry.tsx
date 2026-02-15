"use client";
import React from "react";

export const DistrictRegistry = ({ districts }: { districts: string[] }) => {
  return (
    <section className="border-[var(--foreground)]/10 border-t-[var(--border-width)] py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h3 className="font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
            Regional_Cluster_Nodes
          </h3>
          <p className="font-mono text-[10px] tracking-widest uppercase opacity-40">
            การครอบคลุมพื้นที่ระดับเขตอำเภอ
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[var(--border-width)] overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--foreground)]/10 md:grid-cols-4 lg:grid-cols-6">
          {districts.map((district, idx) => (
            <div
              key={idx}
              className="group bg-[var(--surface-main)] p-6 text-center transition-colors hover:bg-[var(--brand-primary)]/5"
            >
              <p className="text-sm font-bold opacity-60 group-hover:text-[var(--brand-primary)] group-hover:opacity-100">
                {district}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
