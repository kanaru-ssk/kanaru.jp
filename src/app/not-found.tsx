import Image from "next/image";
import Link from "next/link";
import SadImg from "@/assets/sad.webp";
import { BaseLayout } from "@/components/base-layout";
import { DEFAULT_LANG } from "@/libs/lang";

export default function NotFound() {
  return (
    <BaseLayout
      lang={DEFAULT_LANG}
      title="404 Not Found"
      description="Sorry, we couldn’t find the page you were looking for. It might have been moved or deleted."
    >
      <main className="flex-1 space-y-4 p-5">
        <Image
          src={SadImg}
          alt="sad"
          priority
          fetchPriority="high"
          width={256}
          height={256}
          className="my-12 rounded-full"
        />
        <h1 className="font-bold text-3xl">404 Not Found</h1>
        <p>
          Sorry, we couldn’t find the page you were looking for.
          <br />
          It might have been moved or deleted.
        </p>
        <Link href="/" className="mt-8 block underline">
          Return Home
        </Link>
      </main>
    </BaseLayout>
  );
}
