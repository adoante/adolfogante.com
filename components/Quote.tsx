import { MotionLink } from "@/lib/MotionElements"

interface QuoteProps {
	quote: string
	cite: string
	src?: string
}

const Quote = ({ quote, cite, src }: QuoteProps) => {

	if (src) {
		return (
			<MotionLink
				whileHover={{
					scale: 1.025,
					transition: { duration: 0.2 },
				}}
				whileTap={{
					scale: 1.06,
					transition: { duration: 0.2 },
					backgroundColor: "var(--bg-light)"
				}}
				href={src}
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-col md:p-8 p-4 md:border-l-10 border-l-5 border-l-[var(--highlight)] bg-[var(--bg)] shadow-md shadow-[color:var(--shadow)] rounded-sm hover:bg-[var(--bg-light)]"
			>
				<blockquote className="space-y-4">
					<p>{quote}</p>
					<span className="flex flex-row space-x-2">
						<p>-</p>
						<cite className="text-[var(--highlight)] w-max">{cite}</cite>
					</span>
				</blockquote>
			</MotionLink>
		)
	}

	return (
		<blockquote
			className="md:p-8 p-4 md:border-l-10 border-l-5 border-l-[var(--highlight)] bg-[var(--bg)] shadow-md shadow-[color:var(--shadow)] rounded-sm space-y-4 flex flex-col"
		>
			<p>{quote}</p>
			<cite className="text-nowrap">- {cite}</cite>
		</blockquote>
	)
}

export { Quote }
