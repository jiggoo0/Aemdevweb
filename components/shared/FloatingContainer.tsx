/**
 * [SHARED COMPONENT]: FLOATING_CONTAINER v1.0.0 (PHYSICS_CORE)
 * [STRATEGY]: Scroll-Aware Visibility | AnimatePresence Lifecycle
 * [MAINTAINER]: AEMZA MACKS
 */

"use client";

import React, { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingContainerProps {
  readonly children: ReactNode;
  readonly triggerY?: number;
  readonly className?: string;
  readonly id?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

export const FloatingContainer = ({
  children,
  triggerY = 100,
  className,
  id,
}: FloatingContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > triggerY);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerY]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          id={id}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className={cn("fixed z-50", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
