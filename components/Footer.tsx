"use client"

import Link from "next/link"
import { GithubLogoIcon, LinkedinLogoIcon, ReadCvLogoIcon } from "@phosphor-icons/react/ssr"
import DarkModeToggle from "./DarkModeToggle"

const Footer = () => {
	return (
		<footer className="flex flex-col items-center text-center text-sm md:p-20 p-5 md:space-y-8 space-y-4">

			{/* Social Links */}
			<div className="flex space-x-4">
				{[
					["https://drive.google.com/file/d/1IJtaDaHiNDXSQ-6YRPWkqblL5wZrMc_Q/view?usp=drive_link", <ReadCvLogoIcon className="w-7 h-7" key="resume" />],
					["https://github.com/adoante/", <GithubLogoIcon className="w-7 h-7" key="github" />],
					["https://www.linkedin.com/in/adolfogante/", <LinkedinLogoIcon className="w-7 h-7" key="linkedin" />],
				].map(([url, icon]) => (

					<Link className="hover:text-[var(--highlight)]" key={url as string} href={url as string} target="_blank">
						{icon}
					</Link>
				))}
			</div>
			<p>Contact me at: <Link className="hover:text-[var(--highlight)]" href="mailto:adolfogante@gmail.com"> adolfogante@gmail.com</Link>
			</p>
			<DarkModeToggle />
		</footer>
	)
}

export { Footer }
