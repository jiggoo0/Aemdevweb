/** @format */
import { SeoServiceItem } from "@/types/seo"

/**
 * Advanced Schema Markup Data
 * เน้นการสื่อสารพิกัดข้อมูลเชิงลึกกับระบบ AI Search 2026
 */
export const advancedSchemaData: SeoServiceItem = {
  id: "seo-schema-004",
  slug: "advanced-schema-markup",
  title: "Advanced Schema Markup",
  subtitle: "สื่อสารกับระบบ AI ผ่านพิกัดรหัสโครงสร้างข้อมูล JSON-LD",
  description: "ฝังชุดรหัสระดับเทคนิคเพื่อให้ระบบการค้นหาแสดงผลแบบ Rich Results ช่วยเพิ่มพื้นที่หน้าจอและดึงดูดสายตาผู้ใช้งานบนหน้าผลการค้นหา",
  iconName: "Code2", 
  
  painPoints: [
    "ผลการค้นหาดูธรรมดาและไม่โดดเด่นเมื่อเทียบกับคู่แข่งในตลาด",
    "ข้อมูลราคา รีวิว หรือสถานะสินค้าไม่แสดงผลบนหน้า Google",
    "บอทสับสนและไม่เข้าใจประเภทเนื้อหาที่แท้จริงของระบบเว็บไซต์",
    "เสียโอกาสในการได้พื้นที่แสดงผลพิเศษ (Featured Snippets)"
  ],

  features: [
    "วางระบบรหัส Organization และ LocalBusiness ระดับสากล",
    "ติดตั้งพิกัดรหัส Review และ FAQ เพื่อดึงดูดอัตราการคลิก",
    "จัดการโครงสร้างรหัสสำหรับบทความและวิดีโอเชิงลึก",
    "ตรวจสอบความถูกต้องของรหัสผ่านระบบ Google Rich Results Test"
  ],

  benefits: [
    { 
      title: "Higher Click-Through Rate", 
      desc: "เพิ่มโอกาสที่ผู้ใช้งานจะคลิกเข้าสู่ระบบด้วยการแสดงผลที่โดดเด่นและชัดเจน" 
    },
    { 
      title: "Semantic Clarity", 
      desc: "ช่วยให้ระบบการค้นหาเข้าใจความหมายและประเภทของธุรกิจได้อย่างแม่นยำ 100%" 
    }
  ],

  pricing: {
    price: 9900,
    label: "9,900",
    suffix: "/ ระบบ"
  },

  faq: [
    { 
      question: "Schema Markup ช่วยให้อันดับดีขึ้นโดยตรงไหม?", 
      answer: "ช่วยให้บอทเข้าใจเนื้อหาได้ดีขึ้นและเพิ่มอัตราการคลิก ซึ่งเป็นปัจจัยสำคัญที่ส่งผลต่อการขยับอันดับในระยะยาวครับ" 
    }
  ]
}
