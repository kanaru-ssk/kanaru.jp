import Image from "next/image";
import Heading2 from "@/components/atoms/Heading2";
import Heading3 from "@/components/atoms/Heading3";
import { skills } from "@/constants/skills";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about">
      <Heading2>about</Heading2>
      <div className="grid pt-8 sm:grid-cols-2">
        <Image
          src="/img/profile.webp"
          alt="profile"
          width={144}
          height={144}
          className="mx-auto my-8"
        />
        <div className="space-y-4">
          <p>
            I&apos;m Kanaru Sasaki. My current job is web application
            development, and my recent hobby is web application development.
          </p>
          <div>
            <div className="py-2">
              <Heading3>skills i work with recently</Heading3>
            </div>
            <Skills skills={skills.recent} />
            <details>
              <summary className="w-32 cursor-pointer py-2 text-gray-400">
                <Heading3>other skills</Heading3>
              </summary>
              <Skills skills={skills.other} />
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
