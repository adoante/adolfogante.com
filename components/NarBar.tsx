"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Socials } from "./Socials"

const NavBar = () => {
	const pathname = usePathname()

	const linkStyle = "hover:underline hover:text-[var(--highlight)]"

	const links = [
		["Contact", "/contact"],
		["About", "/about"],
		["Work", "/work"],
		["Blog", "/blog"],
		["Fun", "/fun"]
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

			<Socials />
		</nav >
	)
}

export { NavBar }
