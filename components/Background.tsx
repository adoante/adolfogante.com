"use client";

import { useEffect } from "react";

export default function AnimatedBackground() {
	useEffect(() => {
		const rects = document.querySelectorAll("#animated-grid rect");
		let i = 0

		function highlightRandom(index: number) {
			rects.forEach((r) => {
				r.setAttribute("stroke-width", "0.5")
				r.setAttribute("stroke", "var(--bg-light)")
			})
			const rect = rects[index % rects.length]
			rect.setAttribute("stroke-width", "0.75");
			rect.setAttribute("stroke", "var(--highlight)")
		}

		const interval = setInterval(() => {
			highlightRandom(i);
			i++;
		}, 800);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="pointer-events-none absolute inset-0 opacity-40">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				style={{
					position: "absolute",
					inset: 0,
					mixBlendMode: "overlay",
				}}
			>
				<defs>
					<pattern
						id="animated-grid"
						width="40"
						height="40"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="20"
							y="20"
							width="40"
							height="40"
							rx="6"
							ry="6"
							fill="none"
							stroke="var(--bg-light)"
							strokeWidth="0.5"
						/>
						<rect
							x="-20"
							y="-20"
							width="40"
							height="40"
							rx="6"
							ry="6"
							fill="none"
							stroke="var(--bg-light)"
							strokeWidth="0.5"
						/>
						<rect
							x="-20"
							y="20"
							width="40"
							height="40"
							rx="6"
							ry="6"
							fill="none"
							stroke="var(--bg-light)"
							strokeWidth="0.5"
						/>
						<rect
							x="20"
							y="-20"
							width="40"
							height="40"
							rx="6"
							ry="6"
							fill="none"
							stroke="var(--bg-light)"
							strokeWidth="0.5"
						/>
					</pattern>
				</defs>

				{/* This rect fills the viewport using the repeating pattern */}
				<rect width="100%" height="100%" fill="url(#animated-grid)" />
			</svg>
		</div>
	);
}

