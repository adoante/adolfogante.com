interface QuoteProps {
	quote: string
	cite: string
}

const Quote = ({ quote, cite }: QuoteProps) => {
	return (
		<blockquote
			className="md:p-8 p-4 md:border-l-10 border-l-5 border-l-[var(--highlight)] bg-[var(--bg)] max-w-max shadow-md shadow-[color:var(--shadow)]"
		>
			{quote}
			<cite> - {cite}</cite>
		</blockquote>
	)
}

export { Quote }
