import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/NarBar"
import { Footer } from "@/components/Footer"

const fira = Fira_Code({

})

export const metadata: Metadata = {
	title: "Adolfo Gante",
	description: "it can get a whole lot worse",
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
				</main>
				<Footer />
			</body>
		</html>
	)
}
