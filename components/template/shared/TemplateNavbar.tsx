/** @format */

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * 🔑 TemplateNavbar Component
 * แก้ไขปัญหา ESLint: react-hooks/set-state-in-effect แบบถาวร
 */
export function TemplateNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // 1. Scroll Detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. ปิดเมนูอัตโนมัติเมื่อมีการเปลี่ยนหน้า
  // ✅ แก้ไข: ใช้ requestAnimationFrame เพื่อเลื่อนการ setState ออกไป 
  // ป้องกัน Error: cascading renders (react-hooks/set-state-in-effect)
  useEffect(() => {
    if (isMobileMenuOpen) {
      const timeoutId = setTimeout(() => {
        setIsMobileMenuOpen(false);
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, isMobileMenuOpen]);

  const navLinks = [
    { name: "ทั้งหมด", href: "/sale-page" },
    { name: "Sale Page", href: "/sale-page" },
    { name: "บริษัท", href: "/corporate" },
    { name: "ร้านอาหาร", href: "/food-beverage" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "border-b border-slate-800 bg-slate-950/90 py-3 backdrop-blur-md"
          : "border-transparent bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* 1. Back to Main Site & Brand Logo */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">หน้าหลัก</span>
            </Link>

            <div className="hidden h-6 w-px bg-slate-800 sm:block" />

            <Link
              href="/sale-page"
              className="flex items-center gap-2 text-xl font-bold text-slate-100"
            >
              <ShoppingBag className="h-5 w-5 text-emerald-500" />
              <span className="tracking-tight">
                Template<span className="text-emerald-500">Store</span>
              </span>
            </Link>
          </div>

          {/* 2. Desktop Navigation */}
          <div className="hidden items-center gap-1 rounded-full border border-slate-800 bg-slate-900/50 p-1 backdrop-blur-sm md:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/40"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* 3. Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              className="hidden border-emerald-500/30 text-emerald-400 transition-all hover:bg-emerald-500/10 hover:text-emerald-300 sm:flex"
              asChild
            >
              <a
                href="https://lin.ee/yourid"
                target="_blank"
                rel="noopener noreferrer"
              >
                แจ้งชำระเงิน
              </a>
            </Button>

            <button
              className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-900 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      {isMobileMenuOpen && (
        <div className="animate-in slide-in-from-top-5 absolute top-full left-0 w-full border-b border-slate-800 bg-slate-950 p-4 shadow-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-slate-300 hover:bg-slate-900"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 border-t border-slate-900 pt-4">
              <Button className="w-full bg-emerald-600 font-bold text-white hover:bg-emerald-500">
                แจ้งชำระเงินทาง LINE
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
