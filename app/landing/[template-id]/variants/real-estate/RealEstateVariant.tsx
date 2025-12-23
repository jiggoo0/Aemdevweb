/** @format */
import React from "react"
import RealEstateTemplate from "./template"
import { RealEstateTemplateProps } from "../../types"

interface Props {
  data?: RealEstateTemplateProps
}

const RealEstateVariant: React.FC<Props> = ({ data }) => {
  if (!data) return null

  const safeData: RealEstateTemplateProps = {
    ...data,
    locationInsight: data.locationInsight || { title: "", content: "" },
    roomTypes: data.roomTypes || [],
  }

  return <RealEstateTemplate data={safeData} />
}

export default RealEstateVariant
