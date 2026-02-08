// types/mdx.d.ts

declare module "*.mdx" {
  import type { ComponentType, ReactNode } from "react";

  const component: ComponentType<{ children?: ReactNode }>;
  export default component;
}

declare module "mdx/types" {
  import type { ComponentType, ReactNode } from "react";
  export type MDXComponents = Record<string, ComponentType<{ children?: ReactNode }> | string>;
}
