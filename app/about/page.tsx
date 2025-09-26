export default function About() {
	return (
		<main className="space-y-10 h-full">
			<h1 className="text-4xl font-bold text-center">About</h1>

			<section className="flex flex-col items-center space-y-10 justify-center">
				<h2 className="text-3xl font-semibold">Hey, I{`'`}m Adolfo.</h2>

				<h4 className="text-xl">Things I spend my time on:</h4>

				<ul className="list-disc">
					<li>programming</li>
					<li>specialty coffee</li>
					<li>cooking</li>
					<li>youtube</li>
					<li>wordle</li>
				</ul>
			</section>
		</main>
	)
}
