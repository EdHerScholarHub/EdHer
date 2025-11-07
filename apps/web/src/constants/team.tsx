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
      { id: 0, name: "Moe Pwint Khin", position: "Project Lead", img: "/assets/profiles/tl.jpg" },
      { id: 1, name: "Chit Thet Mon Khin", position: "Co-Project Lead", img: "/assets/profiles/ctl_1.jpg" },
      { id: 2, name: "Khin Thandar Oo", position: "Founder", img: "/assets/profiles/ctl_2.jpg" },
    ],
  },
  {
    "Malaysia Team": [
      { id: 0, name: "Rohini", position: "Project Member", img: "/assets/profiles/pmb_1_ms.jpg" },
      { id: 1, name: "Andrea", position: "Project Member", img: "/assets/profiles/pmb_2_ms.jpg" },
    ],
  },
];
