/** @format */
import React from "react"
import CafeTemplate from "./template" // ✅ ใช้ Relative Path เพื่อความแม่นยำภายใน Folder
import { CafeTemplateProps } from "../../types" // ✅ ชี้ไปที่โฟลเดอร์ types/index.ts ที่เราสร้างใหม่

interface Props {
  data?: CafeTemplateProps
}

const CafeVariant: React.FC<Props> = ({ data }) => {
  // Guard Clause: ป้องกัน Runtime Error
  if (!data) return null

  // ✅ มั่นใจว่าข้อมูลพื้นฐานครบถ้วนก่อนส่งให้ Template
  const safeData: CafeTemplateProps = {
    ...data,
    hero: {
      title: data.hero?.title || "Welcome to Cafe",
      subtitle: data.hero?.subtitle || "",
      image: data.hero?.image,
    },
    gallery: data.gallery || [],
    menu: data.menu || [],
    openingHours: data.openingHours || [],
    socialProof: data.socialProof || [],
  }

  return <CafeTemplate data={safeData} />
}

export default CafeVariant
