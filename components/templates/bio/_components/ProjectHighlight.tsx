"use client";

import React from "react";
import { motion } from "framer-motion";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface ProjectNode {
  title: string;
  category: string;
  description: string;
  link?: string;
  thumbnail?: string;
}

interface ProjectHighlightProps {
  projects?: ProjectNode[];
}

/**
 * @component ProjectHighlight
 * @description แสดงผลงานชิ้นเอกในรูปแบบ Horizontal Node ที่เน้นความพรีเมียมและความขลัง
 */
export const ProjectHighlight = ({ projects }: ProjectHighlightProps) => {
  // Mockup กรณีไม่มีข้อมูล (เพื่อความสวยงามในหน้า Bio)
  const defaultProjects: ProjectNode[] = [
    {
      title: "Neural_Architecture_v1",
      category: "Systems Design",
      description:
        "วางโครงสร้างระบบ P-SEO สำหรับธุรกิจอุตสาหกรรมยุคใหม่ที่เน้นการขยายตัวแบบ Exponential",
      link: "#",
    },
  ];

  const displayProjects = projects || defaultProjects;

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between px-2">
        <p className="font-mono text-[10px] font-black tracking-[0.4em] uppercase italic opacity-40">
          // Featured_Deployments
        </p>
        <div className="mx-6 h-px flex-grow bg-[var(--foreground)]/5" />
      </div>

      <div className="space-y-4">
        {displayProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "group relative overflow-hidden border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)] p-6 transition-all duration-500 hover:border-[var(--brand-primary)]/40",
              "rounded-[var(--radius)]",
            )}
          >
            <div className="flex flex-col items-center gap-6 md:flex-row">
              {/* Thumbnail Node */}
              <div
                className={cn(
                  "flex h-32 w-full shrink-0 items-center justify-center border-[var(--border-width)] border-[var(--foreground)]/5 bg-gradient-to-br from-[var(--brand-primary)]/10 to-transparent md:w-32",
                  "rounded-[calc(var(--radius)*0.75)]",
                )}
              >
                <IconRenderer
                  name="Layers"
                  size={32}
                  className="text-[var(--brand-primary)] opacity-40 transition-opacity group-hover:opacity-100"
                />
              </div>

              {/* Info Node */}
              <div className="flex-grow space-y-3 text-center md:text-left">
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-3 md:justify-start">
                    <span className="rounded-sm bg-[var(--brand-primary)]/5 px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest text-[var(--brand-primary)] uppercase">
                      {project.category}
                    </span>
                    <span className="font-mono text-[9px] uppercase opacity-20">
                      ID: 0x0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-primary)] text-xl font-black uppercase italic">
                    {project.title}
                  </h3>
                </div>

                <p className="line-clamp-2 text-xs leading-relaxed font-medium text-[var(--text-primary)]/60 italic">
                  {project.description}
                </p>
              </div>

              {/* Action Node */}
              <a
                href={project.link}
                className={cn(
                  "bg-[var(--brand-primary)]/5 p-4 text-[var(--brand-primary)] transition-all hover:bg-[var(--brand-primary)] hover:text-white",
                  "rounded-[var(--radius)]",
                )}
              >
                <IconRenderer name="ArrowUpRight" size={20} />
              </a>
            </div>

            {/* Subtle Blueprint Grid (Hover Only) */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(var(--brand-primary) 1px, transparent 0)`,
                backgroundSize: "16px 16px",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
