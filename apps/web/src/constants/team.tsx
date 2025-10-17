export type TTeamMember = {
  id: number;
  name: string;
  position: string;
  img: string;
};

export type TTeamName = "Myanmar Team" | "Malaysia Team";

export const list: Array<Partial<Record<TTeamName, Array<TTeamMember>>>> = [
  {
    "Myanmar Team": [
      { id: 0, name: "Myanmar-1", position: "Founder", img: "/assets/post1.png" },
      { id: 1, name: "Myanmar-2", position: "Founder", img: "/assets/post2.png" },
      { id: 2, name: "Myanmar-3", position: "Founder", img: "/assets/post3.png" },
      { id: 3, name: "Myanmar-4", position: "Founder", img: "/assets/post4.png" },
      { id: 4, name: "Myanmar-5", position: "Founder", img: "/assets/post5.png" },
      { id: 5, name: "Myanmar-6", position: "Founder", img: "/assets/post4.png" },
      { id: 6, name: "Myanmar-7", position: "Founder", img: "/assets/post3.png" },
      { id: 7, name: "Myanmar-8", position: "Founder", img: "/assets/post2.png" },
      { id: 8, name: "Myanmar-9", position: "Founder", img: "/assets/post1.png" },
    ],
  },
  {
    "Malaysia Team": [
      { id: 0, name: "Malaysia-1", position: "Founder", img: "/assets/post8.png" },
      { id: 1, name: "Malaysia-2", position: "Founder", img: "/assets/post7.png" },
      { id: 2, name: "Malaysia-3", position: "Founder", img: "/assets/post8.png" },
      { id: 3, name: "Malaysia-4", position: "Founder", img: "/assets/post7.png" },
      { id: 4, name: "Malaysia-5", position: "Founder", img: "/assets/post8.png" },
      { id: 5, name: "Malaysia-6", position: "Founder", img: "/assets/post7.png" },
      { id: 6, name: "Malaysia-7", position: "Founder", img: "/assets/post8.png" },
      { id: 7, name: "Malaysia-8", position: "Founder", img: "/assets/post7.png" },
      { id: 8, name: "Malaysia-9", position: "Founder", img: "/assets/post8.png" },
      { id: 9, name: "Malaysia-10", position: "Founder", img: "/assets/post7.png" },
      { id: 10, name: "Malaysia-11", position: "Founder", img: "/assets/post8.png" },
      { id: 11, name: "Malaysia-12", position: "Founder", img: "/assets/post7.png" },
    ],
  },
];
