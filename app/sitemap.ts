import fs from "fs"
import path from "path"
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const postsDir = path.join(process.cwd(), "markdown")
	const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"))

	const posts: MetadataRoute.Sitemap = await Promise.all(
		files.map(async (file) => {
			const { metadata } = await import(`@/markdown/${file}`)
			return {
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${file.replace(/\.mdx$/, "")}`,
				lastModified: new Date(metadata.date)
			}
		})
	)

	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
			lastModified: new Date()
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
			lastModified: new Date()
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/work`,
			lastModified: new Date()
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
			lastModified: new Date()
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/fun`,
			lastModified: new Date()
		},
		...posts
	]
}
