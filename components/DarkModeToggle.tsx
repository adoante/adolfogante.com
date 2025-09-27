import { useState, useEffect } from "react";
import { motion } from "framer-motion"

export default function DarkModeToggle() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		const root = document.documentElement;
		if (dark) {
			root.setAttribute("data-theme", "dark");
		} else {
			root.removeAttribute("data-theme");
		}
	}, [dark]);

	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			className="text-center md:w-40 w-30 py-2 hover:cursor-pointer hover:text-[var(--highlight)] bg-[var(--alt-background)] shadow-[var(--highlight)]"
			onClick={() => setDark(!dark)}
		>
			{dark ? "Light Mode" : "Dark Mode"}
		</motion.button>
	);
}
