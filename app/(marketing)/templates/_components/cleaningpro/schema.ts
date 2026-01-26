/** @format */
import { SEOContract } from "../../_contracts/seo"

export interface CleaningServiceData extends SEOContract {
  navigation: {
    links: { label: string; href: string }[]
    cta: string
  }
  hero: {
    title: string
    description: string
    cta: string
    image: string
  }
  highlights: {
    tag: string
    title: string
    description: string
  }
  services: {
    title: string
    price: string
    features: string[]
    isPopular?: boolean
  }[]
  trustPoints: {
    title: string
    desc: string
  }[]
  footer: {
    companyName: string
    about: string
    contact: {
      phone: string
      line: string
      address: string
    }
  }
}
