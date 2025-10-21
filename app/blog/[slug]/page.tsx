import fs from "fs"
import { Metadata, ResolvingMetadata } from "next"
import path from "path"

interface BlogPostPageProps {
	params: { slug: string }
}

type BlogPostMetadata = {
	title: string
	date: string
	author: string
	summary: string
	tags: string[]
}

export async function generateMetadata({ params }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const { slug } = await params
	const { metadata }: { metadata: BlogPostMetadata } = await import(`@/markdown/${slug}.mdx`)

	const parentMetadata = await parent
	const parentKeywords = (parentMetadata.keywords as string[]) ?? []

	return {
		title: metadata.title,
		description: metadata.summary,
		keywords: [...parentKeywords, ...(metadata.tags ?? [])]
	}
}

export default async function Page({ params }: BlogPostPageProps) {
	const { slug } = await params
	const { default: Post } = await import(`@/markdown/${slug}.mdx`)
	return <Post />
}

export function generateStaticParams() {
	const postsDir = path.join(process.cwd(), "markdown")
	const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"))

	return files.map((file) => ({
		slug: file.replace(/\.mdx$/, ""),
	}))
}

export const dynamicParams = false
