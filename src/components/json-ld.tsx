import { EMAIL } from "@/constants/email";
import { env } from "@/env";

type JsonLdProps = {
	title: string;
	description: string;
};

export function JsonLd({ title, description }: JsonLdProps) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: title,
		description: description,
		email: EMAIL,
		logo: `${env.NEXT_PUBLIC_BASE_URL}/logo.svg`,
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: for structured data
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
