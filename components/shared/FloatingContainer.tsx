/**
 * [SHARED COMPONENT]: FLOATING_CONTAINER v1.1.1 (SERVER_OPTIMIZED)
 * [STRATEGY]: Throttled Scroll Listener | Pure CSS Transitions | Zero-Framer
 * [MAINTAINER]: AEMZA MACKS
 */

"use client";

import React, { useEffect, useState, type ReactNode, useCallback } from "react";
import { cn } from "@/lib/utils";

interface FloatingContainerProps {
  readonly children: ReactNode;
  readonly triggerY?: number;
  readonly className?: string;
  readonly id?: string;
}

export const FloatingContainer = ({
  children,
  triggerY = 100,
  className,
  id,
}: FloatingContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // [STRATEGY]: Throttled Scroll Logic
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > triggerY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [triggerY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      id={id}
      className={cn(
        "pointer-events-none fixed transform-gpu transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]",
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0",
        className,
      )}
    >
      {/* คืนค่า pointer-events เพื่อให้ปุ่มภายในคลิกได้ */}
      <div className={cn("pointer-events-auto", !isVisible && "pointer-events-none")}>
        {children}
      </div>
    </div>
  );
};
