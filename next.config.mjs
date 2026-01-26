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
    mdxRs: true,
    optimizePackageImports: ["lucide-react", "framer-motion", "sonner"],
  },

  webpack: (config) => {
    config.cache = false
    return config
  },
}

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const withMDX = createMDX({})

export default withAnalyzer(withMDX(nextConfig))