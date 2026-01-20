import { Skeleton } from "@/components/ui/skeleton"

/**
 * Global Loading UI
 * ออกแบบมาให้มีความเป็น Minimalist และรักษาโครงสร้างหน้าเว็บให้นิ่งที่สุด
 * เพื่อลดค่า CLS (Cumulative Layout Shift)
 */
export default function Loading() {
  return (
    <div className="animate-in fade-in container mx-auto space-y-12 px-4 py-8 duration-500">
      {/* 1. Hero Skeleton Placeholder */}
      <section className="space-y-4 pt-10">
        <Skeleton className="h-12 w-[250px] rounded-lg bg-slate-100 md:w-[400px]" />
        <Skeleton className="h-4 w-full max-w-[600px] bg-slate-50" />
        <div className="flex gap-4 pt-4">
          <Skeleton className="h-11 w-32 rounded-md bg-slate-200" />
          <Skeleton className="h-11 w-32 rounded-md bg-slate-100" />
        </div>
      </section>

      {/* 2. Grid Content Placeholder (Services / Projects) */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="space-y-4 rounded-xl border border-slate-100 p-6"
          >
            <Skeleton className="h-12 w-12 rounded-full bg-slate-100" />
            <Skeleton className="h-6 w-3/4 bg-slate-100" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full bg-slate-50" />
              <Skeleton className="h-4 w-5/6 bg-slate-50" />
            </div>
          </div>
        ))}
      </section>

      {/* 3. Section Divider Placeholder */}
      <div className="flex flex-col items-center space-y-4 py-10">
        <Skeleton className="h-4 w-48 bg-slate-100" />
        <Skeleton className="h-10 w-64 bg-slate-200" />
      </div>
    </div>
  )
}
