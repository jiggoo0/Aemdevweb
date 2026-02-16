"use client";
import React from "react";

interface GeoNodeHeaderProps {
  province: string;
  lat?: number;
  lng?: number;
  nodeId: string;
}

export const GeoNodeHeader = ({ province, lat, lng, nodeId }: GeoNodeHeaderProps) => {
  return (
    <header className="relative overflow-hidden border-b border-[var(--foreground)]/10 pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="space-y-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-4 rounded-[var(--radius)] border border-[var(--brand-primary)] bg-[var(--brand-primary)]/5 px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--brand-primary)] shadow-[0_0_10px_var(--brand-primary)]" />
            <span className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
              Node_Active: {nodeId}
            </span>
          </div>

          {/* Title & Coordinates */}
          <div className="space-y-6">
            <h1 className="font-[family-name:var(--font-primary)] text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              {province} <br />
              <span className="text-[var(--brand-primary)]">Authority.</span>
            </h1>

            <div className="flex flex-wrap gap-x-8 gap-y-2 pt-6 font-mono text-[11px] font-bold tracking-widest uppercase opacity-40">
              <p>LAT: {lat?.toFixed(4) || "N/A"}</p>
              <p>LNG: {lng?.toFixed(4) || "N/A"}</p>
              <p>REGION: TH_LOCAL_NODE</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
