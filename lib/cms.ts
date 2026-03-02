/**
 * [LIB]: CMS_ENGINE v18.0.4 (TYPE_STRICT_COMPLIANT)
 * [STRATEGY]: Strict Interface Definition | No Implicit Any | ESLint Compliant
 */

import fs from "fs";
import { promises as fsp } from "fs"; // [PERFORMANCE]: Async File I/O
import path from "path";
import matter from "gray-matter";
import { cacheLife, cacheTag } from "next/cache"; // [NEW]: Next.js 16 Caching
import type { BlogPost, CaseStudy } from "@/types";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { AREA_NODES } from "@/constants/area-nodes";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const CASE_DIR = path.join(process.cwd(), "content/case-studies");

// --- [TYPE DEFINITIONS] ---
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
  [key: string]: unknown;
}

// --- [01] DATA ADAPTERS ---

const mapToBlogPost = (slug: string, content: string, data: MDXAttributes): BlogPost => {
  const thumbnail = data.thumbnail || data.coverImage || "/images/blog/default-thumb.webp";
  return {
    slug,
    content,
    title: data.title || "Untitled Post",
    date: data.date
      ? new Date(data.date as string | Date).toISOString()
      : "2026-01-01T00:00:00.000Z",
    category: data.category || "General",
    thumbnail,
    coverImage: thumbnail,
    description: data.description || data.excerpt || "",
    excerpt: data.excerpt || data.description || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: data.readingTime || "5 min read",
    // [E-E-A-T]: บังคับฉีดข้อมูลผู้เชี่ยวชาญ (Author Identity) เข้าไปในทุกบทความ
    author: {
      name: MASTER_REGISTRY[0]?.expert?.displayName || "นายเอ็มซ่ามากส์",
      role: MASTER_REGISTRY[0]?.expert?.jobTitle || "Technical SEO Specialist",
      image: "/images/avatar.webp",
    },
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
    date: data.date
      ? new Date(data.date as string | Date).toISOString()
      : "2026-01-01T00:00:00.000Z",
    results: Array.isArray(data.results) ? data.results : [],
    // [E-E-A-T]: บังคับฉีดข้อมูลผู้เชี่ยวชาญ (Author Identity) เข้าไปในทุก Case Study
    author: {
      name: MASTER_REGISTRY[0]?.expert?.displayName || "นายเอ็มซ่ามากส์",
      role: MASTER_REGISTRY[0]?.expert?.jobTitle || "Technical SEO Specialist",
      image: "/images/avatar.webp",
    },
  };
};

// --- [02] RETRIEVAL ENGINES ---

/**
 * [STRATEGY]: Data Caching with High Revalidation Cycle
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("blog-posts");

  if (!fs.existsSync(BLOG_DIR)) return [];
  const fileNames = await fsp.readdir(BLOG_DIR);

  const posts = await Promise.all(
    fileNames
      .filter((fn) => fn.endsWith(".mdx"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(BLOG_DIR, fileName);
        const fileContent = await fsp.readFile(fullPath, "utf8");
        const { data, content } = matter(fileContent);
        return mapToBlogPost(slug, content, data as MDXAttributes);
      }),
  );

  return posts.sort(
    (a: BlogPost, b: BlogPost) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
  );
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("case-studies");

  if (!fs.existsSync(CASE_DIR)) return [];
  const fileNames = await fsp.readdir(CASE_DIR);

  const cases = await Promise.all(
    fileNames
      .filter((fn) => fn.endsWith(".mdx"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(CASE_DIR, fileName);
        const fileContent = await fsp.readFile(fullPath, "utf8");
        const { data, content } = matter(fileContent);
        return mapToCaseStudy(slug, content, data as MDXAttributes);
      }),
  );

  return cases.sort(
    (a: CaseStudy, b: CaseStudy) =>
      new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime(),
  );
}

// --- [03] SPECIFIC LOOKUPS ---

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  "use cache";
  cacheTag(`post-${slug}`);

  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  try {
    const fileContent = await fsp.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContent);
    return mapToBlogPost(slug, content, data as MDXAttributes);
  } catch (e) {
    console.error(`[CMS_ERROR]: Failed to parse post ${slug}`, e);
    return undefined;
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  "use cache";
  cacheTag(`case-${slug}`);

  const fullPath = path.join(CASE_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return undefined;

  try {
    const fileContent = await fsp.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContent);
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
