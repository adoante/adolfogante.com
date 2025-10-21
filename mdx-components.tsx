import Image, { ImageProps } from 'next/image'
import type { MDXComponents } from 'mdx/types'

const components = {
	h1: ({ children }) => (
		<h1
			className="text-4xl font-bold py-5"
		>
			{children}
		</h1>
	),
	h2: ({ children }) => (
		<h2
			className="text-3xl font-semibold underline py-5"
		>
			{children}
		</h2>
	),
	h3: ({ children }) => (
		<h3
			className="text-2xl font-semibold py-5"
		>
			{children}
		</h3>
	),
	h4: ({ children }) => (
		<h4
			className="text-md font-semibold py-5"
		>
			{children}
		</h4>
	),
	ul: ({ children }) => (
		<ul className="list-disc list-inside ml-1 [&_ul]:ml-5 [&_ul]:list-disc [&_ol]:ml-5 [&_ol]:list-decimal">
			{children}
		</ul>
	),
	ol: ({ children }) => (
		<ol className="list-decimal list-inside [&_ul]:ml-5 [&_ul]:list-disc [&_ol]:ml-5 [&_ol]:list-decimal">
			{children}
		</ol>
	),
	li: ({ children }) => (
		<li className="">
			{children}
		</li>
	),
	p: ({ children }) => (
		<p className="text-[var(--text-muted)]">
			{children}
		</p>
	),
	a: ({ children, href }) => (
		<a
			href={href}
			target="_norefer"
			className="cursor-pointer text-[var(--highlight)] hover:text-[var(--text)]">
			{children}
		</a>
	),
	img: (props: ImageProps) => {
		const { src, alt, width = 1000, height = 1000 } = props
		return <Image src={src} title={alt} alt={alt} width={width} height={height} style={{ width: "auto", height: "auto" }} />
	},
	blockquote: ({ children }) => (
		<blockquote
			className="md:p-8 p-4 md:border-l-10 border-l-5 border-l-[var(--highlight)] bg-[var(--bg)] max-w-max shadow-md shadow-[color:var(--shadow)]"
		>
			{children}
		</blockquote>
	)
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
	return components
}
