import fs from "fs"
import path from "path"
import { ReactNode } from "react"

const getCatFiles = (): string[] => {
	const catsDir = path.join(process.cwd(), "public", "cat")
	const files = fs.readdirSync(catsDir)

	return files
		.filter(file => file.endsWith(".webp"))
		.map(file => `/cat/${file}`)
}

const getWebsites = (relativePath: string): string[] => {
	const fullPath = path.join(process.cwd(), relativePath)

	if (!fs.existsSync(fullPath)) {
		throw new Error(`File not found: ${fullPath}`)
	}

	const content = fs.readFileSync(fullPath, "utf-8")
	const lines = content
		.split(/\r?\n/)
		.map(line => line.trim())
		.filter(Boolean)

	return lines
}


interface QuoteProps {
	quote: string
	cite: string
	src?: string
}

const getQuotes = (): QuoteProps[] => {
	const quotes: QuoteProps[] = [
		{
			quote: "It can always get worse.",
			cite: "Somebody"
		},
		{
			quote: "You don't need to have verbosity for the distillation of pure thought.",
			cite: "Cary Jardin"
		},
		{
			quote: "Memory amplifies, Memory diminishes, it is malleable, memory is a motherfucker.",
			cite: "Rufus Cotesworth"
		},
		{
			quote: "Math is perfection and computer science is the application of perfection to an imperfect world.",
			cite: "Cary Jardin"
		},
		{
			quote: "The code does what you tell it to do, not what you want it to do.",
			cite: "BroMakeGames!",
			src: "https://www.youtube.com/watch?v=jLk-kJVPwcI"
		},
		{
			quote: "Never seek comfort because you'll never be comforted, do the hard thing, lift heavy weights",
			cite: "Primeagen"
		},
		{
			quote: "Give them social media and video games, and they will never improve.",
			cite: "somebody"
		},
		{
			quote: "When the hermit crab shits in its shell it can't bring that where it goes it has to funnel it out with its two back legs. That's the grieving process.",
			cite: "Gustavo H."
		},
		{
			quote: "Maybe the whole purpose of reading wasn't to learn more, but to get in touch with that deep and quiet part of yourself.",
			cite: "Max Joseph",
			src: "https://www.youtube.com/watch?v=lIW5jBrrsS0&t=1939s"
		},
		{
			quote: "The hardest single part of building a software system is deciding precisely what to build. No other part of the conceptual work is as difficult as establishing the detailed technical requirements, including all the interfaces to people, to machines, and to other software systems. No other part of the work so cripples the resulting system if done wrong. No other part is more difficult to rectify later.",
			cite: "Frederick P. Brooks, Jr.",
			src: "https://worrydream.com/refs/Brooks_1986_-_No_Silver_Bullet.pdf"
		},
		{
			quote: "The Heap: Think of being seated at a restaurant. When you enter, you state the number of people in your group, and the host finds an empty table that fits everyone and leads you there. If someone in your group comes late, they can ask where you’ve been seated to find you.",
			cite: "The Rust Programming Language",
			src: "https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html"
		},
		{
			quote: "Obsess over WHY we do what we do rather than HOW we do what we do.",
			cite: "Adam Ragusea",
			src: "https://www.youtube.com/watch?v=x1kv3oKoZkQ"
		},
		{
			quote: "Having less, and more importantly, wanting less, frees up space in your home and in your mind, making it a little easier to focus on what genuinely makes you happy.",
			cite: "Matt D'Avella",
			src: "https://www.youtube.com/watch?v=xFBg-sqpv64"
		},
		{
			quote: "You WILL DIE. Your Time is FINITE.",
			cite: "Nathan Laundry",
			src: "https://m.youtube.com/watch?v=PUtG4Zmd_AY"
		},
		{
			quote: "We only tried because we didn't know how hard it would be.",
			cite: "NCOT Technology",
			src: "https://m.youtube.com/watch?v=X30rNVgXtHQ"
		},
		{
			quote: "What I cannot build. I do not understand.",
			cite: "Richard Feynman"
		}
	]

	return quotes
}

export { getCatFiles, getWebsites, getQuotes }
