import Image from "next/image";
import Link from "next/link";
import SadImg from "@/assets/sad.webp";
import { DEFAULT_LANG } from "@/libs/lang";

export default function NotFound() {
	return (
		<html lang={DEFAULT_LANG}>
			<body className="bg-black text-white">
				<div className="bg-black text-white min-h-svh flex flex-col max-w-3xl mx-auto">
					<header className="flex justify-between items-center p-5">
						<Image
							src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.svg`}
							alt="logo"
							priority
							width={104}
							height={48}
						/>
					</header>

					<main className="flex-1 p-5 space-y-4">
						<Image
							src={SadImg}
							alt="sad"
							priority
							width={256}
							height={256}
							className="rounded-full my-12"
						/>
						<h1 className="font-bold text-3xl">404 Not Found</h1>
						<p>
							Sorry, we couldn’t find the page you were looking for.
							<br />
							It might have been moved or deleted.
						</p>
						<Link href="/" className="underline mt-8 block">
							Return Home
						</Link>
					</main>

					<footer className="text-sm p-8 text-center">
						&copy; 2025 Kanaru Sasaki
					</footer>
				</div>
			</body>
		</html>
	);
}
