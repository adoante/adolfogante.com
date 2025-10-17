import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/NarBar"
import { Footer } from "@/components/Footer"

const fira = Fira_Code({

})

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
	keywords: ["Adolfo Gante", "Adolfo", "Gante", "Software Developer", "Software Engineer", "Personal Webiste", "Portfolio", "Blog"],
	title: {
		default: "Adolfo Gante",
		template: "%s | Adolfo Gante"
	},
	description: "Adolfo Gante's personal website, blog, portfolio and web dev testing site.",
	openGraph: {
		description: "Adolfo Gante's personal website, blog, portfolio and web dev testing site.",
	},
	twitter: {
		card: "summary_large_image"
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
				className="flex flex-col min-h-screen overflow-y-scroll"
			>
				<NavBar />
				<main className="flex-1 mx-auto max-w-4xl w-full px-5 text-left">
					{children}
					<Analytics />
				</main>
				<Footer />
			</body>
		</html>
	)
}
