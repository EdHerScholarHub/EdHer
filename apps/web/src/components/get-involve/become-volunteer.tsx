import { Button } from "@repo/ui/components/button";
import Image from "next/image";
import Link from "next/link";

export default function BecomeAVolunteer() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:place-items-center">
      <div className="font-archivo p-4 space-y-2">
        <p className="text-papaya font-medium text-sm md:text-base">Become a volunteer</p>
        <h2 className="text-xl md:text-2xl font-bold text-navy leading-7 mb-4 md:mb-6">What It Means to Volunteer With Us?</h2>
        <p className="text-navy md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8 mb-4 md:mb-6">
          Volunteering with us isn’t just about giving time — it’s about shaping lives.Our volunteers support youth in education, help organize community events, and spread awareness about equal learning opportunities.Whether online or on-site, your contribution creates a real impact.
        </p>
        <Link href="#" className="">
          <Button className="bg-papaya py-5 md:py-6 text-navy hover:bg-papaya/80 rounded-xs md:text-lg">Become a Volunteer</Button>
        </Link>
      </div>
      <div className="p-2">
        <Image src="/assets/get-involve-volunteer.jpg" width={628} height={384} alt="Become a Volunteer" className="rounded-xl" />
      </div>
    </div>
  );
}
