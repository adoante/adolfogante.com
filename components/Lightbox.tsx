"use client"

import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop, Button, CloseButton } from "@headlessui/react"
import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"

interface LightboxProps {
	src: string
	title: string
	description: string
	width: number
	height: number
	widthLg: number
	heightLg: number
}

export default function Lightbox({ src, title, description, width, height, widthLg, heightLg }: LightboxProps) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<motion.button
				whileHover={{
					scale: 1.3,
					transition: { duration: 0.1 }
				}}
				onClick={() => setIsOpen(true)}
				className="cursor-pointer">
				<Image
					src={src}
					alt={title}
					title={description}
					width={width}
					height={height}
					className="shadow-2xl bg-white p-2"
				/>
			</motion.button>
			<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				>
					<DialogBackdrop className="fixed inset-0 bg-black/90" />
					<div className="fixed inset-0 flex w-screen items-center justify-center">
						<DialogPanel className="m-5">
							<span className="flex flex-row justify-between items-center">
								<DialogTitle className="my-2 dark:text-white">{title}</DialogTitle>
								<motion.button
									whileHover={{ scale: 1.1 }}
									className="text-center cursor-pointer px-2 py-1 h-min dark:text-white hover:text-[var(--highlight)]"
									onClick={() => setIsOpen(false)}
								>
									Close
								</motion.button>

							</span>
							<Image
								src={src}
								alt={title}
								title={description}
								width={widthLg}
								height={heightLg}
								className="bg-white p-2"
							/>

							<Description className="my-2 dark:text-white">{description}</Description>

						</DialogPanel>
					</div>
				</motion.div>
			</Dialog>
		</>
	)
}
