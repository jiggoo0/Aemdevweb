declare module "*.mdx" {
  import type { ComponentType, ReactNode } from "react";

  const component: ComponentType<{ children?: ReactNode }>;
  export default component;
}

declare module "mdx/types" {
  import type { ComponentType, ReactNode } from "react";
  // Extending definition to allow strictly typed MDX components
  export type MDXComponents = Record<string, ComponentType<{ children?: ReactNode }> | string>;
}
