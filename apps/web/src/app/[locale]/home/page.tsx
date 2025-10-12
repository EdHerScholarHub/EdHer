import MobileFilter from "../../../components/filters/mobile-search";
import SearchForm from "../../../components/filters/search-form";
import Categories from "../../../components/home/categories";
import EdhersChoiceScholars from "../../../components/home/edhers-choice-scholars";
import Header from "../../../components/home/header";
import Hero from "../../../components/home/hero";
import PopularScholars from "../../../components/home/popular-scholars";

export default async function IndexPage() {
  return (
    <div className="bg-silver">
      <Hero />
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-20 lg:gap-24 pb-10">
        <section className="">
          <h1 className="header">Search Scholarship</h1>
          <div className="mt-6  md:hidden ">
            <MobileFilter />
          </div>
          <div className="mt-6 hidden md:block lg:mt-10">
            <SearchForm />
          </div>
        </section>

        <section className="">
          <Header
            header="Top Categories"
            desc="Discover opportunities tailored to your academic interests."
            link="#"
          />
          <Categories />
        </section>

        <section className="">
          <Header
            header="Most Popular Scholarships"
            desc="Explore the most in-demand fields of study chosen by students worldwide. From Business and STEM to Arts, Health, and Social Sciences – find the course that shapes your future."
            link="#"
          />
          <PopularScholars />
        </section>

        <section className="">
          <Header
            header="Edher's Choice"
            desc="Handpicked scholarships and resources selected for you by our team."
            link="#"
          />
          <EdhersChoiceScholars />
        </section>
      </section>
    </div>
  );
}
