/**
 * [AI_INFRA]: AI_ORCHESTRATOR v1.0.0
 * [STRATEGY]: Hybrid Authentication (API Key + Service Account)
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

// --- [CONFIG]: ค้นหาไฟล์ Service Account ---
const SERVICE_ACCOUNT_PATH = path.join(process.cwd(), ".gemini", "gen-lang-client-0584860487-adc1a17e621f.json");

/**
 * @function getAIClient
 * @description เลือกใช้วิธีพิสูจน์ตัวตนที่ดีที่สุด (Hybrid Approach)
 */
export async function getAIClient() {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

  // [MODE A]: ⚡ Fast Track - ใช้ API Key (หากมี)
  if (apiKey) {
    console.log("🟢 [AI_AUTH]: Using Direct API Key (Gemini AI Studio)");
    return new GoogleGenerativeAI(apiKey);
  }

  // [MODE B]: 🛡️ Enterprise Track - ใช้ Service Account JSON (Fallback)
  if (fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    console.log("🔵 [AI_AUTH]: Using Service Account JSON (Google Cloud)");
    try {
      const credentials = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, "utf8"));
      // ใน Node.js SDK ปกติจะต้องการ API Key แต่สำหรับ Vertex AI จะใช้ Credentials นี้
      // หมายเหตุ: โค้ดนี้เป็นการเตรียมโครงสร้างเพื่อให้รองรับทั้งสองแบบ
      return { mode: "service_account", credentials };
    } catch (error) {
      console.error("❌ [AI_AUTH]: Failed to parse Service Account", error);
    }
  }

  throw new Error("🔴 [AI_AUTH]: No valid credentials found (Missing API Key and Service Account)");
}
