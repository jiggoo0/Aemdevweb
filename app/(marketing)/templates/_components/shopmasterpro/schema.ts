/** @format */
import { SEOContract } from "../../_contracts/seo"

export interface ShopMasterData extends SEOContract {
  navigation: {
    logo: string
    links: { label: string; href: string }[]
    cartCount: number
  }
  hero: {
    title: string
    description: string
    cta: string
    image: string
  }
  categories: {
    name: string
    image: string
    count: string
  }[]
  products: {
    name: string
    price: string
    originalPrice?: string
    tag?: string
    image: string
    rating: number
  }[]
  benefits: {
    title: string
    desc: string
  }[]
  footer: {
    description: string
    contact: {
      phone: string
      line: string
      email: string
    }
    payments: string[]
  }
}
