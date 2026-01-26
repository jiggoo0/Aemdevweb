/** @format */

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  tag?: string
}

export interface ShopMasterData {
  navbar: {
    logo: string
    categories: string[]
  }
  hero: {
    title: string
    description: string
    cta: string
    image: string
  }
  trending: {
    title: string
    products: Product[]
  }
  promo: {
    title: string
    subtitle: string
    image: string
  }
  footer: {
    about: string
    links: { label: string; href: string }[]
  }
}

export const data: ShopMasterData = {
  navbar: {
    logo: "SHOPMASTER",
    categories: ["เสื้อผ้า", "อุปกรณ์ไอที", "ของแต่งบ้าน", "แกดเจ็ต"],
  },
  hero: {
    title: "NEW ARRIVAL 2026",
    description:
      "ยกระดับการใช้ชีวิตด้วยสินค้าคุณภาพที่คัดสรรมาเพื่อคุณโดยเฉพาะ",
    cta: "ช้อปเลยตอนนี้",
    image: "/images/templates/shopmasterpro.webp",
  },
  trending: {
    title: "สินค้าขายดีประจำสัปดาห์",
    products: [
      {
        id: "p1",
        name: "Wireless Headphone Pro",
        price: 2590,
        originalPrice: 3200,
        image: "/images/showcase/placeholder.webp",
        tag: "Sale",
      },
      {
        id: "p2",
        name: "Minimalist Desk Lamp",
        price: 890,
        image: "/images/showcase/placeholder.webp",
        tag: "Hot",
      },
      {
        id: "p3",
        name: "Smart Watch Series X",
        price: 5400,
        image: "/images/showcase/placeholder.webp",
      },
      {
        id: "p4",
        name: "Ergonomic Mouse",
        price: 1200,
        originalPrice: 1500,
        image: "/images/showcase/placeholder.webp",
        tag: "New",
      },
    ],
  },
  promo: {
    title: "FLASH SALE 50%",
    subtitle: "เฉพาะสมาชิก AEMDEVWEB รับสิทธิ์ก่อนใครวันนี้",
    image: "/images/templates/project-01.webp",
  },
  footer: {
    about:
      "ร้านค้าออนไลน์ที่รวบรวมสินค้าคุณภาพจากทั่วทุกมุมโลก พร้อมบริการส่งไวถึงหน้าบ้านคุณ",
    links: [
      { label: "ติดตามคำสั่งซื้อ", href: "#" },
      { label: "นโยบายการคืนสินค้า", href: "#" },
      { label: "คำถามที่พบบ่อย", href: "#" },
      { label: "ติดต่อทีมงาน", href: "#" },
    ],
  },
}
