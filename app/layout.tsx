/** @format */
import { Metadata } from "next"
import { Prompt, Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/config/siteConfig"

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

/** * ✅ จัดการ Metadata เพื่อแก้ Warning: metadataBase
 * และช่วยเรื่อง SEO ของหน้าหลัก
 */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.aemdevweb.com"
  ),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Landing Page",
    "รับทำเว็บไซต์",
  ],
  authors: [{ name: "aemdevweb" }],
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://www.aemdevweb.com",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-prompt antialiased selection:bg-blue-600 selection:text-white">
        {/* ✅ ปล่อยให้ว่างไว้ เพื่อให้หน้าเว็บแต่ละหน้า (เช่น /landing หรือ /home) 
           จัดการ Layout ของตัวเองผ่าน (main) layout หรือ component ย่อย
        */}
        {children}
      </body>
    </html>
  )
}
