/** @format */
import React from "react"
// ✅ แก้ไข: เพิ่มปีกกาครอบ Header
import { Header } from "@/components/Header" 
import Footer from "@/components/Footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white font-sans antialiased">
      <Header />

      <main className="relative flex-1 overflow-x-hidden">
        {/* Background Grid */}
        <div
          className="absolute inset-0 z-[-1] opacity-[0.01] pointer-events-none"
          style={{ backgroundImage: 'url("/grid.svg")' }}
        />

        {children}
      </main>

      <Footer />
    </div>
  )
}
