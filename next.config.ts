/** @format */
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "dpgmfbnzyhnhwzyozoxe.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.aemdevweb.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // ✅ เพิ่มบรรทัดนี้
        pathname: "/**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
