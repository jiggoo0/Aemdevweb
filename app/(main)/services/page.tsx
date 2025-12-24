/** @format */

import { Metadata } from "next"
import Services from "@/components/Services"
import { servicesData } from "@/data/servicesData"

export const metadata: Metadata = {
  title: "Services | AEMDEVWEB",
  description:
    "Precision website templates for clinic, cafe, real estate, construction, and SME businesses.",
}

export default function ServicesPage() {
  return (
    <main className="relative">
      <Services services={servicesData} />
    </main>
  )
}