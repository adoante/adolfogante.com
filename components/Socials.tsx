import { GithubLogoIcon, LinkedinLogoIcon, ReadCvLogoIcon } from "@phosphor-icons/react/ssr";

const Socials = () => {
	const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK

	const links = [
		{ url: resumeLink, icon: <ReadCvLogoIcon className="w-7 h-7" />, label: "Resume" },
		{ url: "https://github.com/adoante/", icon: <GithubLogoIcon className="w-7 h-7" />, label: "GitHub" },
		{ url: "https://www.linkedin.com/in/adolfogante/", icon: <LinkedinLogoIcon className="w-7 h-7" />, label: "LinkedIn" },
	];

	return (
		<div className="flex space-x-4">
			{links.map(({ url, icon, label }) =>
				url ? (
					<a
						key={label}
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
						className="hover:text-[var(--link)] transition-colors"
					>
						{icon}
					</a>
				) : null
			)}
		</div>
	);
};

export { Socials };

