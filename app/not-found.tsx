/**
 * [SYSTEM MODULE]: NOT_FOUND_UI v18.0.1 (DYNAMIC_STABILIZED)
 * [STRATEGY]: Technical Resilience | Connection-Aware Rendering
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { connection } from "next/server"; // ✅ เพิ่มการนำเข้า connection

/**
 * @component NotFound
 * @description หน้าจอแสดงผลกรณีไม่พบหน้าเว็บ (HTTP 404)
 * [UPDATE]: รองรับ Dynamic Date ผ่านการ await connection() ตามกฎ Next.js 15/16
 */
export default async function NotFound() { // ✅ เปลี่ยนเป็น async function
  // [DYNAMIC_SIGNAL]: บอก Next.js ให้ข้าม Static Prerendering สำหรับโหนดนี้
  await connection(); 

  // [DETERMINISTIC_RECOVERY]: ตอนนี้สามารถเรียกใช้ Date ได้อย่างปลอดภัย
  const traceDate = new Date().toISOString().split("T")[0];

  return (
    // ... โครงสร้าง UI เดิมของคุณ ...
    <div className="bg-surface-main ...">
       {/* UI ส่วนอื่นๆ เหมือนเดิมทั้งหมด */}
       
       {/* --- 04. SYSTEM TRACE META --- */}
       <div className="border-border mt-24 w-full border-t pt-10">
          <div
            className="text-text-muted/40 flex flex-col items-center justify-between gap-4 font-mono text-[9px] font-black tracking-[0.4em] uppercase md:flex-row"
          >
            <span>Node_Status: 404_UNREACHABLE</span>
            <div className="bg-brand-primary/20 hidden h-1 w-1 rounded-full md:block" />
            <span>
              Trace_ID: {traceDate}_{SITE_CONFIG.project.version} // DYNAMIC_RECOVERY
            </span>
          </div>
        </div>
    </div>
  );
}
