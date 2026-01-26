/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { ShoppingBag, Search, Menu } from "lucide-react"

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อล้าง Warning: no-explicit-any          */
/* -------------------------------------------------------------------------- */

interface NavLink {
  label: string
  href: string
}

interface ShopNavbarProps {
  data: {
    logo: string
    cartCount?: number
    links: NavLink[]
  }
}

/**
 * ShopNavbar - แถบนำทางสำหรับระบบ ShopMasterPro
 * ปรับปรุงพิกัด Type และระบบ Font ให้เป็นมาตรฐาน Specialist 2026
 */
export const ShopNavbar = ({ data }: ShopNavbarProps) => (
  <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
    <div className="container mx-auto flex h-20 items-center justify-between px-6">
      {/* 1. ส่วนโลโก้และแบรนด์ธุรกิจ: ใช้ฟอนต์ Heading ตามมาตรฐานโครงการ */}
      <Link
        href="/"
        className="group flex cursor-pointer items-center gap-2 text-left"
      >
        <div className="rounded-lg bg-orange-600 p-1.5 shadow-lg shadow-orange-600/20 transition-transform group-hover:rotate-12">
          <ShoppingBag className="text-white" size={20} />
        </div>
        <span className="font-heading text-xl font-black tracking-tighter text-slate-950 uppercase italic">
          {data.logo}
          <span className="text-orange-600">.</span>
        </span>
      </Link>

      {/* 2. เมนูนำทางหลักสำหรับ Desktop: เน้นพิกัดการจัดวางที่โปร่งโล่ง */}
      <div className="hidden items-center gap-10 lg:flex">
        {data.links.map((link, i) => (
          <Link
            key={`${link.label}-${i}`}
            href={link.href}
            className="font-heading text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase transition-colors hover:text-orange-600"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* 3. ส่วนการค้นหา ตะกร้าสินค้า และ Mobile Toggle */}
      <div className="flex items-center gap-6 text-slate-400">
        <button aria-label="ค้นหาสินค้า">
          <Search
            size={18}
            className="cursor-pointer transition-all hover:scale-110 hover:text-orange-600 active:scale-95"
          />
        </button>

        <div className="group relative cursor-pointer">
          <ShoppingBag
            size={18}
            className="transition-all group-hover:scale-110 group-hover:text-orange-600"
          />
          {/* ป้ายแสดงจำนวนสินค้าในตะกร้า (Cart Badge) */}
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[8px] font-black text-white ring-2 ring-white">
            {data.cartCount || 0}
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <button className="p-1 lg:hidden" aria-label="เปิดเมนู">
          <Menu className="text-slate-950" size={20} />
        </button>
      </div>
    </div>
  </nav>
)
