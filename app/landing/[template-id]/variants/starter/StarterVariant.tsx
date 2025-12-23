/** @format */
import React from "react"
// 🟢 แก้ไข Path จาก ../ เป็น ../../ เพื่อถอยออกไปหาโฟลเดอร์ types
import { StarterTemplateProps } from "../../types"
import StarterTemplate from "./template"

interface Props {
  data: StarterTemplateProps
}

export default function StarterVariant({ data }: Props) {
  // หากในอนาคตมี MobileTemplate สามารถแยกเงื่อนไขการ Render ตรงนี้ได้
  return <StarterTemplate data={data} />
}
