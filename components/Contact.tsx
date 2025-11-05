"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Button, Description, Field, Fieldset, Input, Label, Legend, Textarea } from "@headlessui/react"
import { clsx } from "clsx"

const MotionButton = motion.create(Button)

const TicketContact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	})

	const [submitted, setSubmitted] = useState(false)
	const [failed, setFailed] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target

		// Enforce 280-char limit for message
		const newValue = name === "message" ? value.slice(0, 280) : value

		setFormData(prev => ({ ...prev, [name]: newValue }))
		setErrors(prev => ({ ...prev, [name]: "" }))
		setSubmitted(false)
		setFailed(false)
	}

	const validate = () => {
		const newErrors = { name: "", email: "", message: "" }

		if (!formData.name.trim()) newErrors.name = "Your name please."
		if (!formData.email.trim()) newErrors.email = "I need your email so I can respond!"
		else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid."
		if (!formData.message.trim()) newErrors.message = "Message is required."
		else if (formData.message.length >= 280) newErrors.message = "Yeah, so you can't go over 280 characters."

		return newErrors
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const validationErrors = validate()
		if (Object.values(validationErrors).some(Boolean)) {
			setErrors(validationErrors)
			setSubmitted(false)
			setFailed(true)
			return
		}

		try {
			const res = await fetch("/api/tickets", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			})

			if (res.ok) {
				setSubmitted(true)
				setFailed(false)
				setFormData({ name: "", email: "", message: "" })
			} else {
				setSubmitted(false)
				setFailed(true)
			}
		} catch {
			setSubmitted(false)
			setFailed(true)
		}
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<form onSubmit={handleSubmit} noValidate>
				<Fieldset className="bg-[var(--bg)] space-y-6 py-5 px-8 shadow-md shadow-[color:var(--shadow)] rounded-sm">
					<Legend className="text-2xl font-bold">Print a Ticket</Legend>

					<Field>
						<Label className="block">Name</Label>
						<Input
							name="name"
							placeholder="name or something silly"
							value={formData.name}
							onChange={handleChange}
							required
							className={clsx(
								"block mt-1 text-[var(--text-muted)] border py-1 px-2 w-full rounded-sm",
								{ "bg-[var(--bg-dark)]": errors.name }
							)}
						/>
						{errors.name && <p className="text-red-400 mt-1">{errors.name}</p>}
					</Field>

					<Field>
						<Label className="block">Email</Label>
						<Input
							name="email"
							type="email"
							placeholder="mr.cool126@yahoo.com"
							value={formData.email}
							onChange={handleChange}
							required
							className={clsx(
								"block mt-1 text-[var(--text-muted)] border py-1 px-2 w-full rounded-sm",
								{ "bg-[var(--bg-dark)]": errors.email }
							)}
						/>
						{errors.email && <p className="text-red-400 mt-1">{errors.email}</p>}
					</Field>

					<Field>
						<Label className="flex flex-row justify-between">
							Message
							<Description className={clsx("text-[var(--text-muted)]", { "text-red-400": formData.message.length >= 280 })}>
								{formData.message.length}/280
							</Description>
						</Label>
						<Textarea
							name="message"
							placeholder="Yes, there is a limit."
							value={formData.message}
							onChange={handleChange}
							required
							className={clsx(
								"block mt-1 py-1 px-2 text-[var(--text-muted)] w-full border rounded-sm",
								{ "bg-[var(--bg-dark)]": errors.message }
							)}
						/>
						{errors.message && <p className="text-red-400 mt-1">{errors.message}</p>}
					</Field>

					<div className="flex flex-row justify-between items-center">
						<MotionButton
							whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
							type="submit"
							className="bg-[var(--bg-light)] px-4 py-1 cursor-pointer rounded-sm"
						>
							Print
						</MotionButton>

						{submitted && <p className="text-green-400">Message sent!</p>}
						{failed && <p className="text-red-400">Not sent!</p>}
					</div>
				</Fieldset>
			</form>
		</motion.div>
	)
}

export { TicketContact }

