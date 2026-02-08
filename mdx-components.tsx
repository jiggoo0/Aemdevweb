/**
 * [SYSTEM CORE]: MDX_NATIVE_ARCHITECTURE_ENGINE v16.1.8 (ZERO_ANY_STABILIZED)
 * [STRATEGY]: Strict Prop Mapping | Paragraph Unwrapping | Fluid Visual Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* 1. Infrastructure: ระบบจัดการสไตล์ */
import { cn } from "@/lib/utils";

/** [TYPES]: พิกัดสัญญาข้อมูลเพื่อความเสถียรสูงสุด */
interface MDXProp {
  readonly children?: ReactNode;
  readonly className?: string;
}

interface MDXImageProps extends ComponentPropsWithoutRef<"img"> {
  readonly src?: string;
  readonly alt?: string;
}

interface MDXLinkProps extends ComponentPropsWithoutRef<"a"> {
  readonly href?: string;
}

// --- [PURE COMPONENTS: หน่วยเรนเดอร์เนื้อหาแบบ Specialist] ---

const MDXHeading1 = ({ children, className }: MDXProp) => (
  <h1
    className={cn(
      "text-text-primary animate-in fade-in slide-in-from-left-8 mt-24 mb-14 text-5xl leading-[0.95] font-black tracking-tighter uppercase italic duration-1000 md:text-7xl lg:text-[9rem]",
      className,
    )}
  >
    {children}
  </h1>
);

const MDXHeading2 = ({ children, className }: MDXProp) => (
  <h2
    className={cn(
      "border-surface-muted text-text-primary group mt-24 mb-10 flex items-center gap-6 border-b pb-10 text-3xl font-black tracking-tighter uppercase italic md:text-5xl lg:text-6xl",
      className,
    )}
  >
    <span className="bg-brand-primary/40 group-hover:bg-brand-primary shadow-glow h-12 w-3 rounded-full transition-all duration-500" />
    {children}
  </h2>
);

/**
 * [RECTIFIED]: MDXParagraph
 * แก้ไขปัญหา HTML Nesting Error โดยการตรวจจับ Element ภายในโดยไม่ใช้ any
 */
const MDXParagraph = ({ children, className }: MDXProp) => {
  const hasImage = React.Children.toArray(children).some((child) => {
    if (React.isValidElement(child)) {
      const props = child.props as Record<string, unknown>;
      return child.type === "img" || !!props.src;
    }
    return false;
  });

  const Component = hasImage ? "div" : "p";

  return (
    <Component
      className={cn(
        "text-text-secondary mb-12 text-xl leading-[1.85] font-medium italic md:text-2xl",
        hasImage && "mb-20",
        className,
      )}
    >
      {children}
    </Component>
  );
};

const MDXImage = ({ src, alt, className }: MDXImageProps) => (
  <figure className="border-surface-muted bg-surface-offset shadow-pro hover:border-brand-primary/30 force-gpu my-20 overflow-hidden rounded-[3rem] border transition-all duration-700">
    <div className="relative aspect-video w-full">
      <Image
        src={src || "/images/shared/placeholder.webp"}
        alt={alt || "บันทึกความสำเร็จและแผนงานระบบ"}
        fill
        className={cn("object-cover transition-transform duration-1000 hover:scale-105", className)}
        sizes="(max-width: 1280px) 100vw, 1280px"
        quality={90}
      />
    </div>
    {alt && (
      <figcaption className="text-text-muted p-8 text-center text-[10px] font-black tracking-[0.5em] uppercase italic opacity-60">
        REFERENCE_NODE // {alt}
      </figcaption>
    )}
  </figure>
);

const MDXCallout = ({ children, className }: MDXProp) => (
  <div
    className={cn(
      "border-brand-primary/30 bg-brand-glow/10 shadow-pro relative my-16 overflow-hidden rounded-[3rem] border-l-[12px] p-12 backdrop-blur-md md:p-16",
      className,
    )}
  >
    <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
      <Icons.ShieldCheck size={160} strokeWidth={1} />
    </div>
    <div className="relative z-10 flex items-start gap-8">
      <div className="bg-brand-primary/20 text-brand-primary shrink-0 rounded-2xl p-4 shadow-sm">
        <Icons.Zap size={32} strokeWidth={2.5} className="fill-brand-primary/20" />
      </div>
      <div className="text-text-primary text-xl leading-relaxed font-bold tracking-tight italic md:text-3xl">
        {children}
      </div>
    </div>
  </div>
);

/** [MASTER REGISTRY]: รวมพิกัดคอมโพเนนต์สำหรับเรนเดอร์เนื้อหา */
export const CUSTOM_MDX_COMPONENTS: MDXComponents = {
  h1: MDXHeading1,
  h2: MDXHeading2,
  p: MDXParagraph,
  img: (props: ComponentPropsWithoutRef<"img">) => <MDXImage {...(props as MDXImageProps)} />,
  Callout: MDXCallout,
  a: ({ href, children, ...props }: MDXLinkProps) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");
    const baseClass =
      "font-black text-brand-primary underline decoration-brand-primary/30 underline-offset-[12px] transition-all hover:decoration-brand-primary hover:tracking-widest duration-500";

    if (isInternal && href) {
      return (
        <Link
          {...(props as Omit<ComponentPropsWithoutRef<typeof Link>, "href">)}
          href={href}
          className={baseClass}
        >
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass} {...props}>
        {children}
      </a>
    );
  },
  ul: ({ children }: MDXProp) => (
    <ul className="border-surface-muted mb-14 ml-4 space-y-8 border-l-2 pl-10">{children}</ul>
  ),
  li: ({ children }: MDXProp) => (
    <li className="text-text-secondary flex items-start gap-6 text-lg font-bold italic md:text-2xl">
      <Icons.CheckCircle2 className="text-brand-primary mt-2 shrink-0" size={24} />
      <span>{children}</span>
    </li>
  ),
  hr: () => <hr className="border-surface-muted my-32 border-t-2 opacity-50 shadow-sm" />,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...CUSTOM_MDX_COMPONENTS, ...components };
}
