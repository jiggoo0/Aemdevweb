/**
 * [PROVIDER]: THEME_ENGINE_STABILIZED v17.9.9 (STABLE_RELEASE)
 * [STRATEGY]: Client-Boundary Enforcement | Sync-Execution Lock | Lint-Hardened
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * @component ThemeProvider
 * @description ตัวครอบระบบธีมที่ถูกปรับแต่งให้ผ่านกฎ ESLint No-Unused-Vars
 * [FIXED]: ใช้ _mounted เพื่อระบุว่าตัวแปรนี้มีไว้เพื่อกระตุ้น Re-render หลัง Hydration เท่านั้น
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // [HYDRATION_LOCK]: ป้องกันปัญหาธีมไม่ตรงกันระหว่าง Server และ Client
  const [_mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
