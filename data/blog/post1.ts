/** @format */
import { BlogPost } from "@/types/blog"

export const post1: BlogPost = {
  id: "1",
  slug: "why-restaurant-need-website",
  title: "ทำไมร้านอาหารยุค 2025 ต้องมีเว็บไซต์ มากกว่าแค่เพจ Facebook?",
  excerpt:
    "เจาะลึกเหตุผลที่เพจ Facebook อย่างเดียวไม่พออีกต่อไป และวิธีที่เว็บไซต์จะช่วยให้ร้านของคุณประหยัดค่า GP และรับออเดอร์ได้แม่นยำขึ้น",
  description:
    "บทวิเคราะห์เชิงกลยุทธ์สำหรับร้านอาหารยุคใหม่ ที่ต้องการลดการพึ่งพาแพลตฟอร์มและสร้างยอดขายระยะยาว",
  category: "Business",
  date: "20 ธันวาคม 2025",
  image:
    "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Blog/Blog1.webp",
  author: {
    name: "Strategic Team",
    avatar: "/images/profile/default-avatar.webp",
    role: "Business Consultant",
  },
  readTime: "5 นาที",
  content: `
    <p>ในยุคที่อัลกอริทึมของ Facebook ปรับเปลี่ยนอยู่ตลอดเวลา การฝากธุรกิจไว้กับแพลตฟอร์มเดียวจึงมีความเสี่ยงสูง...</p>
    
    <h3>1. เว็บไซต์คือบ้านที่คุณเป็นเจ้าของ</h3>
    <p>บน Facebook คุณคือผู้อาศัย แต่บนเว็บไซต์ คุณคือเจ้าของพื้นที่ 100% สามารถออกแบบประสบการณ์การสั่งซื้อที่ง่ายที่สุดให้ลูกค้าได้</p>

    <blockquote>
      "การมีเว็บไซต์ช่วยลดการพึ่งพาแพลตฟอร์มโซเชียล และสร้างความน่าเชื่อถือในระยะยาว"
    </blockquote>

    <h3>2. ประหยัดค่า GP</h3>
    <p>การรับออเดอร์ผ่านเว็บไซต์ของตัวเอง ช่วยให้ร้านไม่ต้องเสียส่วนแบ่งให้แอปเดลิเวอรี่ในทุกๆ คำสั่งซื้อ...</p>
  `,
}