import { ImageProps } from "next/image"
import { MotionLink } from "@/lib/MotionElements"
import { cloneElement } from "react"

interface ProjectCardProps {
	title: string
	caption: string
	image: React.ReactElement<ImageProps>
	link: string
}


const ProjectCard = ({ title, caption, image, link }: ProjectCardProps) => {
	const styledImage = cloneElement(image, {
		className: `${image.props.className ?? ""}  aspect-square object-cover rounded-t-sm`
	})
	return (
		<MotionLink
			initial={{ opacity: 0, x: 30 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				x: { type: "spring", duration: 1.2 },
				ease: "easeOut"
			}}
			whileHover={{
				scale: 1.025,
				transition: { duration: 0.1 }
			}}
			href={link}
			target="_blank"
			className="flex flex-col bg-[var(--bg)] border-b-4 md:border-b-8 border-b-[var(--highlight)] hover:bg-[var(--bg-light)] cursor-pointer md:max-w-[250px] shadow-md shadow-[color:var(--shadow)] rounded-t-sm"
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
