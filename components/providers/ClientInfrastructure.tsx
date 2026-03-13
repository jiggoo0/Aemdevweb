/**
 * [INFRASTRUCTURE]: CLIENT_BRIDGE_NODE v18.0.7 (ACCESSIBILITY_AUDIT_ENABLED)
 * [STRATEGY]: De-coupled Hydration | Next.js 16 Compatibility | Axe-core Integration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useEffect } from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic";
import { LazyMotion, domMax } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site-config";

// --- [OPTIMIZED]: Dynamic Imports (Client-Side Only) ---
const TopLoader = dynamic(
  () => import("@/components/layout/TopLoader").then((mod) => mod.TopLoader),
  { ssr: false },
);

const LineStickyButton = dynamic(() => import("@/components/shared/LineStickyButton"), {
  ssr: false,
});

const Toaster = dynamic(() => import("@/components/ui/Sonner").then((mod) => mod.Toaster), {
  ssr: false,
});

const ClientInfrastructure = () => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
    // [ACCESSIBILITY]: Initialize Axe-core for real-time WCAG auditing in Development
    if (process.env.NODE_ENV !== "production") {
      import("@axe-core/react").then((axe) => {
        axe.default(React, ReactDOM, 1000);
      });
    }
  }, []);

  if (!mounted) return null;

  return (
    <LazyMotion features={domMax} strict>
      {/* [MODERN_WEB_OPTIMIZATION]: Speculation Rules API for Instant Navigation */}
      <script
        type="speculationrules"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            prerender: [
              {
                source: "list",
                urls: ["/services", "/contact", "/blog", "/about"],
                score: 0.5,
              },
              {
                where: { href_matches: "/*" },
                eagerness: "moderate",
              },
            ],
          }),
        }}
      />

      {/* [CORE]: Navigation Progress Indicator */}
      <TopLoader color={SITE_CONFIG.themeColor} />

      {/* [CONVERSION]: High-Intent Contact FAB */}
      <LineStickyButton source="global_infrastructure" />

      {/* [UI]: Global Notification System */}
      <Toaster position="top-center" richColors expand={false} closeButton theme="system" />
    </LazyMotion>
  );
};

ClientInfrastructure.displayName = "ClientInfrastructure";

export default memo(ClientInfrastructure);
