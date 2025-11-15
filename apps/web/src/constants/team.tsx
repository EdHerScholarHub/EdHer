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
      {
        id: 0,
        name: "Moe Pwint Khin",
        position: "Project Lead",
        img: "/assets/profiles/tl.jpg",
      },
      {
        id: 1,
        name: "Chit Thet Mon Khin",
        position: "Co-Project Lead",
        img: "/assets/profiles/ctl_1.jpg",
      },
      {
        id: 2,
        name: "Khin Thandar Oo",
        position: "Founder",
        img: "/assets/profiles/ctl_2.jpg",
      },
      {
        id: 3,
        name: "Soe Thiha Lwin",
        position: "Web Developer",
        img: "/assets/profiles/soe_thiha_lwin.jpg",
      },
      {
        id: 4,
        name: "Kyi Phyu Khin",
        position: "UI/UX Designer",
        img: "/assets/profiles/kyi_phyu_khin.jpg",
      },
      {
        id: 5,
        name: "Ei Ei Phyo Naing",
        position: "UI/UX Assistant",
        img: "/assets/profiles/ei_ei_phyo_naing.jpg",
      },
      {
        id: 6,
        name: "Swem Htet Oo",
        position: "UI/UX Assistant",
        img: "/assets/profiles/swem_htet_oo.jpg",
      },
      {
        id: 7,
        name: "Thant Phyu Sin",
        position: "Scholarship Data Researcher",
        img: "/assets/profiles/thant_phyu_sin.jpg",
      },
      {
        id: 8,
        name: "Yamin Shwe Sin",
        position: "E-Content Writer",
        img: "/assets/profiles/yamin_shwe_sin.jpg",
      },
      {
        id: 9,
        name: "Pont Pont Chint",
        position: "Scholarship Data Researcher",
        img: "/assets/profiles/pont_pont_chit.jpg",
      },
      {
        id: 10,
        name: "Myo Myint Myat Thein",
        position: "E-Content Writer",
        img: "/assets/profiles/myo_myint_myat_thein.jpg",
      },
      {
        id: 11,
        name: "Than Htike",
        position: "Scholarship Data Researcher",
        img: "/assets/profiles/than_htike.jpg",
      },
      {
        id: 12,
        name: "Yoon Yamin Hlaing",
        position: "E-Content Writer",
        img: "/assets/profiles/yoon_yamin_hlaing.jpg",
      },
      {
        id: 13,
        name: "Ye Htut Khaung",
        position: "Scholarship Data Researcher",
        img: "/assets/profiles/ye_htut_khaung.jpg",
      },
      {
        id: 14,
        name: "Ye Wint Kyaw",
        position: "Scholarship Data Researcher",
        img: "/assets/profiles/ye_wint_kyaw.jpg",
      },
      {
        id: 15,
        name: "Saw Htet Arkar Kyaw",
        position: "HR Head",
        img: "/assets/profiles/saw_htet_arkar_kyaw.jpg",
      },
      {
        id: 16,
        name: "Min Khant Maung",
        position: "E-Content Writer",
        img: "/assets/profiles/min_khant_maung.jpg",
      },
    ],

  },
  {
    "Malaysia Team": [
      {
        id: 0,
        name: "Rohini",
        position: "Project Member",
        img: "/assets/profiles/pmb_1_ms.jpg",
      },
      {
        id: 1,
        name: "Andrea",
        position: "Project Member",
        img: "/assets/profiles/pmb_2_ms.jpg",
      },
    ],
  },
];
