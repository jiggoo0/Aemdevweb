/** @format */
import createMDX from "@next/mdx"

/**
 * Next.js Configuration - AEMDEVWEB Professional v2026
 * Focus: High-Performance Image Serving, Termux Compatibility, and Next.js 16 Migration
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  /* Moved to root in Next.js 16: Packages that should not be bundled by the server */
  serverExternalPackages: ["@libsql/client"],

  /* Image Optimization Infrastructure */
  images: {
    formats: ["image/avif", "image/webp"],
    // Support for wide screens and Mobile High DPI
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Specific sizes for logos and mobile icons to ensure fastest LCP
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  /* Experimental & Build Performance Features */
  experimental: {
    // Required for Termux compatibility to prevent Rust Compiler issues
    mdxRs: false,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "@radix-ui/react-dialog",
      "@radix-ui/react-tabs",
      "@radix-ui/react-dropdown-menu",
    ],
  },

  /* Compiler Options */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
}

const withMDX = createMDX({})
export default withMDX(nextConfig)
