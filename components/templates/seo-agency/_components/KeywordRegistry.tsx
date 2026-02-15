"use client";
import React from "react";

export const KeywordRegistry = () => {
  const keywords = [
    { word: "รับทำเว็บไซต์ โคราช", volume: "High", rank: "Top 1" },
    { word: "จ้างทำเว็บแคตตาล็อก", volume: "Medium", rank: "Top 3" },
    { word: "SEO Agency Thailand", volume: "Extreme", rank: "Top 5" },
    { word: "ออกแบบเว็บไซต์บริษัท", volume: "High", rank: "Top 2" },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-2">
            <h3 className="font-[family-name:var(--font-primary)] text-3xl font-black uppercase italic">
              Ranking_Registry
            </h3>
            <p className="italic opacity-50">
              รายการคำค้นหายุทธศาสตร์ที่เราส่งลูกค้าขึ้นสู่หน้าแรกสำเร็จ
            </p>
          </div>

          <div className="overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10">
            <table className="w-full text-left font-mono text-sm">
              <thead className="bg-[var(--foreground)]/5">
                <tr>
                  <th className="p-6 tracking-widest uppercase opacity-40">Strategic_Keyword</th>
                  <th className="p-6 tracking-widest uppercase opacity-40">Volume</th>
                  <th className="p-6 tracking-widest uppercase opacity-40">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--foreground)]/5">
                {keywords.map((k, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-[var(--brand-primary)]/5">
                    <td className="p-6 font-bold italic">{k.word}</td>
                    <td className="p-6 opacity-60">{k.volume}</td>
                    <td className="p-6 font-black text-[var(--brand-primary)] italic">{k.rank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
