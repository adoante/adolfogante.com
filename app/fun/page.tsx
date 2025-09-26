

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
	console.log(cats)

	return (
		<main className="flex flex-col items-center space-y-10">
			<h1 className="text-4xl font-bold">Fun 😄</h1>
			<p>This page is mostly a bunch of unrelated stuff I want people to see and check out.</p>

			<h2 className="text-3xl font-semibold">Cat Pictures</h2>
			<p>These are some of my favorite pictures of my cat Lizzy.</p>
			<div className="grid grid-cols-4 gap-4 place-items-center">
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
		</main>
	)
}
