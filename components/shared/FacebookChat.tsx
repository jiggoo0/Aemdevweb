/** @format */

"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

/**
 * FacebookChat - ระบบการจัดการแชทหน้าเว็บไซต์
 * พัฒนามาเพื่อรองรับการสื่อสารกับลูกค้าโดยไม่ส่งผลกระทบต่อคะแนนความเร็ว (TBT/LCP)
 */
export function FacebookChat() {
  const [isLoaded, setIsLoaded] = useState(false)

  // ตรรกะการทำงาน: เริ่มโหลดหลังจากผู้ใช้งานมีการขยับหน้าจอ หรือผ่านไป 4 วินาที
  useEffect(() => {
    // ฟังก์ชันสั่งเริ่มโหลดระบบงานแชท
    const triggerLoad = () => {
      setIsLoaded(true)
      removeListeners()
    }

    // ฟังก์ชันล้างการดักจับเหตุการณ์เพื่อลดภาระหน่วยความจำ
    const removeListeners = () => {
      window.removeEventListener("scroll", triggerLoad)
      window.removeEventListener("mousemove", triggerLoad)
      window.removeEventListener("touchstart", triggerLoad)
    }

    // 1. ตั้งเวลาโหลดอัตโนมัติเผื่อกรณีผู้ใช้งานเปิดหน้าเว็บทิ้งไว้
    const timer = setTimeout(triggerLoad, 4000)

    // 2. ดักจับการโต้ตอบของผู้ใช้งาน (Scroll, Mouse, Touch) เพื่อเริ่มโหลดทันที
    window.addEventListener("scroll", triggerLoad, { passive: true })
    window.addEventListener("mousemove", triggerLoad, { passive: true })
    window.addEventListener("touchstart", triggerLoad, { passive: true })

    return () => {
      clearTimeout(timer)
      removeListeners()
    }
  }, [])

  if (!isLoaded) return null

  return (
    <>
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />

      {/* สคริปต์จะเริ่มทำงานเมื่อสถานะ isLoaded เป็นจริงเท่านั้น */}
      <Script
        id="facebook-chat-sdk"
        strategy="lazyOnload"
        src="https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js"
        onLoad={() => {
          const chatbox = document.getElementById("fb-customer-chat")
          if (chatbox) {
            chatbox.setAttribute("page_id", "914706508399571")
            chatbox.setAttribute("attribution", "biz_inbox")
          }

          // กำหนดค่าเริ่มต้นให้กับระบบ SDK ของ Facebook
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
