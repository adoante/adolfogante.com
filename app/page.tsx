"use client"

import { Contact } from "@/components/Contact"
import { Quote } from "@/components/Quote"
import Link from "next/link"
import { useEffect } from "react"
export default function Home() {
	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_TICKET_API_URL}/tickets`, {
			headers: {
				"Authorization": `Bearer ${process.env.NEXT_PUBLIC_TICKET_API_TOKEN}`,
			},
		})
			.then(response => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json(); // parse JSON body
			})
			.then(data => {
				console.log(data); // handle the returned data
			})
			.catch(error => {
				console.error("Fetch error:", error);
			})
	}, [])

	return (
		<main className="mx-auto max-w-5xl w-full px-5 text-left space-y-10">
			<Quote quote="It can always get worse." cite="sombody" />

			<section className="flex flex-col space-y-10">

				<h2 className="text-3xl font-semibold">Contact</h2>

				<p className="text-[var(--text-muted)]">
					Finally, modern tech allows us to send text over the internet and then physically print it.
					Fill out the form below to send me a message that will be physically printed from a <a
						className="text-[var(--highlight)] hover:text-[var(--text)]"
						href="https://duckduckgo.com/?q=What+is+a+thermal+receipt+printer"
						target="_norefer">
						thermal receipt printer
					</a>.
				</p>

				<p className="text-[var(--text-muted)]">
					In case it{`'`}s something important you can contact me using email: <Link className="hover:text-[var(--text)] text-[var(--highlight)]" href="mailto:adolfogante@gmail.com">adolfogante@gmail.com</Link>
				</p>


				<Contact />
			</section>
		</main>
	)
}
