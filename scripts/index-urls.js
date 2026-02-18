/**
 * AEM ULTRA LEAN INDEXER v2.0 (Hotfix_Build)
 * [FIX]: Handle Private Key Newlines & JWT Signature Integrity
 */

const { JWT } = require("google-auth-library");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.aemdevweb.com";
const INDEXING_ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish";

function loadServiceAccount() {
  const filePath = path.join(process.cwd(), "service-account.json");
  if (!fs.existsSync(filePath)) {
    throw new Error("service-account.json not found in project root");
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

async function getAccessToken() {
  const { client_email, private_key } = loadServiceAccount();

  // [CRITICAL FIX]: ล้างค่า \n ที่เป็น String ให้เป็นตัวขึ้นบรรทัดใหม่จริงๆ
  const formattedKey = private_key.replace(/\\n/g, "\n");

  const client = new JWT({
    email: client_email,
    key: formattedKey,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const { access_token } = await client.authorize();
  return access_token;
}

function collectUrls() {
  const urls = [`${BASE_URL}/`, `${BASE_URL}/about`, `${BASE_URL}/services`, `${BASE_URL}/areas`];

  const scanDirs = [
    { dir: "constants/area-nodes", prefix: "areas", ext: ".ts" },
    { dir: "constants/services", prefix: "services", ext: ".ts" },
    { dir: "content/blog", prefix: "blog", ext: ".mdx" },
  ];

  scanDirs.forEach(({ dir, prefix, ext }) => {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath)) {
      fs.readdirSync(fullPath)
        .filter((f) => f.endsWith(ext) && f !== "index.ts")
        .forEach((f) => {
          const slug = f.replace(ext, "");
          urls.push(`${BASE_URL}/${prefix}/${slug}`);
        });
    }
  });

  return [...new Set(urls)];
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
  console.log("\n🚀 AEM ULTRA LEAN INDEXER v2.0 (HOTFIX) START");

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
