import Image from "next/image";
import Link from "next/link";

import { Post } from "./post";

export default function DetailsPage() {
  return (
    <main style={{ backgroundImage: "url(/assets/details-top-overlay.svg)" }} className="bg-silver bg-no-repeat bg-top">
      <section className="max-w-[840px] mx-auto flex flex-col gap-10 md:gap-8 px-4 pb-20 font-archivo text-navy md:pt-14 *:[&_li]:mb-1">
        <div>
          <h1 className="header mb-2">{Post.id}</h1>
          <p className="text-navy/80 mb-2 flex flex-col sm:flex-row">
            <span>By {Post.provider} </span>
            <span className="mx-2 sm:inline-block hidden">●</span>
            <span>Apply before {Post.deadline}</span>
          </p>
        </div>

        <div>
          <Image src={Post.image} width={843} height={400} alt={Post.id} className="rounded-xl mx-auto w-full aspect-video object-cover" />
        </div>

        <div>
          <p className="text-navy/80">{Post.desc}</p>
        </div>

        <div>
          <h2 className="details-header">Scholarship Summary</h2>
          <ul className="list-disc ml-4 text-navy/80">
            <li>Country: {Post.country}</li>
            <li>Provider: {Post.provider}</li>
            <li>Study Level: {Post.study_level}</li>
            <li>Deadline: {Post.deadline}</li>
          </ul>
        </div>

        <div>
          <h2 className="details-header">Scholarship Benefits</h2>
          <ul className="list-disc ml-4 text-navy/80">
            {
              Post.benefits.map(benifit => (
                <li key={benifit}>{benifit}</li>
              ))
            }
          </ul>
        </div>

        <div>
          <h2 className="details-header">Requirements for {Post.id}</h2>
          <ul className="list-disc ml-4 text-navy/80">
            {
              Post.requirements.map(requirement => (
                <li key={requirement}>📌{requirement}</li>
              ))
            }
          </ul>
        </div>

        <div>
          <h2 className="details-header">📄 Required Documents for Application</h2>
          <ol className="list-decimal ml-4 text-navy/80">
            {
              Post.necessary_documents.map(document => (
                <li key={document}>{document}</li>
              ))
            }
          </ol>
        </div>

        <div>
          <h2 className="details-header">How to apply for the {Post.id}</h2>
          <ul className="list-disc ml-4 text-navy/80">
            {
              Post.guidelines.map(guideline => (
                <li key={guideline}>{guideline}</li>
              ))
            }
          </ul>
        </div>

        <p className="font-bold">📌Deadline - {Post.deadline}</p>

        <p className="text-navy/80">{Post.footer}</p>

        <div className="font-semibold">
          <p className="mb-2">
            Official Website: {" "}
            <Link href={Post.official_link} target="_blank" className="hover:underline active:underline">{Post.official_link}</Link>
          </p>
          <p className="flex gap-1">
            <span className="block shrink-0">Also Check:</span>
            <span className="text-wrap overflow-hidden">
              {
                Post.additional_link.map(link => (
                  <Link href={link} target="_blank" key={link} className="block hover:underline active:underline mb-2">{link}<br /></Link>
                ))
              }
            </span>
          </p>
        </div>

      </section>
    </main>
  );
}
