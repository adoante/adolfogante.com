import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Aleo, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/NavBar"
import { Footer } from "@/components/Footer"
import AnimatedGridBackground from "@/components/Background"

const aleo = IBM_Plex_Sans({})

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
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
		<html lang="en" className={`${aleo.className} no-scrollbar`}>
			<body
				className="relative flex flex-col min-h-screen overflow-y-scroll"
				style={{ backgroundColor: "var(--bg-dark)" }}
			>

				{/* 🔹 Animated SVG background */}
				<AnimatedGridBackground />

				{/* 🔹 Foreground content */}
				<div className="relative flex flex-col min-h-screen text-[var(--text)]">
                    <NavBar />

					<main className="flex-1 mx-auto max-w-4xl w-full px-5 text-left md:my-30 my-25">
						{children}
						<Analytics />
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
