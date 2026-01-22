/** @format */

"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export function FacebookChat() {
  const [isLoaded, setIsLoaded] = useState(false)

  // ✅ Logic: โหลดหลังจากเลื่อนหน้าจอ หรือผ่านไป 5 วินาที (แก้ปัญหา PageSpeed มือถือ)
  useEffect(() => {
    const handleScroll = () => setIsLoaded(true)
    const handleInteraction = () => setIsLoaded(true)

    // ตั้งเวลาเผื่อกรณีคนไม่เลื่อนจอ
    const timer = setTimeout(() => setIsLoaded(true), 5000)

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleInteraction, { passive: true })
    window.addEventListener("touchstart", handleInteraction, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
      clearTimeout(timer)
    }
  }, [])

  if (!isLoaded) return null

  return (
    <>
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />
      <Script
        id="facebook-chat"
        strategy="lazyOnload"
        src="https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js"
        onLoad={() => {
          const chatbox = document.getElementById("fb-customer-chat")
          if (chatbox) {
            chatbox.setAttribute("page_id", "914706508399571")
            chatbox.setAttribute("attribution", "biz_inbox")
          }
          // @ts-ignore
          window.fbAsyncInit = function () {
            // @ts-ignore
            FB.init({ xfbml: true, version: "v18.0" })
          }
        }}
      />
    </>
  )
}
