/** @format */
import React from "react"
import ConstructionTemplate from "./template"
import { ConstructionTemplateProps } from "../../types"

interface Props {
  data?: ConstructionTemplateProps
}

const ConstructionVariant: React.FC<Props> = ({ data }) => {
  if (!data) return null

  const safeData: ConstructionTemplateProps = {
    ...data,
    projects: data.projects || [],
    steps: data.steps || [],
  }

  return <ConstructionTemplate data={safeData} />
}

export default ConstructionVariant
