/**
 * [SYSTEM LIB]: CMS_ENGINE v17.9.9 (STABILIZED)
 * [STRATEGY]: Type-Safe Collections | Memoized I/O | Alias Resolution
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import type { BlogPost, CaseStudy, BaseContent } from "@/types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

/**
 * @function sanitize
 * @description แปลงข้อมูลดิบจาก MDX Frontmatter ให้เป็น Type-Safe Object
 * [FIXED]: เปลี่ยนจาก any เป็น Record<string, unknown> เพื่อผ่าน ESLint
 */
const sanitize = (data: Record<string, unknown>, slug: string) => {
  const getString = (key: string, fallback: string) =>
    typeof data[key] === "string" ? (data[key] as string) : fallback;

  const getArray = (key: string) => (Array.isArray(data[key]) ? (data[key] as string[]) : []);

  return {
    slug,
    title: getString("title", "Untitled Node"),
    date: getString("date", new Date().toISOString()),
    thumbnail: getString("thumbnail", "/images/shared/placeholder.webp"),
    author: "นายเอ็มซ่ามากส์",
    excerpt: getString("excerpt", getString("description", "")),
    tags: getArray("tags"),
    category: getString("category", "General"),
    client: getString("client", "Confidential"),
    industry: getString("industry", "Technology"),
    results: getArray("results"),
    technicalStack: getArray("technicalStack"),
    ogImage: getString("ogImage", getString("thumbnail", "/images/og-main.webp")),
  };
};

// --- [INTERNAL FETCHERS] ---

async function fetchCollection<T extends BaseContent>(folder: string): Promise<readonly T[]> {
  const dir = path.join(CONTENT_ROOT, folder);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  const collection = files.map((file) => {
    const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
    return sanitize(data as Record<string, unknown>, file.replace(".mdx", "")) as unknown as T;
  });

  return Object.freeze(
    collection.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  );
}

async function fetchDocument<T extends BaseContent>(
  folder: string,
  slug: string,
): Promise<(T & { content: string }) | null> {
  try {
    const filePath = path.join(CONTENT_ROOT, folder, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    return {
      ...(sanitize(data as Record<string, unknown>, slug) as unknown as T),
      content,
    };
  } catch {
    return null;
  }
}

// --- [PUBLIC API: MEMOIZED EXPORTS] ---

// Blog & Articles
export const getAllPosts = cache(() => fetchCollection<BlogPost>("blog"));
/** @alias สำหรับ Sitemap และระบบเก่า */
export const getAllBlogs = getAllPosts;

export const getPostBySlug = cache((slug: string) => fetchDocument<BlogPost>("blog", slug));

// Case Studies
export const getAllCaseStudies = cache(() => fetchCollection<CaseStudy>("case-studies"));

export const getCaseStudyBySlug = cache((slug: string) =>
  fetchDocument<CaseStudy>("case-studies", slug),
);
