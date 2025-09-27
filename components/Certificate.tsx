"use client"

import { Dialog, DialogPanel, DialogTitle, DialogBackdrop, Description, CloseButton } from "@headlessui/react"
import { motion } from "motion/react"
import { useState } from "react"
import Image from "next/image"

interface CertificateProps {
	school: string
	name: string
	awared: string
	src: string
}

const Certificate = ({ school, name, awared, src }: CertificateProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<motion.button
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.1 }
				}}
				onClick={() => setIsOpen(true)}
				className="bg-[var(--alt-background)] md:p-8 p-2 border-t-5 md:border-t-10 border-t-[var(--highlight)] cursor-pointer">
				<h4 className="text-xl">{school}</h4>
				<p>{name}</p>
				<p>{awared}</p>
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
							<span className="flex flex-row items-center justify-between">
								<DialogTitle className="my-2 dark:text-white">{school}</DialogTitle>

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
								alt="certificate or degree"
								title={name}
								width={800}
								height={800}
								className="bg-white p-2"
							/>
							<Description className="my-2 dark:text-white">{awared}</Description>

						</DialogPanel>
					</div>
				</motion.div>
			</Dialog>
		</>
	)
}

export { Certificate }
