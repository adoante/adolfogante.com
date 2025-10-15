import { MotionButton } from "@/lib/MotionElements"
import { useState, useEffect } from "react"

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
			className="text-center md:w-40 w-30 py-2 hover:cursor-pointer hover:text-[var(--text-muted)] bg-[var(--bg-light)] shadow-[var(--highlight)]"
			onClick={() => setDark(!dark)}
		>
			{dark ? "Light Mode" : "Dark Mode"}
		</MotionButton>
	)
}
