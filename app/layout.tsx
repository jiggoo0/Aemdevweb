/** @format */

import React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script" // 📦 เพิ่ม Script Component
import NextTopLoader from "nextjs-toploader"

// 📂 Logic & Config
import { cn } from "@/lib/utils"
import { constructMetadata } from "@/constants/site-config"
import { viewport as defaultViewport } from "./viewport"

// 📂 Local Assets & Fonts
import "./globals.css"
import { Prompt, Anuphan } from "next/font/google"

/* -------------------------------------------------------------------------- */
/* 🅰️ Font Setup: Industrial Typography Specialist v2026                      */
/* -------------------------------------------------------------------------- */

const fontPrompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

const fontAnuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

/* -------------------------------------------------------------------------- */
/* 🧬 SEO & Performance Config                                                */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = constructMetadata()
export const viewport: Viewport = defaultViewport

/* -------------------------------------------------------------------------- */
/* 🏗️ Root Layout Infrastructure                                              */
/* -------------------------------------------------------------------------- */

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="th"
      className={cn(
        "scroll-smooth",
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
          "transition-colors duration-300"
        )}
      >
        {/* 🚀 1. Top Loading Bar: Emerald-500 Brand Primary */}
        <NextTopLoader
          color="#10B981"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #10B981,0 0 5px #10B981"
        />

        {/* 💬 2. Facebook Customer Chat (Messenger) */}
        {/* จำเป็นต้องมี div id="fb-root" และ div id="fb-customer-chat" */}
        <div id="fb-root" />
        <div id="fb-customer-chat" className="fb-customerchat" />

        <Script id="facebook-chat" strategy="lazyOnload">
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "914706508399571");
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

        {/* 📊 3. Google Analytics (Placeholder) - ใส่ Measurement ID เมื่อพร้อม */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script> 
        */}

        {/* 🌍 4. App Content Infrastructure */}
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}
