import type { Metadata } from 'next';
import { ProjectCard } from "@/components/ProjectCard";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Work",
	description: "Work I've done including side and learning projects.",
}

export default function Work() {
	return (
		<main className="space-y-10">
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

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-6">
					<ProjectCard
						title="catpictures.xyz"
						caption="Look at some cat pictures and occasionally gifs."
						link="https://catpictures.xyz/"
						image={
							<Image
								src="/cat/MTcwMzEyMg.gif"
								alt="cat gif"
								width={500}
								height={500}
							/>
						}
					/>
					<ProjectCard
						title="ApprAIse"
						caption="Benchmarking AI models using Qualcomm AI Hub."
						link="https://appraise-benchmark.com/"
						image={
							<Image
								src="/projects/appraise.png"
								alt="cat gif"
								width={500}
								height={500}
							/>
						}
					/>
				</div>
			</section>
		</main>
	);
}

