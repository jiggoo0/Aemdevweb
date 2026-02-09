/**
 * [ROOT INFRASTRUCTURE]: PWA_MANIFEST_SYSTEM v17.0.2 (STABILIZED)
 * [STRATEGY]: App-Like Experience | Specialist Branding | Asset Resiliency
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    /* 1. IDENTITY ARCHITECTURE */
    name: `${SITE_CONFIG.brandName} | Web Infrastructure Specialist`,
    short_name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.description,
    start_url: "/",
    id: "aemdevweb-specialist-node",
    scope: "/",

    /* 2. DISPLAY PHYSICS */
    display: "standalone",
    orientation: "portrait",
    categories: ["business", "productivity", "developer tools"],

    /* 3. CHROMA SYNC */
    background_color: "#050505",
    theme_color: "#050505",

    /* 4. ASSET REGISTRY */
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
