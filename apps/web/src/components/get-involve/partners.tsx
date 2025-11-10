import { Button } from "@repo/ui/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Partners() {
  return (
    <div style={{ backgroundImage: "url('/assets/get-involve-wavy-bg.svg')" }} className="grid bg-cover bg-top bg-no-repeat py-20 md:py-14 grid-cols-1 gap-4 md:grid-cols-2 md:place-items-center ">
      <div className="font-archivo p-4 space-y-2">
        <p className="text-papaya font-medium text-sm md:text-base">Interest To Become A Partner?</p>
        <h2 className="text-xl md:text-2xl font-bold text-white leading-7 mb-4 md:mb-6">What Should Make Partners With Us?</h2>
        <p className="text-silver md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8 mb-4 md:mb-6">
          Partnering with us gives your organization a unique opportunity to make a real difference in students’ lives. Together, we can expand access to education, create meaningful impact, and showcase your commitment to building a brighter future.
        </p>
        <Link href="#" className="">
          <Button className="bg-papaya text-navy py-5 md:py-6 hover:bg-papaya/80 rounded-xs md:text-lg">Contact Us</Button>
        </Link>
      </div>
      <div className="p-2">
        <Image src="/assets/get-involve-partners.jpg" width={628} height={384} alt="Become a Volunteer" className="rounded-xl" />
      </div>
    </div>
  );
}
