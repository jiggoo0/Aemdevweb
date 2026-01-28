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
 * ModalOverlay: Midnight Ambient
 * ปรับให้พื้นหลังมีความนวลตาและเบลออย่างพอดี เพื่อส่งให้ตัว Modal ดูเด่นและพรีเมียม
 */
const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
ModalOverlay.displayName = "ModalOverlay"

/**
 * ModalContent: Glass Edition
 * ใช้ดีไซน์กระจกโปร่งแสง พร้อมแสงเงาแบบ Aurora ที่นุ่มนวลรอบขอบ
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
        "fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-6 p-8 duration-500 md:p-10",
        "glass-card shadow-aurora rounded-[2rem] border-white/10",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2",
        "data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%]",
        className
      )}
      {...props}
    >
      {/* เอฟเฟกต์แสง Aurora ตกแต่งภายใน */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 bg-emerald-500/10 blur-[80px]" />

      {children}

      <DialogPrimitive.Close className="absolute top-6 right-6 rounded-xl border border-white/5 bg-white/5 p-2 text-slate-400 transition-all hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none">
        <X className="h-5 w-5" />
        <span className="sr-only">ปิดหน้าต่าง</span>
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
 * ModalTitle: ชัดเจนและภูมิฐาน
 * ใช้ฟอนต์หัวข้อที่เน้นความหนักแน่น เพื่อสื่อถึงความเชี่ยวชาญ
 */
const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "font-heading flex items-center gap-3 text-2xl font-black tracking-tighter text-white uppercase italic md:text-3xl",
      className
    )}
  >
    <Sparkles className="h-6 w-6 animate-pulse text-emerald-400" />
    <span {...props} />
  </DialogPrimitive.Title>
))
ModalTitle.displayName = "ModalTitle"

/**
 * ModalDescription: อ่านง่ายและเป็นมิตร
 * ใช้ฟอนต์เนื้อหาที่เน้นความสบายตา เพื่อให้ออกมาดูเข้าถึงง่าย
 */
const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      "font-body text-base leading-relaxed font-medium text-slate-400",
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
