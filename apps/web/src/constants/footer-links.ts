type TFooterLink = {
  text: string;
  link: string;
};

export const footerLinks: Array<Record<string, Array<TFooterLink>>> = [
  // {
  //   Shortcuts: [
  //     { text: "Guides & Articles", link: "#" },
  //     { text: "Scholarship Tips", link: "#" },
  //     { text: "E-Learning Videos", link: "#" },
  //     { text: "Events", link: "#" },
  //   ],
  // },
  // {
  //   Scholarship: [
  //     { text: "By Country", link: "#" },
  //     { text: "By Field of Study", link: "#" },
  //     { text: "By Degree", link: "#" },
  //     { text: "Fully Funded / Partial Funded", link: "#" },
  //   ],
  // },
  {
    "About Us": [
      { text: "Contact Us", link: "#" },
      { text: "FAQ", link: "#" },
      { text: "Privacy / Policy", link: "#" },
    ],
  },
  {
    Support: [
      { text: "Contact Us", link: "#" },
      { text: "FAQ", link: "#" },
      { text: "Privacy / Policy", link: "#" },
    ],
  },
  {
    "Follow Us": [
      { text: "Facebook", link: "#" },
      { text: "LinkedIn", link: "#" },
      { text: "Instagram", link: "#" },
    ],
  },
];
