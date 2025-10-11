"use client"

import { motion } from "motion/react"
import Link from "next/link"

interface BlogCardProps {
	slug: string
	title: string
	date: string
	summary: string
}

const MotionLink = motion.create(Link)

const BlogCard = ({ slug, title, date, summary }: BlogCardProps) => {
	return (
		<MotionLink
			whileHover={{
				scale: 1.025,
				transition: { duration: 0.1 }
			}}
			href={`/blog/${slug}`}
			className="flex flex-col bg-[var(--bg)] border-r-4 md:border-r-8 border-r-[var(--highlight)] border-l-4 md:border-l-8 border-l-[var(--highlight)] hover:bg-[var(--bg-light)] cursor-pointer space-y-2 p-5 shadow-md shadow-[color:var(--shadow)]"
		>
			<h2 className="font-bold md:text-3xl text-2xl">
				{title}
			</h2>
			<p>
				{date}
			</p>
			<p className="text-[var(--text-muted)]">
				{summary}
			</p>
			<p className="text-xs">
				Read More...
			</p>
		</MotionLink>
	)
}

export { BlogCard }
