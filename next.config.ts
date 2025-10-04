import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
	pageExtensions: ["mdx", "md", "ts", "tsx"]

}

const withMDX = createMDX({})

export default withMDX(nextConfig);
