import Link from "next/link";

import EdHer from "../../shared/components/edher";

type TFooterLink = {
  text: string;
  link: string;
};

export default function Footer() {
  const footerLinks: Array<Record<string, Array<TFooterLink>>> = [
    {
      Shortcuts: [
        { text: "Guides & Articles", link: "#" },
        { text: "Scholarship Tips", link: "#" },
        { text: "E-Learning Videos", link: "#" },
        { text: "Events", link: "#" },
      ],
    },
    {
      Scholarship: [
        { text: "By Country", link: "#" },
        { text: "By Field of Study", link: "#" },
        { text: "By Degree", link: "#" },
        { text: "Fully Funded / Partial Funded", link: "#" },
      ],
    },
    {
      Support: [
        { text: "Contact Us", link: "#" },
        { text: "FAQ", link: "#" },
        { text: "Privacy / Policy", link: "#" },
      ],
    },
  ];
  return (
    <section className="bg-navy">
      <footer className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 py-8 md:py-12 lg:py-20 text-sm text-silver">
        <div className="px-4 lg:max-w-md">
          <EdHer className="mb-4 lg:mb-6" />
          <p>Find the right scholarship faster with our smart filters and tools.</p>
        </div>

        <div className="px-4 grid grid-cols-1 md:grid-cols-3 gap-10 w-full lg:w-full">
          {
            footerLinks.map(links => (
              <div key={Object.keys(links)[0]}>
                <h2 className="text-xl font-bold mb-4 lg:mb-6">{Object.keys(links)[0]}</h2>
                <ul className="">
                  {
                    Object.values(links)[0]!.map(link => (
                      <li className="leading-6 md:leading-7" key={link.text}>
                        <Link href={link.link} className="text-silver/80 text-sm hover:underline hover:text-silver transition">{link.text}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>

      </footer>
      <div className="text-center bg-[#092257] py-3 text-sm basis-full text-silver/70 border-t border-silver/20">
        <p className="">Copyright&copy;2025 Edher</p>
      </div>
    </section>
  );
}
