"use client"

import { motion } from "motion/react"
import { ImageProps } from "next/image"
import Link from "next/link"
import { cloneElement } from "react"

interface ProjectCardProps {
	title: string
	caption: string
	image: React.ReactElement<ImageProps>
	link: string
}

const MotionLink = motion(Link)

const ProjectCard = ({ title, caption, image, link }: ProjectCardProps) => {
	const styledImage = cloneElement(image, {
		className: `${image.props.className ?? ""} aspect-square object-cover`
	})
	return (
		<MotionLink
			whileHover={{
				scale: 1.025,
				transition: { duration: 0.1 }
			}}
			href={link}
			target="_blank"
			className="flex flex-col items-center bg-[var(--bg)] border-b-4 md:border-b-8 border-b-[var(--highlight)] hover:bg-[var(--bg-light)] cursor-pointer max-w-[250px] shadow-2xl w-full"
		>
			{styledImage}
			<div className="p-5 space-y-2">
				<h4 className="font-bold md:text-xl text-lg">{title}</h4>
				<p>{caption}</p>
			</div>
		</MotionLink>
	)
}

export { ProjectCard }
export type { ProjectCardProps }
