import Image from "next/image";

import IconCard from "./icon-card";

export default function Benefits() {
  return (
    <div className="my-4 space-y-8">
      <div className="font-archivo">
        <h2 className="header text-center">Partnership Benefits</h2>
        <p className="text-center text-navy max-w-2xl mx-auto md:text-lg">
          By joining hands, your organization helps students succeed while gaining recognition and opportunities to grow your network.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 *:bg-papaya/5">
        <IconCard
          Icon={<Image src="/icons/mood-good.svg" width={32} height={32} alt="mood good" />}
          header="Enhance Brand Recognition"
          desc="Show your commitment to education and community development. "
        />
        <IconCard
          Icon={<Image src="/icons/positive-dynamics.svg" width={32} height={32} alt="positive dynamics" />}
          header="Drive Positive Impact"
          desc="Your support directly helps fund scholarships, mentorship programs."
        />
        <IconCard
          Icon={<Image src="/icons/twotone_connect.svg" width={32} height={32} alt="connect" />}
          header="Connect with Organizations"
          desc="Build valuable relationships with partners, educators, and community leaders."
        />
      </div>
    </div>
  );
}
