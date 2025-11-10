import Image from "next/image";

import IconCard from "./icon-card";

export default function Volunteering() {
  return (
    <div className="my-4 space-y-8">
      <div className="font-archivo">
        <h2 className="header text-center">What You’ll Gain From Volunteering?</h2>
        <p className="text-center text-navy max-w-2xl mx-auto md:text-lg">Every moment you spend helping others also helps you discover new perspectives, skills, and purpose.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <IconCard
          Icon={<Image src="/icons/three-dots.svg" width={32} height={32} alt="three-dots" />}
          header="Learn New Skill"
          desc="Develop real-world experience in teamwork, leadership, and communication."
        />
        <IconCard
          Icon={<Image src="/icons/three-dots.svg" width={32} height={32} alt="three-dots" />}
          header="Flexible Remote Opportunities"
          desc="Join from anywhere — contribute your time, skills, or creativity online."
        />
        <IconCard
          Icon={<Image src="/icons/three-dots.svg" width={32} height={32} alt="three-dots" />}
          header="Grow Personally and Professionally"
          desc="Gain confidence, discover your strengths, and grow your portfolio or career."
        />
      </div>
    </div>
  );
}
