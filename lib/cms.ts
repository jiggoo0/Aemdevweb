/**
 * [SYSTEM LIB]: CMS_ENGINE v16.4.5 (PROD_READY)
 * [STRATEGY]: Zero-Any Policy | Strict Type Guarding | Memoized Extraction
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import type { BlogPost, CaseStudy } from "@/types";

const CONTENT_PATH = path.join(process.cwd(), "content");
const BLOG_PATH = path.join(CONTENT_PATH, "blog");
const CASE_STUDIES_PATH = path.join(CONTENT_PATH, "case-studies");

/**
 * @function getSafeData
 * @description แปลงข้อมูล unknown จาก gray-matter ให้เป็น BlogPost & CaseStudy ที่ปลอดภัย
 */
const getSafeData = (data: Record<string, unknown>, slug: string): BlogPost & CaseStudy => {
  const s = (val: unknown, fallback: string) => (typeof val === "string" ? val : fallback);
  const a = (val: unknown) => (Array.isArray(val) ? val : []);

  const title = s(data.title, "Untitled Node");
  const description = s(data.description, "");

  return {
    slug,
    title,
    description,
    excerpt: s(data.excerpt, description),
    date: s(data.date, new Date().toISOString().split("T")[0]),
    thumbnail: s(data.thumbnail, "/images/shared/placeholder.webp"),
    tags: Object.freeze(a(data.tags) as string[]),
    author: s(data.author, "นายเอ็มซ่ามากส์"), //ห้ามแก้ไข
    category: s(data.category, "General"),
    readingTime: s(data.readingTime, "5 min"),
    client: s(data.client, "Confidential Partner"),
    industry: s(data.industry, "General"),
    results: Object.freeze(a(data.results) as string[]),
    technicalStack: Object.freeze(a(data.technicalStack) as string[]),
    content: "",
  } as BlogPost & CaseStudy;
};

// --- [BLOG ENGINE] ---

export const getAllPosts = cache(async (): Promise<readonly BlogPost[]> => {
  if (!fs.existsSync(BLOG_PATH)) return [];
  const files = fs.readdirSync(BLOG_PATH);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file): BlogPost => {
      const { data } = matter(fs.readFileSync(path.join(BLOG_PATH, file), "utf8"));
      return getSafeData(data as Record<string, unknown>, file.replace(".mdx", ""));
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return Object.freeze(posts);
});

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    return { ...getSafeData(data as Record<string, unknown>, slug), content };
  } catch {
    return null;
  }
});

// --- [CASE STUDY ENGINE] ---

export const getAllCaseStudies = cache(async (): Promise<readonly CaseStudy[]> => {
  if (!fs.existsSync(CASE_STUDIES_PATH)) return [];
  const files = fs.readdirSync(CASE_STUDIES_PATH);

  const cases = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file): CaseStudy => {
      const { data } = matter(fs.readFileSync(path.join(CASE_STUDIES_PATH, file), "utf8"));
      return getSafeData(data as Record<string, unknown>, file.replace(".mdx", ""));
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return Object.freeze(cases);
});

export const getCaseStudyBySlug = cache(async (slug: string): Promise<CaseStudy | null> => {
  try {
    const filePath = path.join(CASE_STUDIES_PATH, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    return { ...getSafeData(data as Record<string, unknown>, slug), content };
  } catch {
    return null;
  }
});
