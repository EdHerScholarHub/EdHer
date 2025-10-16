import AboutUs from "../../../components/about-us/about-us";
import Contact from "../../../components/about-us/contact";
import { CircleText, UnderlineText } from "../../../components/about-us/decorate-text";
import Impact from "../../../components/about-us/impact";
import Team from "../../../components/about-us/team";

export default function AboutUsPage() {
  return (
    <section className="">
      <section
        style={{ backgroundImage: "url('/assets/overlay.svg'), url('/assets/about-us-bg.jpg')" }}
        className="cursor-default overflow-hidden bg-cover bg-center h-[240px] md:h-[480px] lg:h-[598px] relative grid place-items-center"
      >
        <div className="w-full sm:w-9/12 mx-auto relative z-[1] ">
          <h1 className="text-2xl md:text-2xl lg:text-5xl font-archivo text-balance leading-relaxed font-medium text-center text-silver">
            <CircleText text="Discover " />
            how we make education accessible to
            <UnderlineText text=" the students " />
            around the globe
          </h1>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto flex flex-col gap-10 *:px-4">
        <div>
          <AboutUs
            h1="Our Story"
            h2="Turning Dreams Into Opportunities"
            p="Every student has a dream, but not every student has the resources to pursue it. That’s where we step in. Edher began as a small initiative to support talented but underprivileged youth. Today, our programs reach thousands of students across regions, helping them secure scholarships and mentorship that can change the course of their lives. Our story is one of hope, perseverance, and the belief that education can transform futures."
            img="/assets/about-us-story.jpg"
          />
          <AboutUs
            h1="Our Mission"
            h2="Creating Equal Access to Education Worldwide"
            p="We believe that talent is universal, but opportunity is not. Our mission is to close that gap by helping students around the world access scholarships, develop skills, and build brighter futures. Through our programs and partnerships, we aim to empower young minds to create positive change in their communities."
            img="/assets/about-us-mission.jpg"
            flip={true}
          />
        </div>

        <div>
          <h1 className="header">Our Impact</h1>
          <Impact />
        </div>

        <div>
          <h1 className="header">Meet The Team</h1>
          <Team />
        </div>

        <div className="">
          <h1 className="header text-center">Reach Out to Us</h1>
          <p className="text-center text-navy/70">Need guidance or support with your application?<br /> Contact our team anytime.</p>
          <Contact />
        </div>

      </section>
    </section>
  );
}
