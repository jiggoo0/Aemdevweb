// components/ui/skeleton-grid.tsx

import React from "react";
// [FIX]: แก้จาก "skeleton-card" เป็น "SkeletonCard" ให้ตรงกับชื่อไฟล์จริง
import SkeletonCard from "@/components/ui/SkeletonCard"; 

interface SkeletonGridProps {
  count?: number;
  aspectRatio?: "video" | "square" | "portrait";
}

export default function SkeletonGrid({ 
  count = 6, 
  aspectRatio = "video" 
}: SkeletonGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard 
          key={index} 
          aspectRatio={aspectRatio}
          className={`opacity-[${1 - index * 0.1}] animation-delay-${index * 100}`}
        />
      ))}
    </div>
  );
}
