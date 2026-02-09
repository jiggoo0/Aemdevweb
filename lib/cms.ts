/**
 * [SYSTEM LIB]: CMS_ENGINE v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Type-Safe Collections | Generic Document Adapter | Recursive Integrity
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import type { BlogPost, CaseStudy, BaseContent } from "@/types";

// --- [01. INFRASTRUCTURE CONFIG] ---

const CONTENT_ROOT = path.join(process.cwd(), "content");
const DIRECTORIES = {
  blog: path.join(CONTENT_ROOT, "blog"),
  caseStudies: path.join(CONTENT_ROOT, "case-studies"),
} as const;

/**
 * [UTILITY]: Internal Data Sanitizer
 * แปลงข้อมูลดิบจาก Frontmatter ให้เป็น Type ที่ปลอดภัยตามมาตรฐานระบบ
 */
const sanitizeFrontmatter = (
  data: Record<string, unknown>,
  slug: string,
): Record<string, unknown> => {
  const str = (val: unknown, fallback: string) => (typeof val === "string" ? val : fallback);
  const arr = (val: unknown) => (Array.isArray(val) ? val : []);

  // Base Logic สำหรับทุก Content Node
  const base: BaseContent = {
    slug,
    title: str(data.title, "Untitled Node"),
    description: str(data.description, ""),
    excerpt: str(data.excerpt, str(data.description, "")),
    date: str(data.date, new Date().toISOString().split("T")[0]),
    thumbnail: str(data.thumbnail, "/images/shared/placeholder.webp"),
    tags: Object.freeze(arr(data.tags) as string[]),
    author: "นายเอ็มซ่ามากส์", // [MANDATE]: Locked by system policy
    ogImage: str(data.ogImage, str(data.thumbnail, "")),
    keywords: Object.freeze(arr(data.keywords) as string[]),
  };

  return {
    ...base,
    // Blog Specific
    category: str(data.category, "General"),
    readingTime: str(data.readingTime, "5 min"),
    // Case Study Specific
    client: str(data.client, "Confidential Partner"),
    industry: str(data.industry, "Industrial"),
    results: Object.freeze(arr(data.results) as string[]),
    technicalStack: Object.freeze(arr(data.technicalStack) as string[]),
  };
};

// --- [02. CORE ENGINE: GENERIC FETCHERS] ---

/**
 * @function fetchCollection
 * @description ดึงข้อมูลทั้งหมดจาก Directory ที่กำหนด พร้อมระบบ Sort ตามวันที่
 * [FIX]: Added Generic Constraint <T extends BaseContent> to ensure date existence
 */
async function fetchCollection<T extends BaseContent>(dirPath: string): Promise<readonly T[]> {
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);

  const collection = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContent);

      return sanitizeFrontmatter(
        data as Record<string, unknown>,
        file.replace(".mdx", ""),
      ) as unknown as T;
    })
    // [FIX]: Removed 'any' type casting, leveraging Generic Constraint
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return Object.freeze(collection);
}

/**
 * @function fetchDocument
 * @description ดึงข้อมูลไฟล์เดี่ยวพร้อมเนื้อหา (Content)
 */
async function fetchDocument<T>(dirPath: string, slug: string): Promise<T | null> {
  try {
    const filePath = path.join(dirPath, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      ...sanitizeFrontmatter(data as Record<string, unknown>, slug),
      content,
    } as unknown as T;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(`[CMS_ERROR]: Failed to fetch document ${slug}`, error);
    }
    return null;
  }
}

// --- [03. PUBLIC API: MEMOIZED EXPORTS] ---

// Blog API
export const getAllPosts = cache(() => fetchCollection<BlogPost>(DIRECTORIES.blog));
export const getPostBySlug = cache((slug: string) =>
  fetchDocument<BlogPost>(DIRECTORIES.blog, slug),
);

// Case Study API
export const getAllCaseStudies = cache(() => fetchCollection<CaseStudy>(DIRECTORIES.caseStudies));
export const getCaseStudyBySlug = cache((slug: string) =>
  fetchDocument<CaseStudy>(DIRECTORIES.caseStudies, slug),
);
