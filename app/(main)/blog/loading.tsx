/** @format */
export default function Loading() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="h-20 w-3/4 animate-pulse bg-slate-100" />
      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-96 w-full animate-pulse border-4 border-slate-100 bg-slate-50"
          />
        ))}
      </div>
    </div>
  )
}
