import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

	return [
		{
			url: `${baseUrl}`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/en`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/ja`,
			lastModified: new Date(),
		},
	];
}
