import { BlogCard } from "@/components/Blog"
import { Quote } from "@/components/Quote"
import fs from "fs"
import { Metadata } from "next"
import path from "path"

export const metadata: Metadata = {
	title: "Blog",
	description: "Check out what could have just been a post on Twitter."
}

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
		<main className="space-y-10">
			<h1 className="text-4xl font-bold">Blog</h1>
			<p>
				Check out what could have just been a post on a Twitter.
			</p>
			<Quote
				quote="It's called 'X the everything app'."
				cite="Ludwig Ahgren"
			/>

			<h2 className="text-3xl font-semibold">Recent Posts</h2>

			<div className="border-10 bg-[var(--highlight)] border-[var(--highlight)] space-y-2 rounded-sm">
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
