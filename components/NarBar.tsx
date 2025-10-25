"use client"

import { motion } from "motion/react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Socials } from "./Socials"
import { useState, useEffect } from "react"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { TextOutdentIcon, TextIndentIcon } from "@phosphor-icons/react/"
import { MotionLink } from "@/lib/MotionElements"

const NavBar = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false)

	const pathname = usePathname()

	const linkStyle = "hover:underline hover:text-[var(--highlight)]"

	const links = [
		["Contact", "/contact"],
		["About", "/about"],
		["Work", "/work"],
		["Blog", "/blog"],
		["Fun", "/fun"]
	]

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 800)
		handleResize() // initialize
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	const desktop = (
		<nav className="grid grid-cols-3 justify-between place-items-center md:p-15 py-5">

			<MotionLink
				whileHover={{
					scale: 1.1,
					transition: { type: "spring", duration: 0.4 }
				}}
				className={`text-2xl font-bold md:w-max w-min hover:text-[var(--highlight)] ${pathname == "/" ? "text-[var(--highlight)]" : ""
					}`}
				href="/"
			>
				Adolfo Gante
			</MotionLink>
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
		</nav>
	)

	const mobile = (
		<nav>
			<Menu>
				<span className="flex flex-row justify-between items-center py-5">
					<MotionLink
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.1 }
						}}
						className={`text-2xl mx-5 max-w-max font-bold hover:text-[var(--highlight)] ${pathname == "/" ? "text-[var(--highlight)]" : ""
							}`}
						href="/"
					>
						Adolfo Gante
					</MotionLink>
					<MenuButton className="items-center py-4 w-min">
						{({ open }) => (open ?
							<motion.div
								key="open"
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1, rotate: 360 }}
								transition={{
									rotate: { type: "spring", duration: 0.8 },
								}}
								className="justify-self-end"
							>
								<TextOutdentIcon
									width={35}
									height={35}
									className="mx-5"
								/>
							</motion.div>
							:
							<motion.div
								key="closed"
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1, rotate: 360 }}
								transition={{
									rotate: { type: "spring", duration: 0.8 },
								}}
								className="justify-self-end"
							>
								<TextIndentIcon
									width={35}
									height={35}
									className="mx-5"
								/>
							</motion.div>

						)}
					</MenuButton>
				</span>
				<MenuItems anchor="bottom" className="min-w-1/2 overflow-x-scroll no-scrollbar py-1 pl-1 rounded-sm">
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							x: { type: "spring", duration: 0.6 },
						}}
						className="flex flex-col justify-between border-b-2 border-t-2 border-l-2 rounded-tl-sm rounded-bl-sm border-[var(--highlight)] space-y-4 py-4 text-center bg-[var(--bg)] items-center shadow-md shadow-[color:var(--shadow)]"
					>
						{links.map(([title, url]) => {
							const active = pathname == url
							return (
								<MenuItem
									key={title}
								>
									<Link
										className={`${linkStyle} ${active ? "text-[var(--highlight)] font-bold" : ""}`}
										href={url}
									>
										{title}
									</Link>
								</MenuItem>
							)
						}
						)}
						<MenuItem>
							<Socials />
						</MenuItem>
					</motion.div>
				</MenuItems>
			</Menu>
		</nav>
	)

	return (
		<motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				x: { duration: 0.8 },
				ease: "easeOut"
			}}
		>
			{isMobile ? mobile : desktop}
		</motion.div>
	)

}

export { NavBar }
