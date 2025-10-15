import { MotionButton } from "@/lib/MotionElements"
import { useState, useEffect } from "react"
import { HeartStraightIcon } from "@phosphor-icons/react/dist/ssr"
import { HeartStraightBreakIcon } from "@phosphor-icons/react/dist/ssr"

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
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
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
