interface QuoteProps {
	quote: string
	cite: string
}

const Quote = ({ quote, cite }: QuoteProps) => {
	return (
		<p className="md:p-8 p-4 md:border-l-10 border-l-5 border-l-[var(--highlight)] bg-[var(--bg)] max-w-max">
			<q>{quote}</q> <cite>- {cite}</cite>
		</p>
	)
}

export { Quote }
