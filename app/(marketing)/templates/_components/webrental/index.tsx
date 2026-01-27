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
 * WebRentalTemplate - งานระบบเช่าเว็บไซต์รายเดือน
 * จัดการพิกัด Layout ให้รองรับเมนูแบบ Fixed และแก้ปัญหาการกดเมนูไม่ได้
 */
export const WebRentalTemplate: React.FC<{ data: WebRentalData }> = ({
  data,
}) => {
  return (
    <div className="web-rental-template font-anuphan relative z-0 bg-white text-left selection:bg-indigo-100">
      {/* 1. วางพิกัดเมนูนำทาง (Fixed) */}
      <RentalNavbar data={data.navigation} />

      {/* 2. เนื้อหาหลัก: ใส่ pt-24 เพื่อไม่ให้ Navbar ไปทับพิกัดการคลิกของ Hero */}
      <main className="relative pt-24 lg:pt-32">
        <RentalHero data={data.hero} />
        <RentalFeatures data={data.features} />
        <RentalShowcase data={data.showcase} />
        <RentalPricing data={data.pricing} />
      </main>

      {/* 3. ส่วนท้ายระบบงาน */}
      <RentalFooter data={data.footer} />
    </div>
  )
}
