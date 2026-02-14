/**
 * [LIB]: CMS_ENGINE v17.9.92 (ULTIMATE_HARDENED)
 * [STRATEGY]: Record-safe Access | No-Any Internal Logic | Strict Normalization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, CaseStudy } from "@/types";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { AREA_NODES } from "@/constants/area-nodes";

// --- Configuration ---
const BLOG_DIR = path.join(process.cwd(), "content/blog");
const CASE_DIR = path.join(process.cwd(), "content/case-studies");

// =========================================
// [01] DATA ADAPTERS (STRICT NORMALIZATION)
// =========================================

/**
 * [ADAPTER]: จัดการข้อมูลบล็อกให้เข้าสู่โครงสร้างที่สมบูรณ์ (Zero-Any)
 */
export const mapToBlogPost = (
  slug: string,
  content: string,
  data: Record<string, unknown>,
): BlogPost => {
  return {
    slug,
    content,
    // [STRICT_CASTING]: ตรวจสอบและ Cast ข้อมูลทีละฟิลด์
    title: (data.title as string) || "Untitled Post",
    date: (data.date as string) || new Date().toISOString(),
    category: (data.category as string) || "General",
    coverImage:
      (data.coverImage as string) ||
      (data.thumbnail as string) ||
      "/images/blog/default-thumb.webp",
    thumbnail:
      (data.thumbnail as string) ||
      (data.coverImage as string) ||
      "/images/blog/default-thumb.webp",
    description: (data.description as string) || (data.excerpt as string) || "",
    excerpt: (data.excerpt as string) || (data.description as string) || "",
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    readingTime: (data.readingTime as string) || "5 min read",
  } as BlogPost;
};

/**
 * [ADAPTER]: จัดการข้อมูลกรณีศึกษา และรองรับ Legacy Fields
 */
export const mapToCaseStudy = (
  slug: string,
  content: string,
  data: Record<string, unknown>,
): CaseStudy => {
  return {
    slug,
    content,
    title: (data.title as string) || "Success Case",
    client: (data.client as string) || "Confidential Client",
    result:
      (data.result as string) ||
      (Array.isArray(data.results) ? (data.results[0] as string) : "Growth Guaranteed"),
    image:
      (data.image as string) || (data.thumbnail as string) || "/images/case-studies/preview.webp",
    thumbnail:
      (data.thumbnail as string) || (data.image as string) || "/images/case-studies/preview.webp",
    description: (data.description as string) || (data.excerpt as string) || "",
    date: (data.date as string) || new Date().toISOString(),
  } as CaseStudy;
};

// =========================================
// [02] CONTENT RETRIEVAL ENGINES
// =========================================

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const fileNames = fs.readdirSync(BLOG_DIR);

  const posts = fileNames
    .filter((fn) => fn.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(BLOG_DIR, fileName);
      const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

      // ส่งข้อมูลเข้า Adapter พร้อม Casting เป็น Record<string, unknown>
      return mapToBlogPost(slug, content, data as Record<string, unknown>);
    });

  // [SAFE_SORT]: ป้องกันการพังจากการเปรียบเทียบค่าวันที่
  return posts.sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA;
  });
}

/** [ALIAS]: สำหรับเรียกใช้ตามมาตรฐานเดิม */
export const getAllBlogs = getAllPosts;

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (!fs.existsSync(CASE_DIR)) return [];
  const fileNames = fs.readdirSync(CASE_DIR);

  const cases = fileNames
    .filter((fn) => fn.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(CASE_DIR, fileName);
      const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
      return mapToCaseStudy(slug, content, data as Record<string, unknown>);
    });

  return cases.sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA;
  });
}

// =========================================
// [03] SPECIFIC DATA LOOKUPS
// =========================================

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  const cases = await getAllCaseStudies();
  return cases.find((c) => c.slug === slug);
}

export async function getAllServices() {
  return Promise.resolve(MASTER_REGISTRY);
}

export async function getServiceBySlug(slug: string) {
  const services = await getAllServices();
  return services.find((s) => s.templateSlug === slug || s.id.toLowerCase() === slug.toLowerCase());
}

export async function getAreaBySlug(slug: string) {
  return Promise.resolve(AREA_NODES.find((a) => a.slug === slug));
}
