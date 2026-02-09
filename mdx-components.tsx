/**
 * [SYSTEM CORE]: MDX_COMPONENT_MAPPER v17.5.0 (HYDRATION_FIXED)
 * [STRATEGY]: Typography Authority | Semantic Integrity | Zero-Jitter
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Callout } from "@/components/ui/Callout";

/**
 * @function useMDXComponents
 * @description แมปแท็ก MDX ให้เป็น UI Components โดยเน้นความถูกต้องของโครงสร้าง DOM
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // --- [01. TYPOGRAPHY INFRASTRUCTURE] ---

    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className={cn(
          "text-text-primary mt-12 mb-8 text-4xl font-black tracking-tighter uppercase italic md:text-6xl",
          className,
        )}
        {...props}
      />
    ),

    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={cn(
          "text-text-primary border-brand-primary mt-12 mb-6 border-l-4 pl-4 text-2xl font-black tracking-tighter uppercase italic md:text-4xl",
          className,
        )}
        {...props}
      />
    ),

    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className={cn(
          "text-text-primary mt-8 mb-4 text-xl font-bold tracking-wide uppercase md:text-2xl",
          className,
        )}
        {...props}
      />
    ),

    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={cn(
          "text-text-secondary mb-6 text-lg leading-relaxed font-medium opacity-90 md:text-xl",
          className,
        )}
        {...props}
      />
    ),

    // --- [02. SPECIALIST COMPONENTS] ---

    Callout: ({ children, ...props }: React.ComponentProps<typeof Callout>) => (
      <Callout {...props}>{children}</Callout>
    ),

    // --- [03. NAVIGATION & ACTIONS] ---

    a: ({ href, className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
      const style = cn(
        "text-brand-primary decoration-brand-primary/30 hover:text-brand-primary/80 font-bold underline underline-offset-4 transition-colors",
        className,
      );

      if (isInternal) {
        return (
          <Link href={href || "#"} className={style} {...props}>
            {children}
          </Link>
        );
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={style} {...props}>
          {children}
        </a>
      );
    },

    // --- [04. VISUAL ENGINE] ---

    /**
     * [FIX]: เปลี่ยนจาก div เป็น span + block เพื่อป้องกัน Hydration Error
     * เนื่องจาก MDX มักหุ้ม <img> ด้วย <p> ซึ่ง <p> ไม่สามารถบรรจุ <div> ได้ตามมาตรฐาน HTML
     */
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <span className="border-border bg-surface-card shadow-pro-sm my-10 block overflow-hidden rounded-[2.5rem] border">
        <Image
          sizes="(max-width: 1280px) 100vw, 1280px"
          width={1200}
          height={675}
          className="h-auto w-full transition-transform duration-[1.5s] hover:scale-105"
          alt={props.alt || "Visual Content"}
          src={props.src || "/images/og-default.png"}
        />
      </span>
    ),

    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className={cn(
          "border-brand-primary bg-surface-offset/50 text-text-primary my-8 rounded-r-3xl border-l-[6px] p-8 text-xl font-medium italic shadow-sm",
          className,
        )}
        {...props}
      />
    ),

    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className={cn(
          "marker:text-brand-primary text-text-secondary my-6 ml-6 list-disc text-lg [&>li]:mt-2",
          className,
        )}
        {...props}
      />
    ),

    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className={cn(
          "marker:text-brand-primary text-text-secondary my-6 ml-6 list-decimal text-lg marker:font-black [&>li]:mt-2",
          className,
        )}
        {...props}
      />
    ),

    ...components,
  };
}
