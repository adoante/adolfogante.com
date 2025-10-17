import { Metadata } from "next";
import type { ReactNode } from "react";


export default function BlogLayout({ children }: { children: ReactNode }) {
	return (
		<main className="space-y-10">
			<h1 className="text-4xl font-bold">Blog</h1>
			<article className="space-y-4">
				{children}
			</article>
		</main>
	);
}
