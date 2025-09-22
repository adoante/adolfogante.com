import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Adolfo Gante",
	description: "it can get a whole lot worse",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className="" // add font here
			>
				{children}
			</body>
		</html>
	);
}
