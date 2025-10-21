import type { Metadata } from "next"
import { TicketContact } from "@/components/Contact"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Contact",
	description: "Contact me using email or send a ticket message.",
}

export default function Contact() {
	return (
		<main className="space-y-10">
			<h1 className="text-4xl font-bold">Contact</h1>

			<section className="flex flex-col space-y-10">
				<h2 className="text-3xl font-semibold">Email</h2>
				<p className="text-[var(--text-muted)]">
					In case it{`'`}s something important you can contact me using email: <Link className="hover:text-[var(--text)] text-[var(--highlight)]" href="mailto:adolfogante@gmail.com">adolfogante@gmail.com</Link>
				</p>

			</section>

			<section className="flex flex-col space-y-10">
				<h2 className="text-3xl font-semibold">Ticket</h2>

				<p className="text-[var(--text-muted)]">
					Finally, modern tech allows us to send text over the internet and then physically print it.
					Fill out the form below to send me a message that will be physically printed from a <a
						className="text-[var(--highlight)] hover:text-[var(--text)]"
						href="https://duckduckgo.com/?q=What+is+a+thermal+receipt+printer"
						target="_norefer">
						thermal receipt printer
					</a>.
				</p>

				<TicketContact />
			</section>

			<section className="flex flex-col space-y-10">
				<h2 className="text-3xl font-semibold">Socials</h2>

				<p>
					I{`'`}m not currently active on any social media platform
					other than <Link className="cursor-pointer text-[var(--highlight)] hover:text-[var(--text)]" href="https://linkedin.com/in/adolfogante">LinkedIn</Link>.
				</p>
			</section>
		</main>
	)
}
