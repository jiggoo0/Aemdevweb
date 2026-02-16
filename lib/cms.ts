/**
 * [LIB]: CMS_ENGINE v18.0.4 (TYPE_STRICT_COMPLIANT)
 * [STRATEGY]: Strict Interface Definition | No Implicit Any | ESLint Compliant
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, CaseStudy } from "@/types";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { AREA_NODES } from "@/constants/area-nodes";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const CASE_DIR = path.join(process.cwd(), "content/case-studies");

// --- [TYPE DEFINITIONS] ---
// [FIX]: กำหนดโครงสร้าง Frontmatter ให้ชัดเจนแทนการใช้ any
interface MDXAttributes {
  title?: string;
  date?: string | Date;
  category?: string;
  thumbnail?: string;
  coverImage?: string;
  description?: string;
  excerpt?: string;
  tags?: string[];
  readingTime?: string;
  client?: string;
  result?: string;
  results?: string[];
  image?: string;
  // อนุญาตให้มี Property อื่นๆ ได้ แต่ต้องระบุ Type เป็น unknown
  [key: string]: unknown;
}

// --- [01] DATA ADAPTERS ---

const mapToBlogPost = (slug: string, content: string, data: MDXAttributes): BlogPost => {
  const thumbnail = data.thumbnail || data.coverImage || "/images/blog/default-thumb.webp";
  return {
    slug,
    content,
    title: data.title || "Untitled Post",
    // [SAFETY]: รองรับทั้ง String และ Date Object
    date: data.date ? new Date(data.date as string | Date).toISOString() : new Date().toISOString(),
    category: data.category || "General",
    thumbnail,
    coverImage: thumbnail,
    description: data.description || data.excerpt || "",
    excerpt: data.excerpt || data.description || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: data.readingTime || "5 min read",
  };
};

const mapToCaseStudy = (slug: string, content: string, data: MDXAttributes): CaseStudy => {
  const image = data.thumbnail || data.image || "/images/case-studies/preview.webp";
  return {
    slug,
    content,
    title: data.title || "Success Case",
    client: data.client || "Confidential Client",
    result: data.result || (Array.isArray(data.results) ? data.results[0] : "Growth Guaranteed"),
    thumbnail: image,
    image: image,
    description: data.description || "",
    date: data.date ? new Date(data.date as string | Date).toISOString() : new Date().toISOString(),
    results: Array.isArray(data.results) ? data.results : [],
  };
};

// --- [02] RETRIEVAL ENGINES ---

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const fileNames = fs.readdirSync(BLOG_DIR);

  return fileNames
    .filter((fn) => fn.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(BLOG_DIR, fileName);
      const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
      // [CAST]: แปลง any จาก gray-matter ให้เป็น Interface ที่เรากำหนด
      return mapToBlogPost(slug, content, data as MDXAttributes);
    })
    .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime());
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (!fs.existsSync(CASE_DIR)) return [];
  const fileNames = fs.readdirSync(CASE_DIR);

  return fileNames
    .filter((fn) => fn.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(CASE_DIR, fileName);
      const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
      return mapToCaseStudy(slug, content, data as MDXAttributes);
    })
    .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime());
}

// --- [03] SPECIFIC LOOKUPS ---

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  try {
    const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
    return mapToBlogPost(slug, content, data as MDXAttributes);
  } catch (e) {
    console.error(`[CMS_ERROR]: Failed to parse post ${slug}`, e);
    return undefined;
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  const fullPath = path.join(CASE_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  try {
    const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
    return mapToCaseStudy(slug, content, data as MDXAttributes);
  } catch (e) {
    console.error(`[CMS_ERROR]: Failed to parse case study ${slug}`, e);
    return undefined;
  }
}

// --- [04] STATIC LOOKUPS ---

export async function getAllServices() {
  return MASTER_REGISTRY;
}

export async function getAreaBySlug(slug: string) {
  return AREA_NODES.find((a) => a.slug === slug);
}
