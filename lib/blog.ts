/** @format */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { BlogPost } from "@/types";

/**
 * AEMDEVWEB | ระบบจัดการคลังข้อมูลบทความ 2026
 * -------------------------------------------------------------------------
 * วางโครงสร้างระบบและจูนสมรรถนะโดย: นายเอ็มซ่ามากส์ (อลงกรณ์ ยมเกิด)
 * มาตรฐาน: Technical SEO & Entity Authority
 */

const postsDirectory = path.join(process.cwd(), "content/blog");

/**
 * นิยามพิกัดข้อมูลส่วนหัว (Frontmatter)
 * ปรับจูนพิกัดความเสี่ยงโดยใช้ unknown แทน any เพื่อล้าง Warning
 */
interface BlogFrontmatter {
  title: string;
  date: string | Date;
  description: string;
  thumbnail: string;
  category: string;
  author: string;
  readingTime: string;
  [key: string]: unknown;
}

/**
 * [OPTIMIZED]: พิกัดดึงข้อมูลชุดบทความทั้งหมด
 * ใช้ระบบ cache เพื่อทำ Request Memoization ให้พิกัดการโหลดวาร์ปที่สุด
 */
export const getBlogPostsMetadata = cache(async (): Promise<BlogPost[]> => {
  // ตรวจสอบพิกัดไดเรกทอรีเพื่อป้องกันระบบสะดุด
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // สกัดพิกัดข้อมูลดิบจากไฟล์ MDX
      const { data, content } = matter(fileContents);
      const frontmatter = data as BlogFrontmatter;

      return {
        id: slug,
        slug,
        title: frontmatter.title,
        date: String(frontmatter.date),
        description: frontmatter.description,
        thumbnail: frontmatter.thumbnail,
        category: frontmatter.category,
        author: frontmatter.author || "นายเอ็มซ่ามากส์",
        readingTime: frontmatter.readingTime,
        frontmatter: frontmatter,
        content,
      } as BlogPost;
    });

  // เรียงพิกัดบทความตามลำดับเวลา (Strategic Sorting)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
});

/**
 * getBlogPostBySlug - เจาะพิกัดข้อมูลบทความรายชิ้น
 * วางระบบเพื่อการแสดงผลพิกัดหน้า [slug]/page.tsx ที่สมบูรณ์แบบ
 */
export const getBlogPostBySlug = cache(
  async (slug: string): Promise<BlogPost | null> => {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) return null;

    try {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const frontmatter = data as BlogFrontmatter;

      return {
        id: slug,
        slug,
        title: frontmatter.title,
        date: String(frontmatter.date),
        description: frontmatter.description,
        thumbnail: frontmatter.thumbnail,
        category: frontmatter.category,
        author: frontmatter.author || "นายเอ็มซ่ามากส์",
        readingTime: frontmatter.readingTime,
        frontmatter: frontmatter,
        content,
      } as BlogPost;
    } catch (error) {
      // พิกัดจัดการข้อผิดพลาดเพื่อรักษาเสถียรภาพโครงสร้างระบบงาน
      console.error(
        `[AEM-ERROR]: พิกัดบทความ ${slug} มีปัญหาเชิงโครงสร้าง:`,
        error,
      );
      return null;
    }
  },
);

/**
 * พิกัดรวมสำหรับระบบ sitemap.ts และการทำ Static Params
 */
export const getAllPosts = getBlogPostsMetadata;
