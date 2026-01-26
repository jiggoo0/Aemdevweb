/** @format */

export interface HotelResortData {
  navbar: {
    logo: string
    links: { label: string; href: string }[]
  }
  hero: {
    title: string
    subtitle: string
    cta: string
    bgImage: string
  }
  about: {
    heading: string
    description: string
    image: string
    stats: { label: string; value: string }[]
  }
  amenities: {
    title: string
    items: {
      icon: "wifi" | "coffee" | "pool" | "spa"
      title: string
      desc: string
    }[]
  }
  footer: {
    description: string
    contact: { address: string; phone: string; email: string }
    socials: { platform: string; href: string }[]
  }
}

export const data: HotelResortData = {
  navbar: {
    logo: "SERENE RESORT",
    links: [
      { label: "หน้าแรก", href: "#" },
      { label: "เกี่ยวกับเรา", href: "#about" },
      { label: "บริการ", href: "#amenities" },
      { label: "ติดต่อ", href: "#contact" },
    ],
  },
  hero: {
    title: "THE ULTIMATE SERENITY",
    subtitle: "พักผ่อนระดับห้าดาว ท่ามกลางบรรยากาศที่ออกแบบมาเพื่อคุณ",
    cta: "จองห้องพักตอนนี้",
    bgImage: "/images/templates/hotelresort.webp",
  },
  about: {
    heading: "พักผ่อนอย่างมีความหมาย",
    description:
      "เราใส่ใจทุกรายละเอียด ตั้งแต่ก้าวแรกที่คุณเข้ามา เพื่อให้มั่นใจว่านี่จะเป็นการพักผ่อนที่ดีที่สุด",
    image: "/images/showcase/placeholder.webp",
    stats: [
      { label: "Guest Rating", value: "4.9/5" },
      { label: "Luxury Rooms", value: "50+" },
    ],
  },
  amenities: {
    title: "บริการพิเศษของเรา",
    items: [
      {
        icon: "pool",
        title: "Infinity Pool",
        desc: "สระว่ายน้ำระบบเกลือวิวหลักล้าน",
      },
      { icon: "spa", title: "Luxury Spa", desc: "นวดผ่อนคลายโดยผู้เชี่ยวชาญ" },
      {
        icon: "coffee",
        title: "Fine Dining",
        desc: "รสชาติอาหารระดับมาตรฐานสากล",
      },
      {
        icon: "wifi",
        title: "High Speed",
        desc: "เชื่อมต่อโลกออนไลน์ได้ไม่สะดุด",
      },
    ],
  },
  footer: {
    description:
      "รีสอร์ทที่ให้ความสำคัญกับการพักผ่อนที่แท้จริง พร้อมบริการที่เหนือระดับ",
    contact: {
      address: "123 หมู่ 5 ต.นาคำ อ.เมือง จ.ตาก",
      phone: "055-123-456",
      email: "hello@sereneresort.com",
    },
    socials: [
      { platform: "Facebook", href: "#" },
      { platform: "Instagram", href: "#" },
    ],
  },
}
