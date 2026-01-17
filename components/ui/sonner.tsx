/** @format */
"use client"

import * as React from "react"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
  // ✅ Fixed: Removed unused 'Sparkles' to clear ESLint error
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

/**
 * 🔔 Toaster: Luminous Notification Edition
 * ยกระดับการแจ้งเตือนด้วยระบบ Glassmorphism และ Aurora Glow
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      // 🎨 Custom Luminous Icons
      icons={{
        success: (
          <CircleCheckIcon className="text-aurora-emerald size-5 drop-shadow-[0_0_8px_rgba(130,255,180,0.5)]" />
        ),
        info: (
          <InfoIcon className="text-aurora-cyan size-5 drop-shadow-[0_0_8px_rgba(122,243,255,0.5)]" />
        ),
        warning: (
          <TriangleAlertIcon className="size-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
        ),
        error: (
          <OctagonXIcon className="size-5 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
        ),
        loading: (
          <Loader2Icon className="text-aurora-cyan size-5 animate-spin" />
        ),
      }}
      // 🛠️ Luminous Toast Styling
      toastOptions={{
        className:
          "font-anuphan text-base tracking-wide border-white/10 bg-slate-900/80 backdrop-blur-2xl text-white shadow-luminous rounded-2xl p-5 gap-4",
        descriptionClassName: "text-slate-400 font-medium opacity-80",
        actionButtonStyle: {
          backgroundColor: "var(--aurora-cyan)",
          color: "#020617",
          fontWeight: "900",
          borderRadius: "12px",
          fontFamily: "var(--font-prompt)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        },
        cancelButtonStyle: {
          backgroundColor: "rgba(255,255,255,0.05)",
          color: "white",
          borderRadius: "12px",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
