/** @format */
import { BlogPost } from "@/types/blog"

export const blogData: BlogPost[] = [
  {
    id: "4", // เรียงตามความสดใหม่ (ล่าสุด)
    title:
      "เว็บโหลดช้าทำลูกค้าหาย! ทำไม Next.js ถึงเป็นตัวเลือกที่ดีที่สุดในปี 2025",
    description:
      "รู้หรือไม่? ลูกค้ากว่า 50% จะกดปิดเว็บทันทีถ้าโหลดนานเกิน 3 วินาที มาดูว่าเทคโนโลยีที่เราใช้ช่วยให้เว็บคุณลื่นไหลและติดอันดับ Google ได้ยังไง",
    category: "Tech Insight",
    date: "25 ธันวาคม 2025",
    image: "/images/blog/performance-web.jpg",
    slug: "nextjs-for-business-performance",
    author: {
      name: "Engineering Team",
      avatar: "/images/profile/default-avatar.webp",
      role: "Full-stack Developer",
    },
    readTime: "4 นาที",
    content: `
      <p class="text-lg leading-relaxed text-slate-600 mb-6">ในโลกธุรกิจออนไลน์ 'เวลาคือเงินทอง' เว็บไซต์ที่สวยแต่โหลดช้าก็เหมือนร้านค้าที่ตั้งอยู่ในซอยลึกที่ลูกค้าหาไม่เจอและไม่อยากเดินเข้า</p>
      
      <div class="bg-slate-50 border-l-4 border-blue-600 p-6 my-8">
        <h3 class="text-xl font-black uppercase italic tracking-tighter text-slate-900 mb-4">ทำไมความเร็วถึงส่งผลต่อยอดขาย?</h3>
        <ul class="space-y-4 text-slate-700">
          <li class="flex gap-3"><span class="text-blue-600 font-bold">01.</span> <strong>Google รักเว็บเร็ว:</strong> ความเร็วเป็นปัจจัยหลักในการจัดอันดับ (Core Web Vitals) เว็บเร็วกว่าย่อมอยู่อันดับสูงกว่า</li>
          <li class="flex gap-3"><span class="text-blue-600 font-bold">02.</span> <strong>ประสบการณ์ที่ลื่นไหล:</strong> การเปลี่ยนหน้าที่แทบไม่ต้องรอโหลด (Instant Loading) ทำให้ลูกค้าอยากดูสินค้าต่อ</li>
          <li class="flex gap-3"><span class="text-blue-600 font-bold">03.</span> <strong>ความปลอดภัยระดับสากล:</strong> Next.js ป้องกันการโดนแฮกได้ดีกว่าเว็บสำเร็จรูปทั่วไป</li>
        </ul>
      </div>
      
      <p class="mt-8 font-black text-slate-900 italic">ที่ aemdevweb เราไม่ได้แค่ทำเว็บให้สวย แต่เราทำเว็บให้ 'แรง' เพื่อให้ธุรกิจคุณวิ่งแซงคู่แข่งในทุกสนามครับ</p>
    `,
  },
  {
    id: "1",
    title: "ทำไมร้านอาหารยุค 2025 ต้องมีเว็บไซต์ มากกว่าแค่เพจ Facebook?",
    description:
      "เจาะลึกเหตุผลที่เพจ Facebook อย่างเดียวไม่พออีกต่อไป และวิธีที่เว็บไซต์จะช่วยให้ร้านของคุณประหยัดค่า GP และรับออเดอร์ได้แม่นยำขึ้น",
    category: "Business",
    date: "20 ธันวาคม 2025",
    image: "/images/blog/restaurant-web.jpg",
    slug: "why-restaurant-need-website",
    author: {
      name: "Strategic Team",
      avatar: "/images/profile/default-avatar.webp",
      role: "Business Consultant",
    },
    readTime: "5 นาที",
    content: `
      <p class="text-lg leading-relaxed text-slate-600 mb-6">เมื่ออัลกอริทึม Facebook ปิดกั้นการมองเห็น เว็บไซต์จึงกลายเป็น 'สินทรัพย์' ที่มั่นคงที่สุดที่คุณควบคุมเองได้ 100%</p>
      
      <h3 class="text-2xl font-black text-slate-900 mt-10 mb-6 uppercase italic">3 กลยุทธ์ประหยัดต้นทุนด้วยเว็บไซต์</h3>
      <ul class="space-y-4 text-slate-700 ml-4">
        <li class="list-disc"><strong>ไม่ต้องง้อ Platform:</strong> ลูกค้าค้นหาเจอผ่าน Google Search โดยตรง ไม่ต้องโดนหักค่า GP สูง</li>
        <li class="list-disc"><strong>Digital Menu:</strong> ลดความผิดพลาดจากการตอบแชท และอัปเดตเมนูแบบ Real-time</li>
        <li class="list-disc"><strong>Customer Data:</strong> รู้จักลูกค้าประจำเพื่อทำโปรโมชั่นที่ตรงจุด</li>
      </ul>
      
      <div class="mt-10 p-6 border-4 border-slate-900 bg-blue-50">
        <p class="font-bold text-blue-600">ให้ aemdevweb ช่วยปั้นเว็บร้านอาหารที่ใช้งานง่าย สแกนสั่งได้ทันที ติดต่อเราเพื่อรับคำปรึกษาฟรีได้เลยครับ!</p>
      </div>
    `,
  },
  {
    id: "2",
    title: "เทคนิคปั้นเว็บ หจก. ให้ดูน่าเชื่อถือ จนลูกค้ามั่นใจจ้างงาน",
    description:
      "คู่มือการจัดวางเนื้อหาเว็บไซต์สำหรับ หจก. และ บจก. เพื่อใช้เป็นหน้าตาในการประมูลงาน และสร้างความมั่นใจให้กับคู่ค้าธุรกิจ",
    category: "Knowledge",
    date: "15 ธันวาคม 2025",
    image: "/images/blog/corporate-trust.jpg",
    slug: "how-to-build-corporate-trust",
    author: {
      name: "Engineering Team",
      avatar: "/images/profile/default-avatar.webp",
      role: "Web Specialist",
    },
    readTime: "4 นาที",
    content: `
      <p class="text-lg leading-relaxed text-slate-600 mb-6">สำหรับธุรกิจรับเหมาหรือ หจก. เว็บไซต์คือ 'Digital Portfolio' ที่ทำงานแทนคุณตลอด 24 ชั่วโมง</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 underline decoration-blue-600 decoration-4 underline-offset-4">โครงสร้างเว็บไซต์ที่สร้างความน่าเชื่อถือ</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div class="p-4 bg-slate-100 border-t-4 border-slate-900 font-bold">Portfolio: ผลงานที่ผ่านมา</div>
        <div class="p-4 bg-slate-100 border-t-4 border-slate-900 font-bold">Geolocation: มีที่ตั้งชัดเจน</div>
        <div class="p-4 bg-slate-100 border-t-4 border-slate-900 font-bold">Certificates: ใบอนุญาตต่างๆ</div>
      </div>
      
      <p class="mt-6 text-slate-700 italic">เว็บไซต์ที่ดูดีมีชัยไปกว่าครึ่ง ช่วยให้คุณปิดการจ้างงานโปรเจกต์ใหญ่ได้ง่ายขึ้นแน่นอนครับ</p>
    `,
  },
  {
    id: "3",
    title: "จากร้านค้าตึกแถว สู่ยอดขายหลักแสนด้วยระบบ E-commerce",
    description:
      "เรื่องราวความสำเร็จของลูกค้า aemdevweb ที่เปลี่ยนจากการจดออเดอร์ลงกระดาษ มาใช้ระบบจัดการหลังบ้านที่ทำเองได้ง่ายๆ",
    category: "Success Story",
    date: "10 ธันวาคม 2025",
    image: "/images/blog/success-case.jpg",
    slug: "sme-success-story",
    author: {
      name: "Success Team",
      avatar: "/images/profile/default-avatar.webp",
      role: "Support Team",
    },
    readTime: "6 นาที",
    content: `
      <p class="text-lg leading-relaxed text-slate-600 mb-6">เคสรีวิวจากเจ้าของร้านอะไหล่ยนต์ ที่เปลี่ยนระบบออเดอร์จากกระดาษ สู่ระบบสต็อกสินค้าที่จัดการเองได้ง่ายๆ</p>
      
      <blockquote class="my-10 border-l-[10px] border-blue-600 bg-slate-50 p-8">
        <p class="text-xl font-bold italic text-slate-800 leading-relaxed">
          "ตอนแรกกลัวว่าจะใช้คอมพิวเตอร์ไม่เก่ง แต่ทีมงานสอนจนผมจัดการสต็อกเองได้ ตอนนี้ออเดอร์ไหลเข้าเว็บเอง แถมเช็คสต็อกง่ายขึ้นเยอะ"
        </p>
        <cite class="mt-4 block font-black uppercase tracking-widest text-blue-600">— เจ้าของร้านอะไหล่ยนต์</cite>
      </blockquote>
      
      <p class="text-slate-700">นี่คือเครื่องพิสูจน์ว่า เทคโนโลยีไม่ได้ยากอย่างที่คิด หากได้รับการออกแบบให้เหมาะกับคนทำงานจริงครับ</p>
    `,
  },
]
