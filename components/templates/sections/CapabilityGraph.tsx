/**
 * [ADAPTER]: CAPABILITY_GRAPH v18.0.0 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Grid | Semantic Icons | Zero-Framer
 */

import React from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";

interface Skill {
  title: string;
  description: string;
  icon: IconName;
}

interface CapabilityGraphProps {
  skills: Skill[];
}

export const CapabilityGraph = ({ skills }: CapabilityGraphProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {skills.map((skill) => (
        <div
          key={skill.title}
          className="bg-surface-card border-border/10 hover:border-brand-primary/40 group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500"
        >
          <div className="bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:text-white">
            <IconRenderer name={skill.icon} size={24} />
          </div>
          <h3 className="text-text-primary text-lg font-bold tracking-tight">{skill.title}</h3>
          <p className="text-text-muted mt-2 text-sm leading-relaxed opacity-80">
            {skill.description || "ความเชี่ยวชาญระดับสูงในการวางโครงสร้างและปรับแต่งประสิทธิภาพ"}
          </p>
          <div className="bg-brand-primary/5 absolute -right-4 -bottom-4 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
};
