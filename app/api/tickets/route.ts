import { NextResponse } from "next/server"

export async function POST(req: Request) {
	const ticket = await req.json()

	const res = await fetch(`${process.env.TICKET_API_URL}/tickets`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${process.env.TICKET_API_TOKEN}`,
		},
		body: JSON.stringify(ticket),
	})

	const data = await res.json()

	if (res.ok) {
		return NextResponse.json(data, { status: res.status })
	} else {
		return NextResponse.json(data, { status: res.status })
	}
}
