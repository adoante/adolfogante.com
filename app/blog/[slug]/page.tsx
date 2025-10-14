import fs from "fs"
import { Metadata } from "next"
import path from "path"

interface BlogPostPageProps {
	params: { slug: string }
}

type BlogPostMetadata = {
	title: string
	date: string
	author: string
	summary: string
}

export async function generateMetadata({ params: { slug } }: BlogPostPageProps): Promise<Metadata> {
	const { metadata }: { metadata: BlogPostMetadata } = await import(`@/markdown/${slug}.mdx`)

	return {
		title: metadata.title,
		description: metadata.summary
	}
}

export default async function Page({ params }: { params: { slug: string } }) {
	const { slug } = params
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
