import { NextResponse } from "next/server"

export async function POST(req: Request) {
	const bodyText = await req.text()

	const res = await fetch(`${process.env.TICKET_API_URL}/tickets`, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization": `Bearer ${process.env.TICKET_API_TOKEN}`,
		},
		body: bodyText,
	})

	if (res.ok) {
		console.log("Created Ticket")
	} else {
		console.log("Failed to create Ticket")
	}

	const data = await res.json()

	return NextResponse.json(data)
}
