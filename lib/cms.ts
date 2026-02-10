/**
 * [SYSTEM LIB]: CMS_ENGINE v17.5.5 (STABILIZED_FINAL)
 * [STRATEGY]: Type-Safe Collections | Generic Document Adapter | Recursive Integrity
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
// [TYPE SAFETY]: Import Interfaces ที่ถูกต้องจากระบบ
import type { BlogPost, CaseStudy, BaseContent } from "@/types";

// --- [01. INFRASTRUCTURE CONFIG] ---

const CONTENT_ROOT = path.join(process.cwd(), "content");

// [CONFIG]: Map เส้นทางของ Directory ให้ชัดเจน
const DIRECTORIES = {
  blog: path.join(CONTENT_ROOT, "blog"),
  caseStudies: path.join(CONTENT_ROOT, "case-studies"),
} as const;

/**
 * [UTILITY]: Internal Data Sanitizer
 * แปลงข้อมูลดิบจาก Frontmatter ให้เป็น Type ที่ปลอดภัย โดยการใส่ Default Value
 * ป้องกันปัญหากรณีลืมใส่ field ในไฟล์ .mdx
 */
const sanitizeFrontmatter = (
  data: Record<string, unknown>,
  slug: string
): Record<string, unknown> => {
  // Helper functions เพื่อลดความซ้ำซ้อน
  const str = (val: unknown, fallback: string) =>
    typeof val === "string" ? val : fallback;
  const arr = (val: unknown) => (Array.isArray(val) ? val : []);

  // 1. สร้าง Base Object ที่ทุก Content ต้องมี
  const baseData = {
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

  // 2. ผสานข้อมูลเฉพาะ (Blog / Case Study)
  // หมายเหตุ: การรวมทุกฟิลด์ไว้ที่นี่เพื่อให้ Adapter รองรับ Generic Type ได้ยืดหยุ่น
  return {
    ...baseData,
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
 * [CONSTRAINT]: T ต้องเป็น Type ที่ extends BaseContent เพื่อให้มั่นใจว่ามี date และ slug
 */
async function fetchCollection<T extends BaseContent>(
  dirPath: string
): Promise<readonly T[]> {
  // 1. Safety Check: ถ้าไม่มี Folder ให้ return ว่าง (ป้องกัน Crash)
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath);

  const collection = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      // gray-matter คืนค่า data เป็น any โดยธรรมชาติ จึงต้อง cast เป็น Record<string, unknown>
      const { data } = matter(fileContent);

      return sanitizeFrontmatter(
        data as Record<string, unknown>,
        file.replace(".mdx", "")
      ) as unknown as T;
    })
    // [LOGIC]: เรียงลำดับจากใหม่ไปเก่า (Descending)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return Object.freeze(collection);
}

/**
 * @function fetchDocument
 * @description ดึงข้อมูลไฟล์เดี่ยวพร้อมเนื้อหา (Content) สำหรับหน้า Detail
 */
async function fetchDocument<T extends BaseContent>(
  dirPath: string,
  slug: string
): Promise<(T & { content: string }) | null> {
  try {
    const filePath = path.join(dirPath, `${slug}.mdx`);
    
    // Safety Check: ถ้าหาไฟล์ไม่เจอ
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    // ผสาน Frontmatter เข้ากับ Content Body
    return {
      ...(sanitizeFrontmatter(
        data as Record<string, unknown>,
        slug
      ) as unknown as T),
      content,
    };
  } catch (error) {
    // [LOGGING]: แจ้งเตือนเฉพาะในโหมด Dev เพื่อไม่ให้รก Log Production
    if (process.env.NODE_ENV === "development") {
      console.error(`[CMS_ERROR]: Failed to fetch document ${slug}`, error);
    }
    return null;
  }
}

// --- [03. PUBLIC API: MEMOIZED EXPORTS] ---
// ใช้ React Cache เพื่อป้องกันการอ่านไฟล์ซ้ำซ้อนใน Request เดียวกัน

// Blog API
export const getAllPosts = cache(() => 
  fetchCollection<BlogPost>(DIRECTORIES.blog)
);
export const getPostBySlug = cache((slug: string) =>
  fetchDocument<BlogPost>(DIRECTORIES.blog, slug)
);

// Case Study API
export const getAllCaseStudies = cache(() =>
  fetchCollection<CaseStudy>(DIRECTORIES.caseStudies)
);
export const getCaseStudyBySlug = cache((slug: string) =>
  fetchDocument<CaseStudy>(DIRECTORIES.caseStudies, slug)
);
