/** @format */

import { EventMagicData } from "./schema"

/**
 * eventMagicData - ข้อมูลชุดเว็บงานอีเวนต์และงานแต่ง (Celebration Edition)
 * แนวคิด: สวยสะกดตา โหลดไวระดับปีศาจ แชร์ความประทับใจให้คนสำคัญได้ทันใจ
 * โดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const eventMagicData: EventMagicData = {
  seo: {
    title: "เว็บงานอีเวนต์และงานแต่งสเปกปีศาจ โหลดไวแชร์ง่าย | AEMDEVWEB",
    description:
      "เปลี่ยนวันสำคัญให้เป็นหน้าเว็บที่สวยที่สุด โหลดไวระดับเสี้ยววินาที พร้อมออนไลน์ใน 24 ชม. เพื่อให้ทุกคนเข้าถึงความทรงจำดีๆ ได้ทันที",
    keywords: [
      "ทำเว็บงานแต่ง",
      "เว็บไซต์อีเวนต์",
      "การ์ดเชิญดิจิทัล",
      "เว็บโหลดไว",
      "Next.js 16",
    ],
    ogImage: "/images/templates/project-01.webp",
  },
  navigation: {
    logo: "EVENT.MAGIC",
    cta: "จองคิวทำเว็บกับนายเอ็ม",
  },
  hero: {
    title: "ให้วันสำคัญของคุณ",
    highlight: "สวยสะกดใจบนโลกออนไลน์",
    description:
      "ไม่ใช่แค่หน้าเว็บ แต่คือพื้นที่เก็บความประทับใจที่โหลดไวที่สุดในยุค 2026 พร้อมแชร์ให้แขกคนพิเศษเห็นความสวยงามได้ในคลิกเดียวครับ",
    date: "14 กุมภาพันธ์ 2026",
    location: "Grand Ballroom, Bangkok",
  },
  gallery: {
    title: "ช่วงเวลาที่น่าจดจำ",
    images: [
      { url: "/images/templates/project-01.webp", alt: "บรรยากาศสุดพิเศษ 1" },
      { url: "/images/templates/project-01.webp", alt: "บรรยากาศสุดพิเศษ 2" },
      { url: "/images/templates/project-01.webp", alt: "บรรยากาศสุดพิเศษ 3" },
    ],
  },
  details: {
    title: "ลำดับเวลาสำคัญ",
    items: [
      { time: "18:00", activity: "เริ่มเปิดลงทะเบียนและรับของที่ระลึก" },
      { time: "19:00", activity: "พิธีเปิดงานและกล่าวต้อนรับแขกผู้เกียรติ" },
      { time: "20:00", activity: "ช่วงเวลาสังสรรค์พร้อมดนตรีสดสุดพิเศษ" },
    ],
  },
  footer: {
    thankYouMessage: "ขอบคุณที่ร่วมเป็นส่วนหนึ่งในวันสำคัญของเรา",
    contactLine: "@aemdevweb",
  },
}
