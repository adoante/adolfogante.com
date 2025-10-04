import { Project } from "@/components/Project";
import Image from "next/image";

export default function Work() {
	return (
		<main className="mx-auto max-w-5xl w-full px-5 space-y-12 text-left">
			{/* Page Title */}
			<section className="space-y-4">
				<h1 className="text-4xl font-bold">Work</h1>
				<p>
					If you{`'`}re interested, the following is some work I{`'`}ve done
					including side and learning projects.
				</p>
			</section>

			{/* Projects */}
			<section className="space-y-6">
				<h2 className="text-3xl font-semibold">Projects</h2>
				<p>Super simple project-based learning.</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
					<Project
						title="catpictures.xyz"
						caption="Look at some cat pictures and occasionally gifs."
						link="https://catpictures.xyz/"
						image={
							<Image
								src="/cat/MTcwMzEyMg.gif"
								alt="cat gif"
								width={250}
								height={250}
							/>
						}
					/>
				</div>
			</section>
		</main>
	);
}

