import { GraduationCap, Lightbulb } from "lucide-react";
import Image from "next/image";

import { Link } from "../../i18n/navigation";

export default function Hero() {
  return (
    <main className="cursor-default bg-[url('/assets/bg.svg')] bg-cover bg-bottom min-h-[calc(100dvh-70px)] md:min-h-[700px] lg:min-h-[600px] max-h-[720px]">
      <section className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:*:basis-1/2 gap-10 items-center pt-10 px-4 lg:px-8">
        <div className="text-background flex flex-col gap-4 p-2 max-w-3xl mx-auto md:w-full self-start">
          <h1 className="text-2xl lg:text-[2rem] max-w-lg lg:max-w-xl leading-[1.29] md:leading-[1.5] font-[500] text-pretty font-archivo">
            ASEAN Scholarship & Digital Skill Hub: Empowering
            <span className="text-papaya"> ASEAN YOUTH</span> to Access Global
            Opportunities
          </h1>
          <p className="text-white/80 max-w-lg lg:my-2 lg:text-lg text-pretty">
            Discover life-changing scholarships, digital skills, programs and
            global opportunities designed for ASEAN youth.
          </p>
          <div className={"flex flex-col gap-4 md:flex-row"}>
            <Link
              href={"/search"}
              className="bg-papaya hover:brightness-110 active:brightness-110 transition cursor-pointer w-max md:text-lg px-4 py-4 lg:py-3 flex items-center gap-x-2 text-navy rounded-sm font-medium"
              type="button"
              role="button"
            >
              <GraduationCap />
              <span>Explore Scholarships</span>
            </Link>
            <Link
              href={"/get-involve"}
              className=" bg-transparent border-[1px] border-papaya hover:bg-papaya/70 hover:border-transparent hover:text-navy/90 transition cursor-pointer w-max md:text-lg px-4 py-4 lg:py-3 flex items-center gap-x-2 text-white rounded-sm font-medium duration-500"
            >
              <Lightbulb />
              <span>Join Our Network</span>
            </Link>
          </div>
        </div>

        <div className="shrink-0 z-[0] relative w-full max-w-[480px] lg:max-w-[640px] py-2 px-14 md:ml-64 lg:ml-0">
          <div className="scale-90 select-none origin-right sm:scale-100 bg-silver absolute left-0 lg:left-5 top-0 px-3 py-2 lg:px-5 lg:py-4 flex gap-2 rounded-md outline-4 lg:outline-8 outline-offset-0 outline-muted-navy">
            <Image
              src="/icons/target.svg"
              width={24}
              height={24}
              alt="target"
              className="size-auto"
            />
            <p className="text-xs lg:scale-115 origin-left text-navy w-20">
              Shape Your Future
            </p>
          </div>

          <div className="scale-90 select-none origin-right sm:scale-100 bg-silver absolute right-0 lg:right-0 bottom-10 px-3 py-2 lg:px-5 lg:py-4 flex gap-2 rounded-md outline-4 lg:outline-8 outline-offset-0 outline-muted-navy">
            <Image
              src="/icons/goal.svg"
              width={24}
              height={24}
              alt="goal"
              className="size-auto"
            />
            <p className="text-xs lg:scale-115 origin-left text-navy w-24">
              Unlock Opportunities
            </p>
          </div>

          <Image
            src="/assets/hero_img.png"
            alt="img"
            width={450}
            height={350}
            className="mx-auto w-full shrink-0"
          />
        </div>
      </section>
    </main>
  );
}
