import { Certificate } from "@/components/Certificate";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Stuff all about me."
}

export default function About() {
	return (
		<main className="space-y-10">
			<h1 className="text-4xl font-bold">About</h1>

			<section className="flex flex-col space-y-10">
				<h2 className="text-3xl font-semibold">Hey, I{`'`}m Adolfo.</h2>
				<div className="flex flex-col space-y-2">
					<p>Things I spend my time on:</p>

					<ul className="list-none">
						<li>- programming</li>
						<li>- specialty coffee</li>
						<li>- cooking</li>
						<li>- youtube</li>
					</ul>
				</div>
				<h2 className="text-3xl font-semibold">Education</h2>

				<div className="grid md:grid-cols-2 gap-4">
					<Certificate
						school="California State University San Marcos"
						name="Bachelors of Science in Computer Science"
						awarded="Graduated 2025"
						src="/cert/csusm_degree.webp"
					/>

					<Certificate
						school="Palomar College"
						name="Associates of Science in Computer Science"
						awarded="Graduated 2023"
						src="/cert/palomar_college_degree.webp"
					/>
				</div>
			</section>
		</main >
	)
}
