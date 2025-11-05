import Link from "next/link"
import { GithubLogoIcon, LinkedinLogoIcon, ReadCvLogoIcon } from "@phosphor-icons/react/ssr"

const Socials = () => {
	return (
		<div className="flex space-x-4">
			{[
				[process.env.RESUME_LINK!, <ReadCvLogoIcon className="w-7 h-7" key="resume" />],
				["https://github.com/adoante/", <GithubLogoIcon className="w-7 h-7" key="github" />],
				["https://www.linkedin.com/in/adolfogante/", <LinkedinLogoIcon className="w-7 h-7" key="linkedin" />],
			].map(([url, icon]) => (

				<Link className="hover:text-[var(--link)]" key={url as string} href={url as string} target="_blank" rel="noopener noreferrer">
					{icon}
				</Link>
			))}
		</div>
	)
}

export { Socials }
