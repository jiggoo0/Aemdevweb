/** @format */

"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export function FacebookChat() {
  const [isLoaded, setIsLoaded] = useState(false)

  // ✅ Logic: โหลดหลังจากเลื่อนหน้าจอ หรือผ่านไป 4 วินาที (แก้ปัญหา PageSpeed มือถือ TBT สูง)
  useEffect(() => {
    // ฟังก์ชันเริ่มโหลดและล้าง Event Listeners ทันทีเพื่อลด Memory Usage
    const handleInteraction = () => {
      setIsLoaded(true)
    }

    // 1. ตั้งเวลาอัตโนมัติ 4 วินาที (เผื่อคนเปิดทิ้งไว้เฉยๆ)
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 4000)

    // 2. ดักจับ Interaction (Scroll, Mouse, Touch)
    window.addEventListener("scroll", handleInteraction, { passive: true })
    window.addEventListener("mousemove", handleInteraction, { passive: true })
    window.addEventListener("touchstart", handleInteraction, { passive: true })

    // Cleanup Function
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleInteraction)
      window.removeEventListener("mousemove", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
    }
  }, [])

  if (!isLoaded) return null

  return (
    <>
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />
      
      {/* Script จะเริ่มโหลดเมื่อ isLoaded = true เท่านั้น */}
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
            FB.init({
              xfbml: true,
              version: "v18.0",
            })
          }
        }}
      />
    </>
  )
}
