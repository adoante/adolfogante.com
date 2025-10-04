import fs from "fs"
import path from "path"

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
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
