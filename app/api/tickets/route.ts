import { NextResponse } from "next/server"

export async function POST(req: Request) {
	const formData = await req.formData()

	const res = await fetch(`${process.env.TICKET_API_URL}/tickets`, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization": `Bearer ${process.env.TICKET_API_TOKEN}`,
		},
		body: formData.toString(),
	})

	if (res.ok) {
		console.log("Created Ticket")
	} else {
		console.log("Failed to create Ticket")
	}

	const data = await res.json()

	return NextResponse.json(data)
}
