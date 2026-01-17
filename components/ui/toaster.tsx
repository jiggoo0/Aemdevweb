/** @format */
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

/**
 * 🔔 Toaster: Luminous Distribution Engine
 * ทำหน้าที่กระจายการแจ้งเตือน (Toasts) สู่หน้าจออย่างมีระดับ
 * ปรับปรุง: เพิ่มระยะห่างแบบพรีเมียมและการจัดกลุ่มเนื้อหาให้ดูสะอาดตา
 */
export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            {/* 📦 Luminous Content Wrapper */}
            <div className="flex flex-1 flex-col gap-1.5">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>

            {/* ⚡ Action Button (ถ้ามี) */}
            {action && <div className="ml-2 shrink-0">{action}</div>}

            <ToastClose />
          </Toast>
        )
      })}

      {/* 🌌 Viewport: กำหนดตำแหน่งการปรากฏของแสงแจ้งเตือน */}
      <ToastViewport className="gap-3" />
    </ToastProvider>
  )
}
