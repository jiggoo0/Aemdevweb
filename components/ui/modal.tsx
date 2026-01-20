/** @format */
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"

const Modal = DialogPrimitive.Root
const ModalTrigger = DialogPrimitive.Trigger
const ModalPortal = DialogPrimitive.Portal
const ModalClose = DialogPrimitive.Close

/**
 * 🌌 ModalOverlay: Midnight Ambient
 * ปรับให้มีความเบลอและจางลงแบบพรีเมียม เพื่อขับเน้นตัว Modal ให้เด่นชัด
 */
const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "bg-background/80 fixed inset-0 z-50 backdrop-blur-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
ModalOverlay.displayName = "ModalOverlay"

/**
 * 💎 ModalContent: Luminous Glass Edition
 * ใช้ Glass-card style พร้อมระบบแสง Aurora รอบขอบ Modal
 */
const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 p-10 duration-500",
        "glass-card shadow-luminous rounded-4xl border-white/10",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2",
        "data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%]",
        className
      )}
      {...props}
    >
      {/* 🌌 Internal Aurora Glow Effect */}
      <div className="aurora-bg pointer-events-none top-0 right-0 h-40 w-40 opacity-[0.05]" />

      {children}

      <DialogPrimitive.Close className="absolute top-6 right-6 rounded-2xl border border-white/5 bg-white/5 p-2 text-slate-400 opacity-70 transition-all hover:bg-white/10 hover:text-white hover:opacity-100 focus:outline-none">
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </ModalPortal>
))
ModalContent.displayName = "ModalContent"

const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-3 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
ModalHeader.displayName = "ModalHeader"

const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "mt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-4",
      className
    )}
    {...props}
  />
)
ModalFooter.displayName = "ModalFooter"

/**
 * ✍️ ModalTitle: High-Contrast Typography
 * ใช้ฟอนต์ Prompt/Black เพื่อความชัดเจนและพรีเมียม
 */
const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "font-prompt flex items-center gap-3 text-3xl font-black tracking-tighter text-white uppercase",
      className
    )}
  >
    <Sparkles className="text-aurora-cyan h-6 w-6 animate-pulse" />
    <span {...props} />
  </DialogPrimitive.Title>
))
ModalTitle.displayName = "ModalTitle"

/**
 * 📝 ModalDescription: Gentle Humanistic Font
 * ใช้ฟอนต์ Anuphan เพื่อให้อ่านง่ายและลดความแข็งกระด้าง
 */
const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "font-anuphan text-base leading-relaxed font-medium text-slate-400 opacity-90",
      className
    )}
    {...props}
  />
))
ModalDescription.displayName = "ModalDescription"

export {
  Modal,
  ModalPortal,
  ModalOverlay,
  ModalTrigger,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
}
