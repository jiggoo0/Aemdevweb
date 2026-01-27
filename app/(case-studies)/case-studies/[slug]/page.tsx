/** @format */

import { notFound } from "next/navigation"
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/case-studies"
import { useMDXComponents } from "@/mdx-components"
import { MDXRemote } from "next-mdx-remote/rsc"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params
  const study = await getCaseStudyBySlug(slug)

  if (!study) notFound()

  const mdxComponents = useMDXComponents({})

  return (
    <article className="container mx-auto max-w-4xl px-6 pt-40 pb-24">
      <header className="mb-16">
        <h1 className="font-prompt text-5xl font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl">
          {study.frontmatter.title}
        </h1>
      </header>

      <div className="prose prose-slate prose-xl max-w-none">
        <MDXRemote source={study.content} components={mdxComponents} />
      </div>
    </article>
  )
}
