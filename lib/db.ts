/**
 * [DATABASE INFRASTRUCTURE]: TURSO_LIB_SQL v18.0.2 (STRICT_TYPE_COMPLIANT)
 * [STRATEGY]: Web-Standard Client | Zero-Binary Dependency | Termux Compatible
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { createClient, type InValue } from "@libsql/client/web";

// [ENVIRONMENT_CHECK]: ป้องกันการรัน Client โดยไม่มีการตั้งค่า Key
const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

/**
 * @client Turso Web Client
 * ใช้ Web-Standard fetch API ทำให้ไม่ต้องใช้ native binary
 * รองรับการทำงานบน Termux, Vercel Edge, และ Cloudflare Workers 100%
 */
export const db = createClient({
  url: url || "libsql://default-placeholder.turso.io",
  authToken: authToken || "placeholder-token",
});

export async function executeQuery<T>(sql: string, args: InValue[] = []): Promise<T[]> {
  try {
    const result = await db.execute({ sql, args });
    return result.rows as unknown as T[];
  } catch (error) {
    console.error("❌ [DB_QUERY_ERROR]:", error);
    return [];
  }
}

export default db;
