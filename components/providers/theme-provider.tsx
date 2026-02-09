/**
 * [SYSTEM PROVIDER]: THEME_PROVIDER_INFRA v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Zero-Flicker Orchestration | Attribute-Based Swapping | SSR Resilience
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * [TYPE DEFINITION]: Extract Props for clarity
 */
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

/**
 * @provider ThemeProvider
 * @description หน่วยควบคุมสถานะธีมหลักของระบบ (Dark/Light Hub)
 * ทำหน้าที่ห่อหุ้ม Application เพื่อจัดการ CSS Variables และ Class Name ตาม User Preference
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      /* [DEFAULT CONFIGURATION]: ค่าเริ่มต้นระบบ (สามารถ Override ได้จาก Props) */

      /* 1. Attribute: ใช้ 'class' เพื่อความเข้ากันได้สูงสุดกับ Tailwind CSS (Dark Mode: class) */
      attribute="class"
      /* 2. Default: เริ่มต้นด้วย Dark Mode ตาม Brand Persona */
      defaultTheme="dark"
      /* 3. System Sync: ปิดชั่วคราวเพื่อควบคุม Design ให้เป็น Deterministic (เปิดได้ผ่าน props) */
      enableSystem={false}
      /* 4. Stability: ป้องกันการกระพริบของ Transition ขณะโหลด */
      disableTransitionOnChange
      /* [INJECTION]: รับค่า Config เพิ่มเติมจาก Layout */
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
