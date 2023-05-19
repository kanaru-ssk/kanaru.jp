import Image from "next/image";
import { Heading2 } from "@/components/Heading2";
import { Heading3 } from "@/components/Heading3";
import { Skills } from "@/components/Skills";
import { skills } from "@/constants/skills";

export const About = () => {
  return (
    <section id="about" className="px-4">
      <Heading2>About Me</Heading2>
      <div className="flex flex-col items-center gap-4 pt-8 sm:grid-cols-2 sm:flex-row sm:items-start">
        <Image
          src="/img/profile.webp"
          alt="profile"
          width={240}
          height={240}
          className="h-60 w-60"
        />
        <div className="space-y-2">
          <p>
            Hello, I&apos;m Kanaru Sasaki. I work as a freelance web engineer in
            Japan, and I&apos;m currently primarily focusing on TypeScript and
            Next.JS. Let me introduce my personal project in the section below.
          </p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-2">
            <dt>- 2000 :</dt>
            <dd>Born in Miyagi, Japan.</dd>
            <dt>- 2018 :</dt>
            <p>Enrolled at Miyagi University.</p>
            <dt>- 2021 :</dt>
            <dd>Started working as a part-time web engineer.</dd>
            <dt>- 2022 :</dt>
            <dd>Started working as a freelance web engineer.</dd>
          </dl>
          <Heading3>skills i work with currently</Heading3>
          <div>
            <Skills skills={skills.recent} />
            <details>
              <summary className="w-32 cursor-pointer py-2 text-gray-600">
                <span>other skills</span>
              </summary>
              <Skills skills={skills.other} />
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};
