/**
 * [SYSTEM MODULE]: SPECIALIST_NOTIFICATION_SYSTEM v17.0.1 (ATMOSPHERIC)
 * [STRATEGY]: OKLCH Perceptual Integrity | High-Luminance Depth | Fluid Feedback
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

/**
 * @component Toaster
 * @description หน่วยประมวลผลการแจ้งเตือนระดับระบบ (Global Toast)
 * ปรับจูนเพื่อรองรับมิติแสงและเงา (Atmospheric Physics) ในยุค 2026
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          /* 01. BASE INFRASTRUCTURE: พื้นฐานความโปร่งแสงและมิติเงา */
          toast:
            "group toast group-[.toaster]:bg-[#0A0A0A]/90 group-[.toaster]:text-white group-[.toaster]:border-white/10 group-[.toaster]:shadow-2xl group-[.toaster]:backdrop-blur-xl group-[.toaster]:rounded-[1.5rem] group-[.toaster]:p-6",

          /* 02. TYPOGRAPHY HIERARCHY: ลำดับขั้นข้อมูลระดับ Specialist */
          title:
            "group-[.toast]:text-white group-[.toast]:text-sm group-[.toast]:font-black group-[.toast]:uppercase group-[.toast]:italic group-[.toast]:tracking-wider",
          description:
            "group-[.toast]:text-gray-400 group-[.toast]:text-xs group-[.toast]:font-medium group-[.toast]:mt-1",

          /* 03. ACTION INTERFACE: ปุ่มตอบสนอง */
          actionButton:
            "group-[.toast]:bg-brand-primary group-[.toast]:text-black group-[.toast]:font-black group-[.toast]:uppercase group-[.toast]:tracking-widest group-[.toast]:text-[10px] group-[.toast]:rounded-xl group-[.toast]:px-4 group-[.toast]:py-2 hover:group-[.toast]:brightness-110 active:group-[.toast]:scale-95 transition-all",
          cancelButton:
            "group-[.toast]:bg-white/10 group-[.toast]:text-gray-300 group-[.toast]:font-bold group-[.toast]:uppercase group-[.toast]:tracking-widest group-[.toast]:text-[10px] group-[.toast]:rounded-xl hover:group-[.toast]:bg-white/20 transition-all",

          /* 04. STATUS REFINEMENT: การสื่อสารผ่านออร่าสี */
          error:
            "group-[.toast]:text-red-400 group-[.toast]:border-red-500/20 group-[.toaster]:bg-red-950/50",
          success:
            "group-[.toast]:text-green-400 group-[.toast]:border-green-500/20 group-[.toaster]:bg-green-950/50",
          warning:
            "group-[.toast]:text-yellow-400 group-[.toast]:border-yellow-500/20 group-[.toaster]:bg-yellow-950/50",
          info: "group-[.toast]:text-blue-400 group-[.toast]:border-blue-500/20 group-[.toaster]:bg-blue-950/50",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
