import Link from "next/link"
import { GithubLogoIcon, LinkedinLogoIcon, ReadCvLogoIcon } from "@phosphor-icons/react/ssr"

const Footer = () => {
	return (
		<footer className="flex flex-col items-center text-center text-sm md:p-20 p-5 md:space-y-8 space-y-4">

			{/* Social Links */}
			<div className="flex space-x-4">
				{[
					["/", <ReadCvLogoIcon className="w-7 h-7" key="resume" />],
					["https://github.com/adoante/", <GithubLogoIcon className="w-7 h-7" key="github" />],
					["https://www.linkedin.com/in/adolfogante/", <LinkedinLogoIcon className="w-7 h-7" key="linkedin" />],
				].map(([url, icon]) => (

					<Link className="hover:text-[var(--highlight)]" key={url as string} href={url as string} target="_blank">
						{icon}
					</Link>
				))}
			</div>
			<p>why is it {`'`}copyright{`'`} and not {`'`}copywrite{`'`}?</p>
			<p>{`"`}I have the <i>RIGHT</i> to <i>COPY</i> what I <i>WRITE.</i>{`"`}</p>
		</footer>
	)
}

export { Footer }
