import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TScholar = {
  img: string | StaticImport;
  id: number;
  title: string;
  by: string;
  date: string;
  tags: string[];
  link: string;
};
export const POPULARSCHOLARS: TScholar[] = [
  {
    id: 0,
    img: "/assets/post1.png",
    title: "Chevening Scholarship - UK",
    by: "UK Government",
    date: "15 Nov 2025",
    tags: ["Fully Funded", "Bachelor", "Business", "Online"],
    link: "#",
  },
  {
    id: 1,
    img: "/assets/post2.png",
    title: "Fulbright Scholarship",
    by: "USA Government",
    date: "15 Oct 2025",
    tags: ["Fully Funded", "Bachelor", "Business", "Online"],
    link: "#",
  },
  {
    id: 2,
    img: "/assets/post3.png",
    title: "MEXT Scholarship",
    by: "Japan  Government",
    date: "15 Oct 2025",
    tags: ["Fully Funded", "Bachelor", "Business", "Online"],
    link: "#",
  },
  {
    id: 3,
    img: "/assets/post4.png",
    title: "Australia Awards Scholarship",
    by: "USA Government",
    date: "15 Oct 2025",
    tags: ["Fully Funded", "Bachelor", "Business", "Online"],
    link: "#",
  },
];
