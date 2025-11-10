import BecomeAVolunteer from "../../../components/get-involve/become-volunteer";
import Benefits from "../../../components/get-involve/benefits";
import JoinVolunteer from "../../../components/get-involve/join-volunteer";
import Partners from "../../../components/get-involve/partners";
import Volunteering from "../../../components/get-involve/volunteering";

export default function GetInvolvePage() {
  return (
    <main className="bg-silver">
      <section
        style={{ backgroundImage: "url('/assets/get-involve-bg-overlay.svg'), url('/assets/get-involve-bg.jpg')" }}
        className="cursor-default overflow-hidden bg-cover bg-center h-[240px] md:h-[480px] lg:h-[598px] relative grid place-items-center mb-6"
      >
        <div className="w-full sm:w-9/12 mx-auto relative z-[1]">
          <h1 className="text-2xl md:text-2xl lg:text-5xl font-archivo text-pretty leading-relaxed font-medium text-center text-silver">
            Join Hands Together and Empower Education <wbr /> Impact For Everyone
          </h1>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto flex flex-col gap-10 *:px-4 pb-20">
        <BecomeAVolunteer />
        <Volunteering />
        <div>
          <h1 className="header text-center">Join Us As Volunteer</h1>
          <p className="text-center text-navy/70 mx-auto max-w-2xl">Become a part of our mission to empower students through education.Fill out the form below to get started and make a difference today!</p>
          <JoinVolunteer />
        </div>
        <Partners />
        <Benefits />
      </section>
    </main>
  );
}
