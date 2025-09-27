import fs from "fs";
import path from "path";
import Lightbox from "@/components/Lightbox";

export function getCatFiles(): string[] {
	const catsDir = path.join(process.cwd(), "public", "cat");
	const files = fs.readdirSync(catsDir);

	return files
		.filter(file => file.endsWith(".webp"))
		.map(file => `/cat/${file}`);
}

export default function Fun() {
	const cats = getCatFiles()

	return (
		<main className="space-y-10 mx-5">
			<h1 className="text-4xl font-bold text-center">Fun 😄</h1>
			<p className="text-center">
				This page is mostly a bunch of unrelated stuff I want people to see and check out.
			</p>

			<section className="flex flex-col items-center space-y-10">

				<h2 className="text-3xl font-semibold">Cat Pictures</h2>

				<p className="text-center">
					These are some of my favorite pictures of my cat Lizzy.
				</p>

				<div className="grid md:grid-cols-4 grid-cols-2 gap-4 place-items-center">
					{cats.map((cat, index) => (
						<Lightbox
							key={index}
							src={cat}
							title={"Isn't she adorable! 😊"}
							description={cat}
							width={250}
							height={250}
							widthLg={500}
							heightLg={500}
						/>
					))}
				</div>
			</section>
		</main>
	)
}
