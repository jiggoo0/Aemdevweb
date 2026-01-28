/** @format */

import { SEOContract } from "../../_contracts/seo"

/**
 * PersonalBioData - โครงสร้างข้อมูลสำหรับหน้าประวัติส่วนตัว (Digital Bio)
 * แนวคิด: เรียบง่าย ทรงพลัง และสะท้อนตัวตนได้ชัดเจนในหน้าเดียว
 * มาตรฐาน: Next.js 16 & SEO-First DNA
 */
export interface PersonalBioData extends SEOContract {
  /** ส่วนข้อมูลเจ้าของโปรไฟล์: หัวใจหลักที่ทำให้คนรู้จักคุณ */
  profile: {
    /** ชื่อ-นามสกุล หรือชื่อในวงการ */
    name: string
    /** ตำแหน่งหรือนิยามตัวเอง (เช่น Full-stack Developer) */
    role: string
    /** ที่อยู่รูปภาพโปรไฟล์ (แนะนำเป็นไฟล์ .webp เพื่อความซิ่ง) */
    avatar: string
    /** ข้อความแนะนำตัวสั้นๆ ที่อ่านแล้วต้องอยากคุยต่อ */
    bio: string
  }

  /** ส่วนช่องทางติดต่อออนไลน์: รวมลิงก์สำคัญทั้งหมดไว้ในจุดเดียว */
  socials: {
    /** ชื่อแพลตฟอร์ม (เช่น Facebook, Line, TikTok) */
    platform: string
    /** ข้อความที่ต้องการโชว์บนปุ่ม */
    label: string
    /** ลิงก์ปลายทาง */
    href: string
    /** ชื่อไอคอนจากชุด Lucide React */
    icon: string
  }[]

  /** ส่วนสถิติหรือความสำเร็จ: โชว์ผลงานผ่านตัวเลขที่จับต้องได้ */
  stats: {
    label: string
    value: string
  }[]

  /** ส่วนปุ่มดำเนินการหลัก (CTA): จุดปิดการขายที่สำคัญที่สุดในหน้า */
  cta: {
    /** ข้อความบนปุ่ม (เช่น 'จ้างงานผมเลย') */
    text: string
    /** ลิงก์ไปยังฟอร์มหรือช่องทางแชทส่วนตัว */
    href: string
  }
}
