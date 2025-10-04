import { BlogCard } from "@/components/BlogCard"
import { Quote } from "@/components/Quote"
import fs from "fs"
import path from "path"

export default async function Blog() {
	const postsDir = path.join(process.cwd(), "markdown")
	const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"))

	// dynamic import for each file
	const posts = await Promise.all(
		files.map(async (file) => {
			const { default: Content, metadata } = await import(`@/markdown/${file}`)
			return {
				Content,
				metadata,
				slug: file.replace(/\.mdx$/, ""),
			}
		})
	)

	posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())

	return (
		<main className="mx-auto max-w-5xl w-full px-5 space-y-10 text-left">
			<h1 className="text-4xl font-bold">Blog</h1>
			<p>
				Check out what could have just been a post on a Twitter.
			</p>
			<Quote
				quote="It's called 'X the everything app'."
				cite="Ludwig Ahgren"
			/>

			<h2 className="text-3xl font-semibold">Recent Posts</h2>

			<div className="space-y-10">
				{posts.map(({ metadata, slug }) => (
					<BlogCard
						key={slug}
						slug={slug}
						title={metadata.title}
						date={metadata.date}
						summary={metadata.summary}
					/>
				))}
			</div>
		</main>
	)
}
