import type { Metadata } from 'next'
import { Lightbox } from "@/components/Lightbox"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { MotionButton } from '@/lib/MotionElements'
import { getCatFiles, getWebsites } from '@/utils'
import Link from 'next/link'

export const metadata: Metadata = {
	title: "Fun",
	description: "A bunch of unrelated stuff I want people to see and check out.",
}

export default function Fun() {
	const cats = getCatFiles()
	const personal = getWebsites("public/websites/personal.txt")
	const dev = getWebsites("public/websites/dev.txt")
	const productivity = getWebsites("public/websites/productivity.txt")

	return (
		<main className="space-y-10">

			<h1 className="text-4xl font-bold">Fun 😄</h1>
			<p>
				This page is mostly a bunch of unrelated stuff I want people to see and check out.
			</p>

			<TabGroup className="space-y-10">
				<TabList className="flex flex-row space-x-4 p-4 bg-[var(--bg)] rounded-tl-sm rounded-br-sm shadow-md shadow-[color:var(--shadow)] border-l-2 border-t-2 border-[var(--highlight)]">
					<Tab
						as={MotionButton}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className="text-center cursor-pointer bg-[var(--bg)] shadow-[var(--highlight)] w-min px-2 py-1 rounded-sm data-selected:bg-[var(--bg-light)] focus:not-data-focus:outline-none"
					>
						Pictures
					</Tab>
					<Tab
						as={MotionButton}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className="text-center cursor-pointer bg-[var(--bg)] shadow-[var(--highlight)] w-min px-2 py-1 rounded-sm data-selected:bg-[var(--bg-light)] focus:not-data-focus:outline-none"
					>
						Websites
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<section className="flex flex-col space-y-10">
							<h2 className="text-3xl font-semibold">Cat Pictures</h2>
							<p>
								These are some of my favorite pictures of my cat Lizzy.
							</p>

							<div className="grid md:grid-cols-3 grid-cols-2 gap-4 place-items-center">
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
					</TabPanel>
					<TabPanel>
						<section className="flex flex-col space-y-10">
							<h2 className="text-3xl font-semibold">Websites</h2>
							<p>
								An ongoing list of websites that appeal to me and/or find useful.
							</p>

							<h3 className="text-2xl font-semibold">Personal and Portfolio</h3>
							<p>
								Personal and Portfolio sites that I sometimes reference.
							</p>

							<div className="space-y-2">
								{personal.map((site, index) => (
									<p
										key={site}
										className="m-1 text-[var(--text-muted)] text-wrap"
									>
										[{index < 10 ? `0${index}` : index}]:&nbsp;
										<Link
											href={site}
											target="_blank"
											rel="noopener noreferrer"
											className="md:text-xl underline text-[var(--highlight)] hover:text-[var(--text)]"
										>
											{site.split("https://")}
										</Link>
									</p>
								))}
							</div>
							<h3 className="text-2xl font-semibold">Productivity</h3>
							<p>
								Websites that I help me stay productive.
							</p>

							<div className="space-y-2">
								{productivity.map((site, index) => (
									<p
										key={site}
										className="text-[var(--text-muted)]"
									>
										[{index < 10 ? `0${index}` : index}]:&nbsp;
										<Link
											href={site}
											target="_blank"
											rel="noopener noreferrer"
											className="md:text-xl underline text-[var(--highlight)] hover:text-[var(--text)]"
										>
											{site.split("https://")}
										</Link>
									</p>
								))}
							</div>
							<h3 className="text-2xl font-semibold">Software Development</h3>
							<p>
								Helpful software dev sites for reference and/or free code.
							</p>

							<div className="space-y-2">
								{dev.map((site, index) => (
									<p
										key={site}
										className=" text-[var(--text-muted)]"
									>
										[{index < 10 ? `0${index}` : index}]:&nbsp;
										<Link
											href={site}
											target="_blank"
											rel="noopener noreferrer"
											className="md:text-xl underline text-[var(--highlight)] hover:text-[var(--text)]"
										>
											{site.split("https://")}
										</Link>
									</p>
								))}
							</div>
						</section>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</main >
	)
}
