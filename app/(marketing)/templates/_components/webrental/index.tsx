/** @format */

import React from "react"
import { WebRentalData } from "./schema"
import { RentalNavbar } from "./_parts/RentalNavbar"
import { RentalHero } from "./_parts/RentalHero"
import { RentalFeatures } from "./_parts/RentalFeatures"
import { RentalShowcase } from "./_parts/RentalShowcase"
import { RentalPricing } from "./_parts/RentalPricing"
import { RentalFooter } from "./_parts/RentalFooter"

/**
 * Web Rental Platform Template
 * หน้าขายบริการเช่าเว็บไซต์สำเร็จรูป เน้นความคุ้มค่าและประสิทธิภาพ
 */
export const WebRentalTemplate: React.FC<{ data: WebRentalData }> = ({
  data,
}) => {
  return (
    <div className="web-rental-template bg-white text-left font-sans text-slate-900 selection:bg-indigo-100">
      {/* ส่วนนำทางหลัก */}
      <RentalNavbar data={data.navigation} />

      <main>
        {/* ส่วนพาดหัวและราคาเริ่มต้น */}
        <RentalHero data={data.hero} />

        {/* ส่วนจุดเด่นที่เหนือกว่า Wix/LnwPro */}
        <RentalFeatures data={data.features} />

        {/* ส่วนโชว์เทมเพลตในระบบ */}
        <RentalShowcase data={data.showcase} />

        {/* ส่วนตารางราคาเช่ารายเดือน */}
        <RentalPricing data={data.pricing} />
      </main>

      {/* ส่วนท้ายและข้อมูลติดต่อ */}
      <RentalFooter data={data.footer} />
    </div>
  )
}
