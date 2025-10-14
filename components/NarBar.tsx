"use client"

import { GithubLogoIcon, LinkedinLogoIcon, ReadCvLogoIcon } from "@phosphor-icons/react/ssr"
import { usePathname } from "next/navigation"
import Link from "next/link"

const NavBar = () => {
	const pathname = usePathname()

	const linkStyle = "hover:underline hover:text-[var(--highlight)]"

	const links = [
		["about", "/about"],
		["work", "/work"],
		["blog", "/blog"],
		["fun", "/fun"],
	]

	return (
		<nav className="grid grid-cols-3 justify-between place-items-center md:p-15 py-5">

			<Link
				className={`text-2xl font-bold md:w-max w-min hover:text-[var(--highlight)] ${pathname == "/" ? "text-[var(--highlight)]" : ""
					}`}
				href="/"
			>
				Adolfo Gante
			</Link>
			{/* Pages */}
			<div className="flex md:flex-row flex-col md:space-x-4 text-lg w-min">
				{links.map(([title, url]) => {
					const active = pathname == url
					return (
						<Link
							className={`${linkStyle} ${active ? "text-[var(--highlight)] font-bold" : ""}`}
							key={title}
							href={url}
						>
							{title}
						</Link>
					)
				}
				)}
			</div>

			{/* Social Links */}
			<div className="flex flex-row space-x-2">
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
		</nav >
	)
}

export { NavBar }
