"use client";
import React from "react";

export const CredentialStack = ({ trustTitle }: { trustTitle?: string }) => {
  return (
    <div className="space-y-6 border-[var(--foreground)]/5 border-y-[var(--border-width)] py-6 text-center">
      <p className="font-mono text-[9px] font-black tracking-[0.4em] uppercase italic opacity-40">
        {trustTitle || "// Authorized_Experience"}
      </p>
      <div className="flex flex-wrap justify-center gap-8 opacity-30 contrast-125 grayscale">
        {/* Placeholder for Logos/Credentials */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-6 w-20 rounded-sm bg-[var(--foreground)] opacity-20" />
        ))}
      </div>
    </div>
  );
};
