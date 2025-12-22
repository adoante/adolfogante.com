"use client"

import { motion } from "motion/react";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Home() {
	return (
		<motion.main
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				x: { type: "spring", duration: 1 }
			}}
			className="space-y-10"
		>
			<header>
				<h2 className="text-3xl font-semibold">
					Hey, I{`'`}m Adolfo.
				</h2>

				<h4 className="text-xl italic">Software Developer</h4>
			</header>

			<p className="text-[var(--text-muted)]">
                This is my personal website and somewhat of a developer portfolio.
                The following are quick links to what I{`'`}m currently doing and contact methods.
				Check out the rest of my website to learn more about me and about my interests.
			</p>

			<h4 className="underline underline-offset-4 my-2">
				Currently building:
			</h4>
			<span className="flex flex-row items-center gap-1 hover:underline underline-offset-4">
				<ArrowUpRightIcon size={18} />
				<a
					className="hover:text-[var(--text)] text-[var(--link)]"
					href="https://picka.spot"
					target="_blank"
					rel="noopener noreferrer"
				>
					Pick a Spot
				</a>
			</span>

			<h4 className="underline underline-offset-4 my-2">
				Connect with me:
			</h4>
			<ul className="space-y-1 [&>li]:flex [&>li]:flex-row [&>li]:items-center [&>li]:gap-1 [&>li>a]:underline-offset-4 [&>li>a:hover]:underline">
				<li>
					<ArrowUpRightIcon size={18} />
					<a
						className="hover:text-[var(--text)] text-[var(--link)]"
						href="mailto:adolfogante@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						adolfogante@gmail.com
					</a>
				</li>
				<li>
					<ArrowUpRightIcon size={18} />
					<a
						className="cursor-pointer text-[var(--link)] hover:text-[var(--text)]"
						href="https://linkedin.com/in/adolfogante"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</li>
				<li>
					<ArrowUpRightIcon size={18} />
					<a
						className="cursor-pointer text-[var(--link)] hover:text-[var(--text)]"
						href={process.env.NEXT_PUBLIC_RESUME_LINK!}
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</li>
				<li>
					<ArrowUpRightIcon size={18} />
					<a
						className="cursor-pointer text-[var(--link)] hover:text-[var(--text)]"
						href="https://github.com/adoante"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</li>
				<li>
					<ArrowRightIcon size={18} />
					<Link
						className="cursor-pointer text-[var(--link)] hover:text-[var(--text)]"
						href="/contact"
					>
						Send a Ticket Message
					</Link>
				</li>
			</ul>

		</motion.main>
	)
}
