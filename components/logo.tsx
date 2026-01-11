/** @format */
import Link from "next/link"

interface LogoProps {
  className?: string
}

/**
 * 🚀 AEMDEV Logo: Human-Centric Brutalist Style
 * ดีไซน์เน้นเส้นขอบหนา (border-4) และการเอียง (italic font-black)
 * สื่อถึงความรวดเร็วและงานวิศวกรรมที่แข็งแกร่ง
 */
export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center gap-0 focus:outline-none ${className}`}
    >
      {/* 🟦 กล่องสัญลักษณ์ A (Brutal Block) */}
      <div className="relative border-4 border-[#0f172a] bg-[#1e3a8a] px-2 py-1 shadow-[4px_4px_0px_0px_#0f172a] transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
        <span className="text-2xl font-black uppercase italic text-white">
          A
        </span>
      </div>

      {/* 🏗️ ข้อความชื่อแบรนด์ (Typography Focus) */}
      <div className="border-4 border-l-0 border-[#0f172a] bg-white px-3 py-1 shadow-[4px_4px_0px_0px_#f97316] transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0">
        <span className="text-2xl font-black uppercase italic tracking-tighter text-[#0f172a]">
          EM<span className="text-[#f97316]">DEV</span>
        </span>
      </div>

      {/* 🗲 Shadow Layer (Decorative Background) */}
      <div className="absolute inset-0 translate-x-1 translate-y-1 bg-[#0f172a] opacity-0 group-hover:opacity-10" />
    </Link>
  )
}

export default Logo
