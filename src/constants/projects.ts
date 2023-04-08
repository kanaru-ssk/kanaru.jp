export type Project = {
  title: string;
  description: string;
  imageSrc: string;
  demoUrl: string;
  sourceUrl: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    title: "Pay History",
    description:
      "This is a simple household app built with Firebase, Next.js, TypeScript and Tailwind CSS. It uses Firebase for the backend and implements login authentication and real-time listening.",
    imageSrc: "/img/prj-pay-history.png",
    demoUrl: "https://pay-history.kanaru.jp",
    sourceUrl: "https://github.com/kanaru-ssk/pay-history",
    skills: ["Firebase", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Notion Blog",
    description:
      "This is a simple blog application built with Next.js, TypeScript, Notion API, and Tailwind CSS. The application fetches data from a Notion database using the Notion API and displays the data on the frontend.",
    imageSrc: "/img/prj-notion-blog.png",
    demoUrl: "https://notion-blog.kanaru.jp",
    sourceUrl: "https://github.com/kanaru-ssk/notion-blog",
    skills: ["Notion API", "Next.js", "TypeScript", "TailwindCSS"],
  },
];
