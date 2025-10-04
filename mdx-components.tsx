import type { MDXComponents } from 'mdx/types'

const components = {
	h2: ({ children }) => (
		<h2
			className="text-3xl font-semibold py-10 underline"
		>
			{children}
		</h2>
	),
	h4: ({ children }) => (
		<h4
			className="text-xl font-semibold"
		>
			{children}
		</h4>
	),
	a: ({ children }) => (
		<a className="cursor-pointer text-[var(--highlight)] hover:text-[var(--text)]">
			{children}
		</a>
	),
	p: ({ children }) => (
		<p className="py-4 text-[var(--text-muted)]">
			{children}
		</p>
	),
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
	return components
}
