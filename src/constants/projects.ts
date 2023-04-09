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
      "This is a modest household application constructed utilizing Firebase, Next.js, TypeScript and Tailwind CSS. The backend employs Firebase, and it incorporates login authentication and real-time listening.",
    imageSrc: "/img/prj-pay-history.png",
    demoUrl: "https://pay-history.kanaru.jp",
    sourceUrl: "https://github.com/kanaru-ssk/pay-history",
    skills: ["Firebase", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Notion Blog",
    description:
      "This is a basic blogging application constructed using Next.js, TypeScript, Notion API, and Tailwind CSS. The application retrieves information from a Notion database via the Notion API and showcases the data on the frontend.",
    imageSrc: "/img/prj-notion-blog.png",
    demoUrl: "https://notion-blog.kanaru.jp",
    sourceUrl: "https://github.com/kanaru-ssk/notion-blog",
    skills: ["Notion API", "Next.js", "TypeScript", "TailwindCSS"],
  },
];
