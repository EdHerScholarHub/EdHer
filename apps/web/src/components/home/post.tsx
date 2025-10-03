import type { StaticImport } from "next/dist/shared/lib/get-img-props";

import Image from "next/image";
import Link from "next/link";

export type TScholar = {
  img: string | StaticImport;
  id: number;
  title: string;
  by: string;
  date: string;
  tags: string[];
  link: string;
};

export default function Post({ title, by, date, tags, link, img }: TScholar) {
  return (
    <Link href={link} className="w-[302px] shrink-0 group">
      <div className="">
        <Image src={img} width={302} height={228} alt="post" className="rounded-md" />
      </div>
      <div className=" mt-4 px-2">
        <h2 className="font-medium text-xl font-archivo text-navy group-hover:underline">{title}</h2>
        <p className="my-1.5 text-muted-navy text-sm">by {by}</p>
        <p className="text-muted-navy text-sm">Apply before {date}</p>
      </div>
      <div className="flex gap-2 my-4 flex-wrap px-2">
        {
          tags.map(tag => (
            <span key={tag} className="text-muted-navy bg-slate-200 hover:bg-blue-200 transition-colors rounded-full px-2.5 py-1 text-xs">{tag}</span>
          ))
        }
      </div>
    </Link>
  );
}
