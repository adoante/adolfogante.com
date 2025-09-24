import Image from "next/image"
import { Quote } from "@/components/Quote"
export default function Home() {
	return (
		<main className="flex flex-col items-center space-y-10">
			<h1 className="text-4xl font-bold">Hey, I{`'`}m Adolfo.</h1>
			<h4 className="text-xl">Things I spend my time on:</h4>
			<ul className="list-disc">
				<li>programming</li>
				<li>specialty coffee</li>
				<li>cooking</li>
				<li>youtube</li>
				<li>wordle</li>
			</ul>

			<Image
				src="/cat.webp"
				alt="Picture of my cat"
				title="This is a picture of my cat Lizzy :)"
				width={250}
				height={250}
				className=""
			/>

			<Quote quote="It can alawys get worse." cite="sombody" />
		</main>
	)
}
