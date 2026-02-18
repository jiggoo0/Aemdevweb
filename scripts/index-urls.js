/**
 * AEM ULTRA LEAN INDEXER v2.0 (Stable)
 * [STRATEGY]: Pure JS | Independent Data Resolution
 * [MAINTAINER]: AEMZA MACKS
 */

const { JWT } = require("google-auth-library");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.aemdevweb.com";
const INDEXING_ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish";

// [HELPERS]: Load API Credentials
function loadServiceAccount() {
  const filePath = path.join(process.cwd(), "service-account.json");
  if (!fs.existsSync(filePath)) {
    throw new Error("service-account.json not found in project root");
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

async function getAccessToken() {
  const { client_email, private_key } = loadServiceAccount();
  const client = new JWT({
    email: client_email,
    key: private_key,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });
  const { access_token } = await client.authorize();
  return access_token;
}

/**
 * [URL_COLLECTOR]: รวบรวม URL ทั้งหมดโดยไม่อาศัย TS Modules
 */
function collectUrls() {
  const urls = [`${BASE_URL}/`, `${BASE_URL}/about`, `${BASE_URL}/services`, `${BASE_URL}/areas`];

  // 1. ดึง Area URLs จาก Folder Constants (อ่านชื่อไฟล์โดยตรง)
  const areasDir = path.join(process.cwd(), "constants/area-nodes");
  if (fs.existsSync(areasDir)) {
    fs.readdirSync(areasDir)
      .filter((f) => f.endsWith(".ts") && f !== "index.ts")
      .forEach((f) => {
        const slug = f.replace(".ts", "");
        urls.push(`${BASE_URL}/areas/${slug}`);
      });
  }

  // 2. ดึง Service URLs จาก Folder Services
  const servicesDir = path.join(process.cwd(), "constants/services");
  if (fs.existsSync(servicesDir)) {
    fs.readdirSync(servicesDir)
      .filter((f) => f.endsWith(".ts"))
      .forEach((f) => {
        const slug = f.replace(".ts", "");
        urls.push(`${BASE_URL}/services/${slug}`);
      });
  }

  // 3. ดึง Blog URLs จาก Content Folder
  const blogDir = path.join(process.cwd(), "content/blog");
  if (fs.existsSync(blogDir)) {
    fs.readdirSync(blogDir)
      .filter((f) => f.endsWith(".mdx"))
      .forEach((f) => {
        const slug = f.replace(".mdx", "");
        urls.push(`${BASE_URL}/blog/${slug}`);
      });
  }

  return [...new Set(urls)]; // ลบ URL ซ้ำ
}

async function publishUrl(url, token) {
  const response = await fetch(INDEXING_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP ${response.status}: ${text}`);
  }
}

async function main() {
  console.log("\n🚀 AEM ULTRA LEAN INDEXER v2.0 START");

  try {
    const token = await getAccessToken();
    const urls = collectUrls();

    console.log(`📡 Detected ${urls.length} target URLs`);

    let success = 0;
    for (const url of urls) {
      try {
        await publishUrl(url, token);
        success++;
        console.log(`✅ [${success}/${urls.length}] INDEXED: ${url}`);
        // Google Indexing API Rate Limit คือ 600/min. 200ms delay คือปลอดภัย
        await new Promise((r) => setTimeout(r, 200));
      } catch (err) {
        console.error(`❌ FAILED: ${url} -> ${err.message}`);
      }
    }

    console.log(`\n🏁 FINISHED: Successfully indexed ${success}/${urls.length} URLs`);
  } catch (err) {
    console.error("\n🚫 CRITICAL ERROR:", err.message);
  }
}

main();
