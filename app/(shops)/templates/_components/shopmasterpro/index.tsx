/** @format */

import React from "react";
import { ShopMasterData } from "./schema";
import { ShopNavbar } from "./_parts/ShopNavbar";
import { ShopHero } from "./_parts/ShopHero";
import { ShopStats } from "./_parts/ShopStats";
import { ShopProducts } from "./_parts/ShopProducts";
import { ShopFooter } from "./_parts/ShopFooter";

/**
 * ShopMasterTemplate - วางโครงสร้างหลักของหน้าคลังสินค้า
 * ปรับปรุงการจัดวางเพื่อความแม่นยำของระบบเมนูและพิกัดการคลิก
 * [FIX]: เปลี่ยนพิกัดการส่งออกเป็น Export Default เพื่อล้าง Error ใน Registry
 */
const ShopMasterTemplate: React.FC<{ data: ShopMasterData }> = ({ data }) => {
  return (
    <div className="font-body relative bg-white text-slate-900 selection:bg-orange-100">
      {/* 1. พิกัดแถบนำทาง: แยกส่วนการทำงานออกจากเนื้อหาหลักเพื่อความไหลลื่น */}
      <ShopNavbar data={data.navigation} />

      {/* 2. ส่วนเนื้อหาหลัก: วางโครงสร้างเน้นการทำอันดับบน Google และพิกัดสินค้าที่ชัดเจน */}
      <main className="relative">
        <ShopHero data={data.hero} />
        <ShopStats data={data.benefits} />
        <ShopProducts data={data.products} />
      </main>

      {/* 3. ส่วนท้ายระบบ: รวบรวมข้อมูลติดต่อและพิกัดธุรกิจสำหรับกลุ่ม SME */}
      <ShopFooter data={data.footer} logo={data.navigation.logo} />
    </div>
  );
};

// ส่งออกพิกัดหลักเพื่อให้ระบบ Registry ดึงไปใช้ได้ทันที
export default ShopMasterTemplate;
