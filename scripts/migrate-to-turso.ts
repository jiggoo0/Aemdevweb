/**
 * [DATA MIGRATION]: AREA_NODES_TO_TURSO v18.0.0 (SYNC_MAXIMIZED)
 * [STRATEGY]: Batch Insertion | Entity Normalization | Zero-Downtime Migration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { createClient } from "@libsql/client/web";
import { AREA_NODES } from "../constants/area-nodes";
import * as dotenv from "dotenv";

dotenv.config();

const db = createClient({
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN || "",
});

async function migrate() {
  console.log("🚀 Starting Data Migration: AREA_NODES -> Turso Cloud");
  console.log(`📊 Processing ${AREA_NODES.length} nodes...`);

  const statements = AREA_NODES.map((node) => ({
    sql: `
      INSERT INTO provinces (slug, name_th, name_en, region, priority, seo_title, seo_description)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(slug) DO UPDATE SET
        name_th = excluded.name_th,
        name_en = excluded.name_en,
        region = excluded.region,
        priority = excluded.priority,
        seo_title = excluded.seo_title,
        seo_description = excluded.seo_description,
        updated_at = CURRENT_TIMESTAMP;
    `,
    args: [
      String(node.slug),
      String(node.province), // Corrected: Use node.province for name_th
      String(node.slug).replace("-", " "),
      String(node.region || "Unknown"),
      Number(node.priority || 0),
      node.seoTitle ? String(node.seoTitle) : null,
      node.seoDescription ? String(node.seoDescription) : null,
    ],
  }));

  try {
    const start = Date.now();
    // [OPTIMIZATION]: Batch insertion for maximum performance
    await db.batch(statements, "write");
    const end = Date.now();

    console.log(`✅ Migration Completed Successfully in ${end - start}ms!`);
    console.log(`📍 ${AREA_NODES.length} Provinces are now live on Turso Cloud.`);
  } catch (error) {
    console.error("❌ Migration Failed:", error);
    process.exit(1);
  }
}

migrate();
