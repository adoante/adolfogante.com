import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/NarBar"
import { Footer } from "@/components/Footer"

const fira = Fira_Code({

})

export const metadata: Metadata = {
	keywords: ["Adolfo Gante", "Adolfo", "Gante", "Software Developer", "Software Engineer", "Personal Webiste", "Portfolio", "Blog"],
	title: {
		default: "Adolfo Gante",
		template: "%s | Adolfo Gante"
	},
	description: "Adolfo Gante's personal website, blog, portfolio and web dev testing site.",
	twitter: {
		card: "summary_large_image",
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${fira.className} no-scrollbar`}>
			<body
				className="relative flex flex-col min-h-screen overflow-y-scroll"
				style={{ backgroundColor: "var(--bg-dark)" }}
			>
				{/*
				Custom grid background overlay from https://bg.ibelick.com/
				Asked Chatgippity to add it in
				*/}
				<div
					className="pointer-events-none absolute inset-0 z-0"
					style={{
						backgroundImage: `
              linear-gradient(to right, var(--bg-light)1px, transparent 1px),
              linear-gradient(to bottom, var(--bg-light)1px, transparent 1px)
            `,
						backgroundSize: "14px 24px",
						maskImage:
							"radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
						WebkitMaskImage:
							"radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
						opacity: 0.15, // make grid subtle
					}}
				/>

				{/* Foreground content */}
				<div className="relative z-10 flex flex-col min-h-screen text-[var(--text)]">
					<NavBar />
					<main className="flex-1 mx-auto max-w-4xl w-full px-5 text-left">
						{children}
						<Analytics />
					</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
