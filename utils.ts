import fs from "fs"
import path from "path"

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

export { getCatFiles, getWebsites }
