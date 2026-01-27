/** @format */

import React from "react"
import { ShopMasterData } from "./schema"
import { ShopNavbar } from "./_parts/ShopNavbar"
import { ShopHero } from "./_parts/ShopHero"
import { ShopStats } from "./_parts/ShopStats"
import { ShopProducts } from "./_parts/ShopProducts"
import { ShopFooter } from "./_parts/ShopFooter"

/**
 * ShopMasterTemplate - งานโครงสร้างหลักของเทมเพลตหน้าร้านค้า
 * ปรับปรุงการจัดวางเลเยอร์เพื่อให้ระบบเมนูแบบ Sticky ทำงานได้แม่นยำ 100%
 * พัฒนาโดย: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd) ภายใต้โครงการ AEMDEVWEB
 */
export const ShopMasterTemplate: React.FC<{ data: ShopMasterData }> = ({
  data,
}) => {
  return (
    <div className="font-body relative bg-white text-slate-900 selection:bg-orange-100">
      {/* 1. พิกัดแถบนำทาง: วางไว้นอก main เพื่อป้องกันปัญหาระนาบการคลิก */}
      <ShopNavbar data={data.navigation} />

      {/* 2. ส่วนเนื้อหาหลัก: วางโครงสร้างให้ลื่นไหลและรองรับ Organic Search */}
      <main className="relative">
        <ShopHero data={data.hero} />
        <ShopStats data={data.benefits} />
        <ShopProducts data={data.products} />
      </main>

      {/* 3. ส่วนท้ายระบบ: รวบรวมข้อมูลติดต่อและพิกัดธุรกิจสำหรับ SME */}
      <ShopFooter data={data.footer} logo={data.navigation.logo} />
    </div>
  )
}
