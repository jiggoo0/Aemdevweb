/**
 * [LIB]: CMS_ENGINE v18.0.1 (STRICT_DATE_SORTING)
 * [STRATEGY]: Safe File I/O | Type Casting | Content Separation
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, CaseStudy } from "@/types";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { AREA_NODES } from "@/constants/area-nodes";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const CASE_DIR = path.join(process.cwd(), "content/case-studies");

// --- [01] DATA ADAPTERS ---

export const mapToBlogPost = (
  slug: string,
  content: string,
  data: Record<string, unknown>,
): BlogPost => ({
  slug,
  content,
  title: (data.title as string) || "Untitled Post",
  date: (data.date as string) || new Date().toISOString(),
  category: (data.category as string) || "General",
  thumbnail:
    (data.thumbnail as string) || (data.coverImage as string) || "/images/blog/default-thumb.webp",
  description: (data.description as string) || (data.excerpt as string) || "",
  excerpt: (data.excerpt as string) || (data.description as string) || "",
  tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
  readingTime: (data.readingTime as string) || "5 min read",
  coverImage: (data.thumbnail as string) || "/images/blog/default-thumb.webp",
});

export const mapToCaseStudy = (
  slug: string,
  content: string,
  data: Record<string, unknown>,
): CaseStudy => ({
  slug,
  content,
  title: (data.title as string) || "Success Case",
  client: (data.client as string) || "Confidential Client",
  result:
    (data.result as string) ||
    (Array.isArray(data.results) ? (data.results[0] as string) : "Growth Guaranteed"),
  thumbnail:
    (data.thumbnail as string) || (data.image as string) || "/images/case-studies/preview.webp",
  image: (data.thumbnail as string) || "/images/case-studies/preview.webp",
  description: (data.description as string) || "",
  date: (data.date as string) || new Date().toISOString(),
  results: Array.isArray(data.results) ? (data.results as string[]) : [],
});

// --- [02] RETRIEVAL ENGINES ---

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const fileNames = fs.readdirSync(BLOG_DIR);

  return (
    fileNames
      .filter((fn) => fn.endsWith(".mdx"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, fileName), "utf8"));
        return mapToBlogPost(slug, content, data);
      })
      // [FIXED]: Handle undefined dates safely with Nullish Coalescing (??)
      .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime())
  );
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (!fs.existsSync(CASE_DIR)) return [];
  const fileNames = fs.readdirSync(CASE_DIR);

  return (
    fileNames
      .filter((fn) => fn.endsWith(".mdx"))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const { data, content } = matter(fs.readFileSync(path.join(CASE_DIR, fileName), "utf8"));
        return mapToCaseStudy(slug, content, data);
      })
      // [FIXED]: Handle undefined dates safely with Nullish Coalescing (??)
      .sort((a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime())
  );
}

// --- [03] SPECIFIC LOOKUPS ---

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
export async function getAreaBySlug(slug: string) {
  return Promise.resolve(AREA_NODES.find((a) => a.slug === slug));
}
