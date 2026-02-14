/**
 * [COMPONENT]: FLASH_SALE_TIMER v17.9.102 (GLASS_MORPHISM)
 * [STRATEGY]: Psychology of Urgency | Dynamic Glow | Hydration-Safe
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import { useState, useEffect, memo, useCallback } from "react";
import { Timer } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlashSaleTimerProps {
  readonly targetDate: string;
  readonly color?: string;
  readonly className?: string;
}

export const FlashSaleTimer = memo(
  ({ targetDate, color = "#e11d48", className }: FlashSaleTimerProps) => {
    // [STATE]: Time Left Calculation Logic
    const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    const [isMounted, setIsMounted] = useState(false);

    // [LOGIC]: Pure Function for Calculation
    const calculateTimeLeft = useCallback(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { hours: 0, minutes: 0, seconds: 0 };
    }, [targetDate]);

    useEffect(() => {
      setIsMounted(true);
      setTimeLeft(calculateTimeLeft());

      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    // [GUARD]: Skeleton Loading (ป้องกัน Layout Shift)
    if (!isMounted) {
      return (
        <div className={cn("mx-auto max-w-4xl px-4", className)}>
          <div className="h-32 w-full animate-pulse rounded-[2rem] border border-white/10 bg-white/5" />
        </div>
      );
    }

    const formatNumber = (num: number) => num.toString().padStart(2, "0");

    return (
      <div className={cn("mx-auto max-w-4xl px-4", className)}>
        {/* Glass Container */}
        <div
          className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[2.5rem] p-6 transition-all duration-500 hover:scale-[1.01] md:flex-row md:px-10 md:py-8"
          style={{
            backgroundColor: `${color}15`, // Opacity 15%
            borderColor: `${color}30`,
            borderWidth: "1px",
            boxShadow: `0 0 40px -10px ${color}30`,
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Dynamic Background Glow */}
          <div
            className="pointer-events-none absolute -top-[50%] -left-[20%] h-[200%] w-[150%] opacity-20"
            style={{
              background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
            }}
          />

          {/* Left Side: Header */}
          <div className="relative z-10 flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg backdrop-blur-md"
              style={{ backgroundColor: color, color: "white" }}
            >
              <Timer className="h-7 w-7 animate-[spin_10s_linear_infinite]" />
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tighter text-white uppercase italic drop-shadow-md md:text-3xl">
                Offer Ends Soon!
              </h3>
              <p className="text-sm font-bold tracking-wide text-white/80">
                ราคาพิเศษเฉพาะรอบนี้เท่านั้น
              </p>
            </div>
          </div>

          {/* Right Side: Timer Units */}
          <div className="relative z-10 flex items-center gap-3 md:gap-4">
            <TimeUnit value={formatNumber(timeLeft.hours)} label="HOURS" accentColor={color} />
            <Separator accentColor={color} />
            <TimeUnit value={formatNumber(timeLeft.minutes)} label="MINS" accentColor={color} />
            <Separator accentColor={color} />
            <TimeUnit
              value={formatNumber(timeLeft.seconds)}
              label="SECS"
              accentColor={color}
              isWarning
            />
          </div>
        </div>
      </div>
    );
  },
);

FlashSaleTimer.displayName = "FlashSaleTimer";

// Sub-component: Separator
const Separator = ({ accentColor }: { accentColor: string }) => (
  <div className="flex flex-col gap-2 pb-6">
    <div
      className="h-1.5 w-1.5 animate-pulse rounded-full"
      style={{ backgroundColor: accentColor }}
    />
    <div
      className="h-1.5 w-1.5 animate-pulse rounded-full"
      style={{ backgroundColor: accentColor }}
    />
  </div>
);

// Sub-component: Atomic Unit
function TimeUnit({
  value,
  label,
  accentColor,
  isWarning = false,
}: {
  value: string;
  label: string;
  accentColor: string;
  isWarning?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl font-black shadow-xl backdrop-blur-sm transition-all md:h-16 md:w-16 md:text-3xl",
          isWarning && "animate-[pulse_1s_ease-in-out_infinite]",
        )}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          color: accentColor,
          borderColor: isWarning ? accentColor : "transparent",
        }}
      >
        {value}
      </div>
      <span className="text-[9px] font-black tracking-[0.3em] text-white/60 uppercase">
        {label}
      </span>
    </div>
  );
}
