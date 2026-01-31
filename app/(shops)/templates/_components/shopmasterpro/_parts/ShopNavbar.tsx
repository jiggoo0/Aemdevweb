/** @format */

import React from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions)                                           */
/* -------------------------------------------------------------------------- */

interface NavLink {
  label: string;
  href: string;
}

interface ShopNavbarProps {
  data: {
    logo: string;
    cartCount?: number;
    links: NavLink[];
  };
}

/**
 * ShopNavbar - แถบนำทางหลักสำหรับระบบ ShopMasterPro
 * แนวทาง: เน้นความโปร่งใส เข้าถึงง่าย และรองรับการทำงานแบบระนาบบนสุด
 * [FIXED]: ปรับพิกัด Z-Index ให้ลอยพ้นทุกเลเยอร์เพื่อแก้ปัญหาการกดเมนูไม่ได้
 */
export const ShopNavbar = ({ data }: ShopNavbarProps) => {
  return (
    <nav className="sticky top-0 z-[110] w-full border-b border-slate-100 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* 1. พิกัดแบรนด์และโลโก้: วางตำแหน่งให้เด่นชัดและกดง่าย */}
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

        {/* 2. เมนูนำทาง: จัดพิกัดสำหรับหน้าจอขนาดใหญ่ให้ดูโปร่งโล่ง */}
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

        {/* 3. ระบบจัดการสินค้าและปุ่มสั่งการ (Action Hub) */}
        <div className="flex items-center gap-6 text-slate-400">
          <button
            type="button"
            aria-label="ค้นหาสินค้าในระบบ"
            className="p-1 transition-transform hover:scale-110 active:scale-95"
          >
            <Search
              size={18}
              className="cursor-pointer hover:text-orange-600"
            />
          </button>

          <div className="group relative cursor-pointer p-1">
            <ShoppingBag
              size={18}
              className="transition-all group-hover:scale-110 group-hover:text-orange-600"
            />
            {/* ป้ายแสดงจำนวนสินค้า: พิกัดข้อมูลที่ช่วยสร้างการตัดสินใจ */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[8px] font-black text-white ring-2 ring-white">
              {data.cartCount || 0}
            </span>
          </div>

          {/* ปุ่มเปิดเมนูสำหรับหน้าจอขนาดเล็ก */}
          <button
            type="button"
            className="relative z-[120] p-1 lg:hidden"
            aria-label="เปิดเมนูนำทางโครงการ"
          >
            <Menu
              className="text-slate-950 transition-colors hover:text-orange-600"
              size={20}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
