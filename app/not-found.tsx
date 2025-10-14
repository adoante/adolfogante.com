import Image from "next/image"

export default function NotFound() {
	return (
		<main className="space-y-10">
			<h1 className="text-4xl font-bold">Page Not Found</h1>
			<p>
				This page has NEVER existed!
			</p>
			<Image
				src="/cat/cat.webp"
				width={500}
				height={500}
				title="Here's a picture of my cat :)"
				alt="Cute cat picture"
			/>
		</main>
	)
}
