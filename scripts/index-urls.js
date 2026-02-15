/**
 * AEM ULTRA LEAN INDEXER (Pure JS)
 * No TypeScript
 * No googleapis
 * Uses google-auth-library + native fetch (Node 22+)
 */

const { JWT } = require("google-auth-library");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://aemdevweb.com";
const INDEXING_ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish";

function loadServiceAccount() {
  const raw = fs.readFileSync(path.join(process.cwd(), "service-account.json"), "utf-8");

  const parsed = JSON.parse(raw);

  if (!parsed.client_email || !parsed.private_key) {
    throw new Error("Invalid service-account.json");
  }

  return parsed;
}

async function getAccessToken() {
  const { client_email, private_key } = loadServiceAccount();

  const client = new JWT({
    email: client_email,
    key: private_key,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  });

  const { access_token } = await client.authorize();

  if (!access_token) {
    throw new Error("Failed to obtain access token");
  }

  return access_token;
}

function collectUrls() {
  const AREA_NODES = require("../constants/area-nodes");
  const MASTER_REGISTRY = require("../constants/master-registry");

  const baseUrls = [
    `${BASE_URL}/`,
    `${BASE_URL}/about`,
    `${BASE_URL}/services`,
    `${BASE_URL}/areas`,
    ...AREA_NODES.map((n) => `${BASE_URL}/areas/${n.slug}`),
    ...MASTER_REGISTRY.map((s) => `${BASE_URL}/services/${s.templateSlug}`),
  ];

  const blogDir = path.join(process.cwd(), "content/blog");

  const blogUrls = fs.existsSync(blogDir)
    ? fs
        .readdirSync(blogDir)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => `${BASE_URL}/blog/${f.replace(".mdx", "")}`)
    : [];

  return [...baseUrls, ...blogUrls];
}

async function publishUrl(url, token) {
  const response = await fetch(INDEXING_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      url,
      type: "URL_UPDATED",
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP ${response.status}: ${text}`);
  }
}

async function main() {
  console.log("AEM ULTRA LEAN INDEXER START");

  const token = await getAccessToken();
  const urls = collectUrls();

  console.log(`Detected ${urls.length} URLs`);

  let success = 0;

  for (const url of urls) {
    try {
      await publishUrl(url, token);
      success++;
      console.log(`[${success}/${urls.length}] SUCCESS: ${url}`);
      await new Promise((r) => setTimeout(r, 500));
    } catch (err) {
      console.error(`FAILED: ${url}`, err.message);
    }
  }

  console.log(`Completed ${success}/${urls.length}`);
}

main().catch((err) => {
  console.error("CRITICAL ERROR:", err.message);
});
