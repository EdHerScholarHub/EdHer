import Link from "next/link";

export default function Header({ header, desc, link }: { header: string; desc: string; link: string }) {
  return (
    <div className="flex justify-between gap-2 mb-8 md:mb-10">
      <div className="max-w-5xl">
        <h1 className="header">{header}</h1>
        <p className="text-muted-navy md:text-lg">{desc}</p>
      </div>
      <Link href={link} className="underline hover:no-underline text-muted-navy underline-offset-4 decoration-muted-navy md:text-lg block shrink-0 w-fit h-fit mt-7 font-medium">See All</Link>
    </div>
  );
}
