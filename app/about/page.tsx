import { Certificate } from "@/components/Certificate";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About",
	description: "About page, everything I could possibly want you to know about me.",
}

export default function About() {
	return (
		<main className="space-y-10">
			<h1 className="text-4xl font-bold">About</h1>

            <p>
                I’m a software developer, based in <b>San Diego</b>, exploring modern web technologies and frameworks such as{" "}
                <b>React, Express.js, Next.js, Svelte, Tailwind CSS, and FastAPI</b>. I’m very
                comfortable with common programming languages like{" "}
                <b>Python, JavaScript, TypeScript, C++, and C</b>, and I’m currently learning
                interesting languages such as <b>Rust and Go</b>. I also work regularly with tools and platforms including{" "}
                <b>Git, GitHub, Figma, AWS, Docker, Vercel, Hostinger</b> and using <b>Linux (Ubuntu/Arch)</b> daily.
            </p>

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

            <p>Just me and my twin chilling after dinner.</p>
            <Image
                src="/me/me-and-me.png"
                alt="picture of me and me"
                width={500}
                height={500}
            />
		</main >
	)
}
