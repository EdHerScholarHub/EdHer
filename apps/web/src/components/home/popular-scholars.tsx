import type { TScholar } from "./post";

import Post from "./post";

export default function PopularScholars() {
  const scholars: TScholar[] = [
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
      title: "Australia Awarts Scholarship",
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
