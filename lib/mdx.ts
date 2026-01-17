/** @format */
import fs from "fs"
import path from "path"
import matter from "gray-matter"

// ✅ Type Definition
export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  coverImage: string
  category: string
  content: string
  readingTime: string
  isFeatured?: boolean
}

const BLOG_PATH = path.join(process.cwd(), "content/blog")

// ⚡ Helper: คำนวณเวลาอ่าน (Reading Time)
function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200
  const noOfWords = text.split(/\s/g).length
  const minutes = Math.ceil(noOfWords / wordsPerMinute)
  return `${minutes} นาที`
}

// 📂 Get All Posts
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_PATH)) return []

  const files = fs.readdirSync(BLOG_PATH)

  const posts = files
    .filter((file) => /\.(mdx|md)$/.test(file))
    .map((file) => {
      try {
        const filePath = path.join(BLOG_PATH, file)
        const fileContent = fs.readFileSync(filePath, "utf8")
        const { data, content } = matter(fileContent)

        return {
          slug: file.replace(/\.(mdx|md)$/, ""),
          title: data.title || "Untitled",
          date: data.date || new Date().toISOString(),
          description: data.description || "",
          coverImage: data.coverImage || "/images/og-image.png",
          category: data.category || "General",
          isFeatured: data.isFeatured || false,
          content: content,
          readingTime: calculateReadingTime(content),
        } as BlogPost
      } catch (e) {
        console.error(`❌ Error parsing ${file}`, e)
        return null
      }
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

// 🔍 Get Single Post
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const allPosts = await getAllPosts()
  return allPosts.find((post) => post.slug === slug) || null
}
