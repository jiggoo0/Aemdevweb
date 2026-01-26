/** @format */

// ดึงข้อกำหนดชุดข้อมูลพื้นฐานสำหรับการทำอันดับ (SEO)
import { SEOContract } from "../../_contracts/seo"

/**
 * FacebookAdsData (Updated Edition)
 * รวมข้อมูลหน้าพรีวิวเข้ากับสัญญาข้อมูลชุดเชิงเทคนิค
 */
export interface FacebookAdsData extends SEOContract {
  hero: {
    title: string
    description: string
    cta: string
    image: string
  }
  stats: {
    label: string
    value: string
    subValue: string
  }[]
  services: {
    title: string
    description: string
    features: string[]
  }[]
  strategy: {
    step: string
    title: string
    desc: string
  }[]
}
