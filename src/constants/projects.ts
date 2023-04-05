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
      "This is a simple blog application built with Next.js, TypeScript, Notion API, and Tailwind CSS. The application fetches data from a Notion database using the Notion API and displays the data on the frontend. It is designed to be easily customizable and extendable, so you can use it as a starting point for your own blog or website.",
    imageSrc: "/img/prj-pay-history.png",
    demoUrl: "https://pay-history.kanaru.jp",
    sourceUrl: "https://github.com/kanaru-ssk/pay-history",
    skills: ["Firebase", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Notion Blog",
    description:
      "This is a simple blog application built with Next.js, TypeScript, Notion API, and Tailwind CSS. The application fetches data from a Notion database using the Notion API and displays the data on the frontend. It is designed to be easily customizable and extendable, so you can use it as a starting point for your own blog or website.",
    imageSrc: "/img/prj-pay-history.png",
    demoUrl: "https://notion-blog.kanaru.jp",
    sourceUrl: "https://github.com/kanaru-ssk/notion-blog",
    skills: ["Notion API", "Next.js", "TypeScript", "TailwindCSS"],
  },
];
