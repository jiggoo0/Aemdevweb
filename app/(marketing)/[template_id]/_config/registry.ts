/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: TEMPLATE REGISTRY MASTER SYSTEM
// Path: app/(marketing)/[template_id]/_config/registry.ts
// Identity: Central Router for Multi-Industry Templates
// ----------------------------------------------------

import React from "react"

// 1. IMPORT CONFIGS
import { clinicConfig } from "../_templates/clinic/config"
import { cafeConfig } from "../_templates/cafe/config"
import { realEstateConfig } from "../_templates/realestate/config"
import { constructionConfig } from "../_templates/construction/config"
import { starterConfig } from "../_templates/starter/config"

// ✅ ใช้ Alias 'woodBusinessConfig' เพื่อไม่ให้ซ้ำกับ starterConfig
import { starterConfig as woodBusinessConfig } from "../_templates/WoodBusiness/config"

// 2. IMPORT TEMPLATES
import ClinicTemplate from "../_templates/clinic/ClinicTemplate"
import CafeTemplate from "../_templates/cafe/CafeTemplate"
import RealEstateTemplate from "../_templates/realestate/RealEstateTemplate"
import ConstructionTemplate from "../_templates/construction/ConstructionTemplate"
import StarterTemplate from "../_templates/starter/StarterTemplate"

// ✅ นำเข้า Template ของสุโขทัยค้าไม้
import WoodBusinessTemplate from "../_templates/WoodBusiness/WoodBusinessTemplate"

// 3. DEFINE TYPES
export interface TemplateEntry {
  config: {
    themeColor?: string
    metadata: {
      title: string
      description: string
      ogImage?: string
    }
    contact?: any
    products?: any[]
    [key: string]: any
  }
  component: React.ComponentType<any>
}

// 4. MASTER REGISTRY
export const TEMPLATE_REGISTRY: Record<string, TemplateEntry> = {
  clinic: {
    config: clinicConfig,
    component: ClinicTemplate,
  },
  cafe: {
    config: cafeConfig,
    component: CafeTemplate,
  },
  realestate: {
    config: realEstateConfig,
    component: RealEstateTemplate,
  },
  construction: {
    config: constructionConfig,
    component: ConstructionTemplate,
  },
  starter: {
    config: starterConfig,
    component: StarterTemplate,
  },

  // 🪵 REGISTER: "สุโขทัยค้าไม้"
  // เข้าถึงได้ผ่าน URL: yourdomain.com/wood-business
  "wood-business": {
    config: woodBusinessConfig,
    component: WoodBusinessTemplate,
  },
}

/**
 * Helper function สำหรับดึงข้อมูล Template ตาม ID
 */
export const getTemplateData = (id: string): TemplateEntry | undefined => {
  return TEMPLATE_REGISTRY[id]
}
