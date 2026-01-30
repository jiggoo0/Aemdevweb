/** @format */

import React from "react";
import { JsonLdData } from "@/types";

export interface JsonLdProps {
  type:
    | "Organization"
    | "WebSite"
    | "Service"
    | "BlogPosting"
    | "CollectionPage"
    | "Person"
    | "Article"      // [ADDED]: รองรับหน้า Case Study
    | "ContactPage"  // [ADDED]: รองรับหน้า Contact
    | "WebPage"      // [ADDED]: รองรับหน้า Legal
    | "Product"      // [ADDED]: รองรับหน้า Marketplace
    | "Graph";
  data: JsonLdData;
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  if (!data || Object.keys(data).length === 0) return null;

  const schema =
    type === "Graph"
      ? {
          "@context": "https://schema.org",
          "@graph": Array.isArray(data["@graph"]) ? data["@graph"] : [data],
        }
      : {
          "@context": "https://schema.org",
          "@type": type,
          ...data,
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key={`jsonld-${type.toLowerCase()}-${(data["@id"] as string) || "root"}`}
    />
  );
};
