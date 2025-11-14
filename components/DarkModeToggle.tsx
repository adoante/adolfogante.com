"use client"

import { MotionButton } from "@/lib/MotionElements"
import { useState, useEffect } from "react"
import { HeartStraightIcon } from "@phosphor-icons/react"
import { HeartStraightBreakIcon } from "@phosphor-icons/react"

export default function DarkModeToggle() {
	const [dark, setDark] = useState(false)

	useEffect(() => {
		const root = document.documentElement
		if (dark) {
			root.setAttribute("data-theme", "light")
		} else {
			root.removeAttribute("data-theme")
		}
	}, [dark])

	return (
		<MotionButton
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1, rotate: 360 }}
			transition={{
				scale: { type: "spring", duration: 0.4 },
			}}
			whileHover={{
				scale: 1.2,
				transition: { scale: { duration: 0.2 } }
			}}
			whileTap={{
				rotateX: 360,
				transition: {
					duration: 1
				}
			}}
			className="text-center cursor-pointer hover:text-[var(--text-muted)] bg-[var(--bg-light)] shadow-[var(--highlight)] w-min p-1 rounded-sm"
			onClick={() => setDark(!dark)}
		>
			{dark ?
				<HeartStraightBreakIcon className="w-7 h-7" /> :
				<HeartStraightIcon className="w-7 h-7" />
			}
		</MotionButton>
	)
}
