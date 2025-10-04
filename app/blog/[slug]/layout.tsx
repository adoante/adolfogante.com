import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
	return (
		<div className="mx-auto max-w-5xl w-full px-5 text-left">
			<h1 className="text-4xl font-bold">Blog</h1>
			<article>
				{children}
			</article>
		</div>
	);
}
