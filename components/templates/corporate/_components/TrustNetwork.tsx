"use client";
import React from "react";

export const TrustNetwork = ({ clientTrust }: { clientTrust: string }) => {
  return (
    <section className="overflow-hidden py-32">
      <div className="container mx-auto space-y-16 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h3 className="text-2xl leading-tight font-black uppercase italic md:text-4xl">
            {clientTrust}
          </h3>
        </div>

        {/* Marquee or Logo Grid */}
        <div className="flex flex-wrap justify-center gap-12 opacity-30 contrast-125 grayscale md:gap-24">
          {/* Placeholder for Logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-12 w-32 rounded-[var(--radius)] bg-[var(--foreground)] opacity-20"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
