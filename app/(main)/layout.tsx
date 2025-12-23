/** @format */
import Header from "@/components/Header"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* 📢 1. ANNOUNCEMENT LAYER: Banner ประกาศเปิดตัว */}
      <Banner />

      {/* 🛠️ 2. DECORATION LAYER: กราฟิกพื้นหลัง (ยึดติดกับจอ) */}
      <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
        {/* ลายตาราง Industrial Grid */}
        <div className="absolute inset-0 bg-industrial-grid opacity-[0.03]" />
        {/* แสงฟุ้ง (Glow Effect) เพื่อความทันสมัย */}
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/40 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-slate-50/60 blur-[140px]" />
      </div>

      {/* ─── 3. NAVIGATION ─── */}
      <Header />

      {/* ─── 4. MAIN CONTENT ─── */}
      <main className="relative flex flex-1 flex-col pt-20 md:pt-24">
        {children}
      </main>

      {/* ─── 5. FOOTER SECTION ─── */}
      {/* ส่งข้อมูล Mock Data เข้าไปเพื่อให้ Footer เรนเดอร์ได้ 
         โดยไม่กระทบกับตัวแปรในหน้า Landing Page 
      */}
      <Footer 
        data={{
          name: siteConfig.name,
          phone: "08x-xxx-xxxx", 
          lineId: "@aemdevweb",
          address: "Bangkok, Thailand",
          socials: {
            facebook: "https://facebook.com/aemdevweb",
          }
        } as any} 
      />

      {/* ─── 6. BRANDING MARK (Desktop Only) ─── */}
      <div className="fixed bottom-10 left-10 -z-40 hidden opacity-10 lg:block">
        <p className="text-[10px] font-black uppercase tracking-[1em] text-slate-900 [writing-mode:vertical-lr]">
          Digital Architecture System
        </p>
      </div>
    </div>
  )
}
