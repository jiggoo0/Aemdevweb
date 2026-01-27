/** @format */

/**
 * Case Studies Layout: พิกัดงานแบบลดรูป (Minimalist)
 * ถอดการนำเข้าที่ซ้ำซ้อนออกทั้งหมด เพื่อให้ระบบจัดการ Layout ได้กริบที่สุด
 */
export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main className="min-h-screen">{children}</main>
    </>
  )
}
