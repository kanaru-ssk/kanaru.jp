export const LANG = {
  ENGLISH: "en",
  JAPANESE: "ja",
} as const;
export const LANGS = Object.values(LANG);
export const DEFAULT_LANG = LANG.ENGLISH;
export type Lang = (typeof LANGS)[number];

export function getDictionary(lang: Lang, yearOfExperience: number) {
  if (lang === LANG.JAPANESE) {
    return {
      title: "佐々木 哉瑠",
      descriptions: [
        "フリーランスのソフトウェアエンジニアです。",
        `実務経験 ${yearOfExperience} 年目で、主にGoogleCloud, Go, TypeScript, Next.jsを使用しています。`,
        "宮城大学の特任助教もしています。",
      ],
    };
  }

  return {
    title: "Kanaru Sasaki",
    descriptions: [
      "I'm a freelance software engineer based in Japan (remote).",
      `With ${yearOfExperience} years of professional experience, I mainly work with Google Cloud, Go, TypeScript, and Next.js.`,
      "I'm also an assistant professor at Miyagi University.",
    ],
  };
}
