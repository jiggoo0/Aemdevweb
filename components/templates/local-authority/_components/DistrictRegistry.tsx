"use client";
import React from "react";

export const DistrictRegistry = ({ districts }: { districts: string[] }) => {
  // [OPTIMIZATION]: Don't render empty section
  if (!districts || districts.length === 0) return null;

  return (
    <section className="border-t border-[var(--foreground)]/10 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h3 className="font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
            Regional_Cluster_Nodes
          </h3>
          <p className="font-mono text-[10px] tracking-widest uppercase opacity-40">
            การครอบคลุมพื้นที่ระดับเขตอำเภอ ({districts.length} NODES)
          </p>
        </div>

        {/* Grid System with Borders */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--foreground)]/10 bg-[var(--foreground)]/10 md:grid-cols-4 lg:grid-cols-6">
          {districts.map((district, idx) => (
            <div
              key={`${district}-${idx}`}
              className="group bg-[var(--surface-main)] p-6 text-center transition-colors hover:bg-[var(--brand-primary)]/5"
            >
              <p className="text-sm font-bold opacity-60 transition-all group-hover:text-[var(--brand-primary)] group-hover:opacity-100">
                {district}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
