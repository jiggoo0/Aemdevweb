import type { BlogPost, CaseStudy } from "@/types";

export const mapToBlogPost = (slug: string, content: string, data: any): BlogPost => {
  return {
    ...data,
    slug,
    content,
    // [FIXED]: รับประกันว่ามี coverImage เสมอ
    coverImage: data.coverImage || data.thumbnail || "/images/blog/default-thumb.webp",
    thumbnail: data.thumbnail || data.coverImage,
    description: data.description || data.excerpt || "",
    category: data.category || "General",
    date: data.date || new Date().toISOString(),
  } as BlogPost;
};

export const mapToCaseStudy = (slug: string, content: string, data: any): CaseStudy => {
  return {
    ...data,
    slug,
    content,
    // [FIXED]: จัดการฟิลด์ result และ image ให้ตรงกับ Interface
    result: data.result || (Array.isArray(data.results) ? data.results[0] : "Success"),
    image: data.image || data.thumbnail || "/images/case-studies/default.webp",
    thumbnail: data.thumbnail || data.image,
    date: data.date || new Date().toISOString(),
  } as CaseStudy;
};
