type TFooterLink = {
  text: string;
  link: string;
};

export const FOOTERLINKS: Array<Record<string, Array<TFooterLink>>> = [
  {
    "About Us": [
      { text: "Team", link: "/about-us#team" },
      { text: "Partners", link: "#" },
    ],
  },
  {
    Support: [
      { text: "Contact Us", link: "/contact-us" },
      { text: "Get Involve", link: "/get-involve" },
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
