import { Certificate } from "@/components/Certificate";
import { MinusIcon } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "About page, everything I could possibly want you to know about me.",
}

export default function About() {
	return (
		<main className="space-y-10">
			<h1 className="text-4xl font-bold">About</h1>

			<h4 className="text-xl my-2 font-semibold">Things I spend my time on:</h4>
			<ul className="space-y-1 [&>li]:flex [&>li]:flex-row [&>li]:items-center [&>li]:gap-1">
				<li>
					<MinusIcon />
					programming
				</li>
				<li>
					<MinusIcon />
					specialty coffee
				</li>
				<li>
					<MinusIcon />
					cooking
				</li>
				<li>
					<MinusIcon />
					youtube
				</li>
			</ul>

			<section className="flex flex-col space-y-10">
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
