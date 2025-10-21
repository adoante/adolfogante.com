"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Button, Description, Field, Fieldset, Input, Label, Legend, Textarea } from "@headlessui/react"
import { clsx } from "clsx"

const MotionButton = motion.create(Button)

const TicketContact = () => {
	const [email, setEmail] = useState("")
	const [submitted, setSubmitted] = useState(false)
	const [message, setMessage] = useState("")
	const [validationError, setValidationError] = useState("")
	const [isValidName, setIsValidName] = useState(true)
	const [isValidEmail, setIsValidEmail] = useState(true)
	const [isValidMessage, setIsValidMessage] = useState(true)
	const [failed, setFailed] = useState(false)

	const handleInvalid = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.currentTarget

		const invalidFields = Array.from(form.elements).filter(
			(el): el is HTMLInputElement | HTMLTextAreaElement =>
				(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) &&
				!el.validity.valid
		)

		setIsValidName(true)
		setIsValidEmail(true)
		setIsValidMessage(true)
		setValidationError("")
		setSubmitted(false)

		invalidFields.forEach((field) => {
			setValidationError((prev) => prev + field.validationMessage + " ")
			switch (field.name) {
				case "name":
					setIsValidName(false)
					break
				case "email":
					setIsValidEmail(false)
					break
				case "message":
					setIsValidMessage(false)
					break
			}
		})
	}

	const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		e.preventDefault()

		setIsValidName(true)
		setIsValidEmail(true)
		setIsValidMessage(true)
		setSubmitted(false)
		setValidationError("")
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.currentTarget

		const name = (form.elements.namedItem("name") as HTMLInputElement).value
		const email = (form.elements.namedItem("email") as HTMLInputElement).value
		const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

		const ticket = { name, email, message }

		const res = await fetch("/api/tickets", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(ticket),
		})

		if (res.ok) {
			setSubmitted(true)
			form.reset()
			setEmail("")
			setMessage("")
		} else {
			setSubmitted(false)
			setFailed(true)
		}
	}

	return (
		<form onSubmit={handleSubmit} noValidate={false} onInvalid={handleInvalid}>
			<Fieldset className="bg-[var(--bg)] space-y-6 py-5 px-8 border-t-8 border-b-8 border-[var(--highlight)] shadow-md shadow-[color:var(--shadow)] rounded-sm">
				<Legend className="text-2xl font-bold">Print a Ticket</Legend>

				<Field>
					<Label className="block">Name</Label>
					<Input
						className={clsx(
							"block mt-1 text-[var(--text-muted)] border py-1 px-2 w-full rounded-sm",
							{
								"bg-[var(--bg-dark)]": !isValidName,
							}
						)}
						name="name"
						required
						placeholder="name or something silly"
						onInput={handleInput}
					>
					</Input>
				</Field>

				<Field>
					<Label className="block">Email</Label>
					<Input
						className={clsx(
							"block mt-1 text-[var(--text-muted)] border py-1 px-2 w-full rounded-sm",
							{
								"bg-[var(--bg-dark)]": !isValidEmail,
							}
						)}
						name="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder="mr.cool126@yahoo.com"
						onInput={handleInput}
					>
					</Input>
				</Field>

				<Field>
					<Label className="flex flex-row justify-between">Message
						<Description
							className={clsx("text-[var(--text-muted)]", { "text-red-400": (message.length >= 280) })}
						>
							{message.length}/280
						</Description>
					</Label>
					<Textarea
						className={clsx(
							"block mt-1 py-1 px-2 text-[var(--text-muted)] w-full border rounded-sm",
							{
								"bg-[var(--bg-dark)]": !isValidMessage,
							}
						)}
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						placeholder="Yes, there is a limit."
						onInput={handleInput}
					>
					</Textarea>
				</Field>

				<span className="flex flex-row justify-between">
					<MotionButton
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.1 }
						}}
						type="submit"
						className="bg-[var(--bg-light)] px-4 py-1 cursor-pointer rounded-sm"
					>
						Print
					</MotionButton>

					{submitted && (
						<p className="text-green-400">Message sent!</p>
					)}

					{failed && (
						<p className="text-red-400">Not sent!</p>
					)}
				</span>

				{(!isValidName || !isValidEmail || !isValidMessage) && (
					<p className="text-red-400">{validationError}</p>
				)}

			</Fieldset>
		</form>
	)
}

export { TicketContact }
