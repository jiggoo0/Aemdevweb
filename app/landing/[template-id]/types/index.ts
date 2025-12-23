/** @format */

/**
 * 🌍 รองรับ Multi-language (Thai/English) สำหรับ SME
 */
export interface MultiLangText {
  th: string
  en?: string
}

/**
 * 🧱 Base Props สำหรับทุก Template
 */
export interface BaseTemplateProps {
  id: string
  variant: "starter" | "cafe" | "clinic" | "construction" | "real-estate"
  name: string | MultiLangText
  primaryColor?: string
  lineId?: string
  phone?: string
  defaultLanguage?: "th" | "en"
  hero?: {
    title: string | MultiLangText
    subtitle: string | MultiLangText
    image: string
  }
  socialProof?: any[]
  testimonials?: any[]
}

/**
 * ☕ Cafe Template Props
 */
export interface CafeTemplateProps extends BaseTemplateProps {
  variant: "cafe"
  menu: Array<{
    name: string | MultiLangText
    price: string
    description?: string | MultiLangText
    image?: string
  }>
  gallery: string[]
  openingHours: Array<{
    day: string | MultiLangText
    time: string
  }>
  googleMapUrl: string
}

/**
 * 🏥 Clinic Template Props
 */
export interface ClinicTemplateProps extends BaseTemplateProps {
  variant: "clinic"
  doctors: Array<{
    name: string | MultiLangText
    specialty: string | MultiLangText
    image: string
    bio?: string | MultiLangText
  }>
  beforeAfter: Array<{
    before: string
    after: string
    label?: string | MultiLangText
  }>
  faq: Array<{
    question: string | MultiLangText
    answer: string | MultiLangText
  }>
}

/**
 * 🏗️ Construction Template Props
 */
export interface ConstructionTemplateProps extends BaseTemplateProps {
  variant: "construction"
  projects: Array<{
    title: string | MultiLangText
    category: string | MultiLangText
    image: string
  }>
  steps: Array<{
    title: string | MultiLangText
    description: string | MultiLangText
  }>
}

/**
 * 🏠 Real Estate Template Props
 */
export interface RealEstateTemplateProps extends BaseTemplateProps {
  variant: "real-estate"
  roomTypes: Array<{
    name: string | MultiLangText
    size: string
    price: string
    image: string
    features: string[]
  }>
  locationInsight: {
    title: string | MultiLangText
    description: string | MultiLangText
    mapImage?: string
    nearbyPlaces: Array<{
      name: string | MultiLangText
      distance: string
    }>
  }
}

/**
 * 🚀 Starter Template Props
 */
export interface StarterTemplateProps extends BaseTemplateProps {
  variant: "starter"
  features: Array<{
    title: string | MultiLangText
    description: string | MultiLangText
    icon?: string
  }>
  form: {
    title: string | MultiLangText
    fields: any[]
  }
}
