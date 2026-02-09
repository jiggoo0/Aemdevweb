/**
 * [SYSTEM PROVIDER]: THEME_PROVIDER_INFRA v17.3.9 (STABILIZED)
 * [STRATEGY]: Zero-Flicker Orchestration | Attribute-Based Swapping | SSR Resilience
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * @provider ThemeProvider
 * @description หน่วยควบคุมสถานะธีมหลักของระบบ (Dark/Light Hub)
 * เชื่อมโยงกับ CSS Variables ใน globals.css ผ่าน attribute "data-theme"
 */
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider 
      /* [MANDATE]: กำหนด attribute ให้ตรงกับ :root[data-theme="light"] ใน CSS Variables */
      attribute="data-theme" 
      
      /* [DNA]: เริ่มต้นด้วย Dark Mode ตามอัตลักษณ์หลักของ AEMDEVWEB */
      defaultTheme="dark" 
      
      /* [PERFORMANCE]: ปิดการตรวจจับจากระบบ OS เพื่อความนิ่งของดีไซน์ (Deterministic Design) */
      enableSystem={false}
      
      /* [STABILITY]: บังคับใช้ Class สำหรับ Library ภายนอกที่อาจยังไม่รองรับ data-attribute */
      disableTransitionOnChange={false}
      
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
