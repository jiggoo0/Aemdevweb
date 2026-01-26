/** @format */
import createMDX from "@next/mdx"
import withBundleAnalyzer from "@next/bundle-analyzer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  serverExternalPackages: ["@libsql/client"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
    // กลับมาเปิดเป็น true เพื่อความเร็ว เพราะเราไม่ได้ใช้ Remark Plugin แล้ว
    mdxRs: true,
    optimizePackageImports: ["lucide-react", "framer-motion", "sonner"],
  },
}

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const withMDX = createMDX({}) // กลับไปใช้ค่าเริ่มต้น

export default withAnalyzer(withMDX(nextConfig))
