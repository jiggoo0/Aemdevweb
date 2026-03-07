/**
 * [DATA MIGRATION]: SERVICES_TO_TURSO v18.0.0 (SYNC_MAXIMIZED)
 * [STRATEGY]: Blueprint Synchronization | SQL Persistence | Zero-Downtime Migration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { createClient } from "@libsql/client/web";
import { MASTER_REGISTRY } from "../constants/master-registry";
import * as dotenv from "dotenv";

dotenv.config();

const db = createClient({
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN || "",
});

async function migrateServices() {
  console.log("🚀 Starting Service Migration: MASTER_REGISTRY -> Turso Cloud");
  console.log(`📊 Processing ${MASTER_REGISTRY.length} services...`);

  const statements = MASTER_REGISTRY.map((service) => ({
    sql: `
      INSERT INTO services (slug, title, description, price_start, category, is_featured)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(slug) DO UPDATE SET
        title = excluded.title,
        description = excluded.description,
        price_start = excluded.price_start,
        category = excluded.category,
        is_featured = excluded.is_featured,
        created_at = CURRENT_TIMESTAMP;
    `,
    args: [
      String(service.templateSlug),
      String(service.title),
      String(service.description),
      Number(service.priceValue || 0),
      String(service.category || "business"),
      service.isFeatured ? 1 : 0,
    ],
  }));

  try {
    const start = Date.now();
    await db.batch(statements, "write");
    const end = Date.now();

    console.log(`✅ Service Migration Completed Successfully in ${end - start}ms!`);
    console.log(`📍 ${MASTER_REGISTRY.length} Services are now live on Turso Cloud.`);
  } catch (error) {
    console.error("❌ Service Migration Failed:", error);
    process.exit(1);
  }
}

migrateServices();
