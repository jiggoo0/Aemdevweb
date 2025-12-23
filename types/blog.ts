// types/blog.ts
export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  date: string
  category: string
  image: string
  readTime: string
  content: string
  author:
    | {
        name: string
        avatar: string
        role: string
      }
    | string
}
