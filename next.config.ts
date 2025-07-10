import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: "export",
	images: { unoptimized: true },
	// i18n: {
	// 	locales: ["en", "ja"],
	// 	defaultLocale: "en",
	// },
};

export default nextConfig;
