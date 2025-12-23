/** @format */
import React from "react"
import ClinicTemplate from "./template"
import { ClinicTemplateProps } from "../../types"

interface Props {
  data?: ClinicTemplateProps
}

const ClinicVariant: React.FC<Props> = ({ data }) => {
  if (!data) return null

  const safeData: ClinicTemplateProps = {
    ...data,
    beforeAfter: data.beforeAfter || [],
    doctors: data.doctors || [],
    socialProof: data.socialProof || [],
  }

  return <ClinicTemplate data={safeData} />
}

export default ClinicVariant
