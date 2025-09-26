"use client"

import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop, Button } from "@headlessui/react"
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
						<DialogPanel>
							<DialogTitle className="my-2">{title}</DialogTitle>

							<Image
								src={src}
								alt={title}
								title={description}
								width={widthLg}
								height={heightLg}
								className="bg-white p-2"
							/>

							<Description className="my-2">{description}</Description>

							<Button
								onClick={() => setIsOpen(false)} className="cursor-pointer border my-2 px-2 hover:border-[var(--highlight)] hover:text-[var(--highlight)]"
							>
								close
							</Button>
						</DialogPanel>
					</div>
				</motion.div>
			</Dialog>
		</>
	)
}
