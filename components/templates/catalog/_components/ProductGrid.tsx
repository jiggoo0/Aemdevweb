"use client";
import React from "react";

export const ProductGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      {children}
    </section>
  );
};

export const EmptyState = () => (
  <div className="rounded-[var(--radius)] border-dashed border-[var(--border-width)] border-[var(--foreground)]/10 py-32 text-center">
    <p className="font-mono text-sm tracking-widest uppercase opacity-30">
      No_Matches_Found_In_Registry
    </p>
  </div>
);
