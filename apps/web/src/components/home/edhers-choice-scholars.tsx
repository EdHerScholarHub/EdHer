import type { TScholar } from "./post";

import Post from "./post";

export default function EdhersChoiceScholars() {
  const scholars: TScholar[] = [
    {
      id: 0,
      img: "/assets/post5.png",
      title: "Enviromental Program",
      by: "UK Government",
      date: "15 Nov 2025",
      tags: ["Fully Funded", "Bachelor", "Business", "Online"],
      link: "#",
    },
    {
      id: 1,
      img: "/assets/post6.png",
      title: "Human Psychology",
      by: "USA Government",
      date: "15 Oct 2025",
      tags: ["Fully Funded", "Bachelor", "Business", "Online"],
      link: "#",
    },
    {
      id: 2,
      img: "/assets/post7.png",
      title: "AI",
      by: "USA Government",
      date: "15 Oct 2025",
      tags: ["Fully Funded", "Bachelor", "Business", "Online"],
      link: "#",
    },
    {
      id: 3,
      img: "/assets/post8.png",
      title: "Australia Awards Sccholarship",
      by: "USA Government",
      date: "15 Oct 2025",
      tags: ["Fully Funded", "Bachelor", "Business", "Online"],
      link: "#",
    },
  ];
  return (
    <div className="flex gap-4 overflow-x-auto w-full justify-between">

      {
        scholars.map(scholar => (
          <Post {...scholar} key={scholar.id} />
        ))
      }

    </div>
  );
}
