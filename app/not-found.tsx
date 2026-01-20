import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileSearch, ArrowLeft, Home } from "lucide-react"

/**
 * 404 Not Found Page
 * ออกแบบมาเพื่อรักษา User Experience และดึงดูดลูกค้ากลับสู่หน้าหลัก
 * สไตล์ Industrial Minimalism: คลีน มั่นคง และชัดเจน
 */
export default function NotFound() {
  return (
    <main className="bg-background animate-in fade-in flex min-h-[80vh] flex-col items-center justify-center px-4 text-center duration-700">
      {/* Visual Identity: ใช้ Icon ที่สื่อความหมายชัดเจน */}
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-50">
        <FileSearch className="h-12 w-12 text-slate-400" strokeWidth={1.5} />
      </div>

      {/* Heading: บอกสถานะชัดเจนแต่เป็นมิตร */}
      <div className="space-y-2">
        <h1 className="font-thai text-4xl font-bold tracking-tighter text-slate-900 sm:text-5xl">
          ไม่พบหน้าที่คุณต้องการ
        </h1>
        <p className="font-thai mx-auto max-w-[500px] text-slate-500 sm:text-lg">
          ลิงก์ที่คุณเรียกใช้อาจไม่ถูกต้อง หรือหน้านี้ถูกย้ายไปที่อื่นแล้ว
          ลองกลับไปตั้งหลักที่หน้าแรกหรือดูบริการของเราสิครับ
        </p>
      </div>

      {/* Action Buttons: ปุ่มนำทางกลับสู่ทางที่ควรไป */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button
          asChild
          variant="default"
          size="lg"
          className="font-thai h-12 px-8"
        >
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            กลับหน้าแรก
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="font-thai h-12 px-8"
        >
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ดูบริการทั้งหมด
          </Link>
        </Button>
      </div>

      {/* Secondary Message: สำหรับลูกค้าบริษัท/โรงงาน */}
      <p className="mt-12 font-sans text-sm text-slate-400">
        Error Code: 404 | www.aemdevweb.com
      </p>
    </main>
  )
}
