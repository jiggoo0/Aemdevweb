// @format
// พิกัดข้อมูล: next.config.mjs
// หน้าที่: ปรับแต่งเอนจิ้น Webpack สำหรับสภาพแวดล้อม Termux
// ควบคุมมาตรฐานโดย: นายเอ็มซ่ามากส์

import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  // บังคับการใช้งาน Webpack และปรับแต่ง Cache เพื่อประหยัดพื้นที่ใน Termux
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        allowCollectingMemory: true,
      };
    }
    return config;
  },
  // ปรับแต่งพิกัดภาพเพื่อลดภาระ CPU ตอนประมวลผล Sharp บน Android
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080],
  },
};

export default withMDX(nextConfig);
