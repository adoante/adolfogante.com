import { MotionLink } from "@/lib/MotionElements"

interface BlogHeaderProps {
	title: string
	date: string
}

interface BlogFooterProps {
	summary: string
	author: string
}

interface BlogCardProps {
	slug: string
	title: string
	date: string
	summary: string
}

const BlogCard = ({ slug, title, date, summary }: BlogCardProps) => {
	return (
		<MotionLink
			whileHover={{
				scale: 1.025,
				transition: { duration: 0.2 },
			}}
			whileTap={{
				scale: 1.06,
				transition: { duration: 0.2 },
				backgroundColor: "var(--bg-light)"
			}}
			href={`/blog/${slug}`}
			className="flex flex-col bg-[var(--bg)] hover:bg-[var(--bg-light)] cursor-pointer space-y-2 p-5 shadow-md shadow-[color:var(--shadow)] rounded-sm"
		>
			<span className="flex flex-row items-center space-x-2 justify-between">
				<p className="font-bold">
					{title}
				</p>
				<p className="text-xs text-nowrap">
					{date}
				</p>
			</span>

			<p className="text-[var(--text-muted)]">
				{summary}
			</p>
		</MotionLink>
	)
}

const BlogHeader = ({ title, date }: BlogHeaderProps) => {
	return (
		<header
			className="bg-[var(--bg)] p-4 space-y-4 mb-10 rounded-tl-sm border-t-2 border-l-2 border-[var(--highlight)] shadow-md shadow-[color:var(--shadow)]"
		>
			<span className="flex flex-row justify-between items-center space-x-2">
				<h3 className="text-2xl font-bold">
					{title}
				</h3>
				<p className="min-w-max">
					{date}
				</p>
			</span>
		</header>
	)
}

const BlogFooter = ({ summary, author }: BlogFooterProps) => {
	return (
		<header
			className="bg-[var(--bg)] p-4 space-y-4 mt-10 rounded-br-sm border-b-2 border-r-2 border-[var(--highlight)] shadow-md shadow-[color:var(--shadow)]"
		>
			<span className="flex md:flex-row flex-col justify-between md:items-center md:space-x-8 space-y-2 md:space-y-0">
				<p className="font-bold">
					TLDR:
				</p>
				<p className="text-[var(--text-muted)]">
					{summary}
				</p>
				<p className="min-w-max">
					- {author}
				</p>
			</span>
		</header>
	)
}

export { BlogHeader, BlogFooter, BlogCard }
