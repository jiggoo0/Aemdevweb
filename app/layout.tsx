/** @format */

import React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import NextTopLoader from "nextjs-toploader"

// 📂 Logic & Config
import { cn } from "@/lib/utils"
import { constructMetadata, siteConfig } from "@/constants/site-config"
import { viewport as defaultViewport } from "./viewport"

// 📂 Local Assets & Fonts
import "./globals.css"
import { Prompt, Anuphan } from "next/font/google"

/* -------------------------------------------------------------------------- */
/* 🅰️ Font Setup: Optimized for Thai/Latin Rendering                         */
/* -------------------------------------------------------------------------- */

const fontPrompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "swap",
})

const fontAnuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  display: "swap",
})

export const metadata: Metadata = constructMetadata()
export const viewport: Viewport = defaultViewport

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="th"
      className={cn(
        "scroll-smooth focus:scroll-auto", // เพิ่มการรองรับ Accessibility
        fontPrompt.variable,
        fontAnuphan.variable,
        "thai-font-smoothing"
      )}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "font-anuphan min-h-screen bg-white text-slate-900 antialiased",
          "selection:bg-emerald-500/20 selection:text-emerald-900",
          "overflow-x-hidden" // ป้องกัน Layout เลื่อนแนวนอนบนมือถือ
        )}
      >
        {/* 🚀 Top Loading Bar: Brand Primary (Emerald-500) */}
        <NextTopLoader
          color="#10B981"
          height={3}
          showSpinner={false}
          easing="ease-in-out"
          speed={300}
        />

        {/* 💬 Facebook Customer Chat: Trusted Interaction Layer */}
        <div id="fb-root" />
        <div id="fb-customer-chat" className="fb-customerchat" />
        <Script id="facebook-chat" strategy="lazyOnload">
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "914706508399571"); // Verified ID
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v18.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `}
        </Script>

        {/* 🌍 App Content Container */}
        <div className="relative flex min-h-screen flex-col">{children}</div>

        {/* ⚙️ SEO: JSON-LD for Local Business / Specialist */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              image: siteConfig.ogImage,
              url: siteConfig.url,
              email: siteConfig.email,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                addressCountry: "TH",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
