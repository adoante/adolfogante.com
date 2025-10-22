"use client"

import { Dialog, DialogPanel, DialogTitle, DialogBackdrop, Description } from "@headlessui/react"
import { motion } from "motion/react"
import { MotionButton } from "@/lib/MotionElements"
import Image from "next/image"
import { useState } from "react"

interface CertificateProps {
	school: string
	name: string
	awarded: string
	src: string
}

const Certificate = ({ school, name, awarded, src }: CertificateProps) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<MotionButton
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.8,
					ease: "easeOut"
				}}
				whileHover={{
					scale: 1.025,
					transition: { duration: 0.1 }
				}}
				onClick={() => setIsOpen(true)}
				className="bg-[var(--bg)] md:p-8 p-5 border-t-5 md:border-t-10 border-t-[var(--highlight)] hover:bg-[var(--bg-light)] cursor-pointer text-left space-y-2 shadow-md shadow-[color:var(--shadow)] rounded-sm">
				<h4 className="text-xl font-semibold">{school}</h4>
				<p>{name}</p>
				<p>{awarded}</p>
			</MotionButton>

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

								<MotionButton
									whileHover={{ scale: 1.1 }}
									className="text-center cursor-pointer px-2 py-1 h-min dark:text-white hover:text-[var(--highlight)]"
									onClick={() => setIsOpen(false)}
								>
									Close
								</MotionButton>
							</span>

							<Image
								src={src}
								alt="certificate or degree"
								title={name}
								width={800}
								height={800}
								className="bg-white p-2 rounded-sm"
							/>
							<Description className="my-2 dark:text-white">{awarded}</Description>

						</DialogPanel>
					</div>
				</motion.div>
			</Dialog>
		</>
	)
}

export { Certificate }
