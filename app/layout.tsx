/** @format */
import { Metadata, Viewport } from "next"
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

export const viewport: Viewport = {
  themeColor: "#0f172a", // Navy Blue สไตล์ Industrial
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    // [Hook] เน้น Keyword สำคัญที่ลูกค้า SME ใช้ค้นหาจริง
    default: `รับทำเว็บไซต์ SME และ Landing Page ปิดการขาย | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  // [Benefit Driven] สื่อสารคุณค่าเรื่องยอดขายและความน่าเชื่อถือ
  description:
    "AEM DEV รับทำเว็บไซต์ธุรกิจและ Landing Page สำหรับ SME เน้นดีไซน์ทันสมัย โหลดไว มาตรฐานวิศวกรรม ช่วยยกระดับแบรนด์และเพิ่มยอดขายด้วยโครงสร้างรองรับ SEO 100%",

  keywords: [
    "รับทำเว็บไซต์ SME",
    "รับทำ Landing Page",
    "จ้างทำเว็บไซต์บริษัท",
    "ทำเว็บขายของ",
    "ออกแบบเว็บไซต์ธุรกิจ",
    "เว็บไซต์โหลดไว",
    "AEM DEV",
    "Web Development Thailand",
  ],

  authors: [{ name: "AEM DEV Team", url: siteConfig.url }],
  creator: "AEM DEV",
  publisher: "AEM DEV",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: `เว็บไซต์ที่ใช่... คือเครื่องมือทำเงินที่ดีที่สุด | ${siteConfig.name}`,
    description:
      "เปลี่ยนผู้เข้าชมให้เป็นลูกค้าด้วย Landing Page ประสิทธิภาพสูง ออกแบบมาเพื่อธุรกิจ SME โดยเฉพาะ",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Web Design for SME`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  verification: {
    google: "ใส่-google-site-verification-id-ที่นี่",
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
        {/* Schema.org สำหรับ Local Business - ช่วยให้ Google รู้ว่าเราเป็นใคร อยู่ที่ไหน */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              image: siteConfig.ogImage,
              description: siteConfig.description,
              url: siteConfig.url,
              telephone: siteConfig.contact.tel,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contact.address,
                addressLocality: "Bangkok",
                addressCountry: "TH",
              },
              priceRange: "฿฿",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                siteConfig.contact.lineUrl,
                "https://www.facebook.com/aemdevweb",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
