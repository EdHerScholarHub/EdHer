import Contact from "../../../components/about-us/contact";

export default function ContactPage() {
  return (
    <main className="bg-silver">
      <section className="max-w-[1440px] mx-auto flex flex-col gap-10 *:px-4 pb-20">
        <div>
          <h1 className="header text-center">Reach Out to Us</h1>
          <p className="text-center text-navy/70">Need guidance or support with your application?<br /> Contact our team anytime.</p>
          <Contact />
        </div>
      </section>
    </main>
  );
}
