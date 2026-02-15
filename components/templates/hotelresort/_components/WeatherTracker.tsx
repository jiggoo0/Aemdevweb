"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface WeatherStats {
  temp: number;
  humidity: number;
  windSpeed: number;
  visibility: string;
}

/**
 * @component WeatherTracker
 * @description ระบบจำลองการตรวจวัดสภาพแวดล้อมแบบ Real-time
 * ใช้สำหรับแสดงผลข้อมูลสภาพอากาศในพื้นที่ด้วยสไตล์ Technical Blueprint
 */
export const WeatherTracker = ({ location = "Khao Yai" }: { location?: string }) => {
  const [stats, setStats] = useState<WeatherStats>({
    temp: 24.5,
    humidity: 65,
    windSpeed: 12,
    visibility: "9.5km",
  });

  // [LOGIC]: จำลองการผันผวนของข้อมูลแบบ Real-time (Neural Wiggle Simulation)
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        temp: +(prev.temp + (Math.random() * 0.4 - 0.2)).toFixed(1),
        humidity: Math.floor(prev.humidity + (Math.random() * 2 - 1)),
        windSpeed: +(prev.windSpeed + (Math.random() * 1 - 0.5)).toFixed(1),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-500",
        "bg-[var(--surface-card)]/80 backdrop-blur-xl",
        "border-[var(--border-width)] border-[var(--foreground)]/10 shadow-2xl hover:border-[var(--brand-primary)]/30",
        "group rounded-[var(--radius)]",
      )}
    >
      {/* --- 1. Technical Header: Live Status --- */}
      <div className="flex items-center justify-between border-b border-[var(--foreground)]/5 bg-[var(--brand-primary)]/5 p-5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </div>
          <span className="font-mono text-[9px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
            Atmosphere_Node: Live
          </span>
        </div>
        <IconRenderer name="Activity" size={14} className="opacity-30" />
      </div>

      {/* --- 2. Main Readout: Primary Data --- */}
      <div className="space-y-8 p-8">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="font-mono text-[10px] tracking-widest uppercase italic opacity-40">
              // Location_Identity
            </p>
            <h4 className="font-[family-name:var(--font-primary)] text-2xl leading-none font-black uppercase italic">
              {location}.sys
            </h4>
          </div>
          <div className="text-right">
            <motion.p
              key={stats.temp}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[family-name:var(--font-primary)] text-5xl font-black tracking-tighter text-[var(--brand-primary)] italic"
            >
              {stats.temp}°C
            </motion.p>
          </div>
        </div>

        {/* --- 3. Grid Metrics: Sensor Array --- */}
        <div className="grid grid-cols-2 gap-[var(--border-width)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--foreground)]/10">
          {[
            { label: "Humidity", val: `${stats.humidity}%`, icon: "Droplets" },
            { label: "Wind_Vel", val: `${stats.windSpeed} km/h`, icon: "Wind" },
            { label: "Visibility", val: stats.visibility, icon: "Eye" },
            { label: "Cloud_Cover", val: "12%", icon: "Cloud" },
          ].map((item, i) => (
            <div
              key={i}
              className="group/item flex flex-col space-y-2 bg-[var(--surface-card)] p-4"
            >
              <div className="flex items-center gap-2 opacity-30 transition-opacity group-hover/item:opacity-100">
                <IconRenderer
                  name={item.icon as IconName} // [FIXED]: กำจัด any ด้วยการ Cast เป็น IconName
                  size={12}
                  className="text-[var(--brand-primary)]"
                />
                <span className="font-mono text-[8px] tracking-tighter uppercase">
                  {item.label}
                </span>
              </div>
              <p className="font-[family-name:var(--font-primary)] text-lg font-black uppercase italic">
                {item.val}
              </p>
            </div>
          ))}
        </div>

        {/* --- 4. Technical Footer: Metadata --- */}
        <div className="flex items-center justify-between pt-4 font-mono text-[8px] tracking-widest uppercase opacity-30">
          <p>Registry_Sync: 0.{Math.floor(Date.now() / 1000000)}s</p>
          <p>STABLE_ENVIRONMENT</p>
        </div>
      </div>

      {/* [DECOR]: Blueprint Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
};
