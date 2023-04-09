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
            Good day, sir. I am Kanaru Sasaki, a freelance front-end engineer.
            Though I presently reside in Japan, I am keen to broaden my horizons
            and undertake projects from all corners of the globe.
          </p>
          <p>
            During my leisure hours, I derive pleasure from strolling along the
            placid riverside in proximity to my abode, as well as venturing into
            the city to peruse through antiquarian emporia and establishments
            specializing in vintage clothing.
          </p>
          <Heading3>skills i work with recently</Heading3>
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
