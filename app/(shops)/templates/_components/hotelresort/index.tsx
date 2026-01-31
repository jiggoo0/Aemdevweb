/** @format */

import React from "react";
import { HotelData } from "./schema";
import { HotelNavbar } from "./_parts/HotelNavbar";
import { HotelHero } from "./_parts/HotelHero";
import { HotelStats } from "./_parts/HotelStats";
import { HotelRooms } from "./_parts/HotelRooms";
import { HotelFooter } from "./_parts/HotelFooter";

/**
 * HotelResortTemplate: ระบบพิกัดหน้าเว็บสำหรับโรงแรมและที่พัก
 * แนวคิด: สถาปัตยกรรมที่เน้นความพรีเมียมและความลื่นไหลของข้อมูล
 * -------------------------------------------------------------------------
 * มาตรฐาน: Ultra-Deep Level 7 | Strategic System Node
 * [FIXED]: มั่นใจว่ามีการส่งออกเป็น export default เพื่อรองรับ Dynamic Import ใน Registry
 */
const HotelResortTemplate: React.FC<{ data: HotelData }> = ({ data }) => {
  return (
    <div className="hotel-template bg-white font-sans text-slate-900 selection:bg-emerald-100 dark:bg-[oklch(0.12_0.02_260)] dark:text-white/90">
      {/* ส่วนนำทาง: วางพิกัดโลโก้และเมนูพักผ่อน */}
      <HotelNavbar data={data.navigation} />

      {/* ส่วนพาดหัว: เน้นภาพลักษณ์จุดพักผ่อนที่สวยงามและชัดเจน */}
      <HotelHero data={data.hero} />

      {/* ส่วนสถิติ: แสดงพิกัดความมั่นใจและผลงานของโรงแรม */}
      <HotelStats data={data.stats} />

      {/* ส่วนห้องพัก: วางพิกัดรายการห้องให้ดูง่ายและน่าสนใจที่สุด */}
      <HotelRooms data={data.rooms} />

      {/* ส่วนท้าย: รวบรวมช่องทางการติดต่อและพิกัดแผนที่ */}
      <HotelFooter data={data.footer} logo={data.navigation.logo} />
    </div>
  );
};

/** * [CRITICAL EXPORT]: ต้องส่งออกเป็น Default
 * เพื่อให้ Registry เรียกใช้ .then((m) => m.default) ได้อย่างสมบูรณ์
 */
export default HotelResortTemplate;
