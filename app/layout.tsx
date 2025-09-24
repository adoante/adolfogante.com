import type { Metadata } from "next"
import { Fira_Code, Inter } from "next/font/google"
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
		<html lang="en" className={fira.className}>
			<body
				className="flex flex-col h-screen justify-between"
			>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
