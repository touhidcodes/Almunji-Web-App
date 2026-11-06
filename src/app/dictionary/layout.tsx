import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quranic Dictionary — Almunji",
  description: "Explore Quranic words across Arabic, Persian, and English, including meanings, roots, examples, and verse references.",
};

export default function DictionaryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
