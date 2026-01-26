/** @format */
import { FacebookAdsData } from "./schema"

export const facebookAdsData: FacebookAdsData = {
  // --- 1. ส่วนข้อมูลเชิงเทคนิคตามสัญญา SEO (Mandatory) ---
  seo: {
    title:
      "ผู้เชี่ยวชาญยิงแอด Facebook เพิ่ม ROAS และยอดขายด้วยข้อมูล | AEMDEVWEB",
    description:
      "รับวางแผนยิงโฆษณา Facebook และ Instagram ขั้นสูง ติดตั้งระบบวัดผล Conversion API และจัดการ Funnel เพื่อเปลี่ยนงบโฆษณาให้เป็นกำไรที่วัดผลได้จริง",
    keywords: [
      "รับยิงแอด Facebook",
      "Facebook Ads Specialist",
      "ยิงโฆษณาออนไลน์",
      "เพิ่มยอดขาย",
      "ROAS",
    ],
    ogImage: "/images/templates/facebookadsexpert-og.webp",
  },

  // --- 2. ส่วนเนื้อหาหน้าเว็บไซต์ (Visual Content) ---
  hero: {
    title: "ยกระดับยอดขายด้วยการยิงโฆษณาที่วัดผลได้จริง",
    description:
      "หยุดการตำน้ำพริกละลายแม่น้ำ เปลี่ยนงบโฆษณาให้เป็นกำไรด้วยการจัดการข้อมูลและกลยุทธ์การเจาะกลุ่มเป้าหมายที่แม่นยำระดับรายบุคคล",
    cta: "ขอรับคำปรึกษากลยุทธ์",
    image: "/images/templates/facebookadsexpert.webp",
  },

  stats: [
    {
      label: "ROAS เฉลี่ย",
      value: "8.5x",
      subValue: "จากอุตสาหกรรมอาหารเสริม",
    },
    {
      label: "งบประมาณที่ดูแล",
      value: "50M+",
      subValue: "รวมกว่า 100 บัญชีโฆษณา",
    },
    {
      label: "ยอดขายที่สร้างได้",
      value: "250M+",
      subValue: "ภายในระยะเวลา 1 ปี",
    },
  ],

  services: [
    {
      title: "การจัดการบัญชีโฆษณา",
      description:
        "ดูแลและปรับแต่งโฆษณารายวันเพื่อให้ได้ค่าคลิกและยอดขายที่คุ้มค่าที่สุด",
      features: [
        "วิเคราะห์กลุ่มเป้าหมายเชิงลึก",
        "ทดสอบรูปแบบโฆษณา (A/B Testing)",
        "รายงานผลรายสัปดาห์",
      ],
    },
    {
      title: "วางโครงสร้างการติดตามผล",
      description:
        "ติดตั้งระบบที่ช่วยให้รู้ว่ายอดขายมาจากโฆษณาตัวไหนอย่างแม่นยำ",
      features: [
        "ติดตั้ง Conversion API",
        "ตั้งค่า Custom Audience",
        "ระบบ Remarketing ขั้นสูง",
      ],
    },
  ],

  strategy: [
    {
      step: "01",
      title: "Data Audit",
      desc: "ตรวจสอบข้อมูลหลังบ้านและโครงสร้างบัญชีเดิมเพื่อหาจุดรั่วไหลของงบประมาณ",
    },
    {
      step: "02",
      title: "Funnel Design",
      desc: "วางเส้นทางการซื้อของลูกค้าตั้งแต่การเห็นครั้งแรกจนถึงการตัดสินใจซื้อซ้ำ",
    },
    {
      step: "03",
      title: "Scale Up",
      desc: "เพิ่มงบประมาณในส่วนที่สร้างกำไรและขยายฐานลูกค้าใหม่ด้วยกลุ่มที่คล้ายคลึงกัน",
    },
  ],
}
