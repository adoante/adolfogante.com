import fs from "fs"
import path from "path"
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const postsDir = path.join(process.cwd(), "markdown")
	const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"))

	const blogPosts: MetadataRoute.Sitemap = files.map((file) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${file.replace(/\.mdx$/, "")}`,
	}))

	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/`
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/work`
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/fun`
		},
		...blogPosts
	]
}
