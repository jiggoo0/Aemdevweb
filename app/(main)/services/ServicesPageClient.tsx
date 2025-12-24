// app/(main)/services/ServicesPageClient.tsx
"use client"

import React from "react"
import ServiceCard from "@/components/Services"
import { ServiceItem } from "@/data/servicesData"

export default function ServicesPageClient({
  services,
}: {
  services: ServiceItem[]
}) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
