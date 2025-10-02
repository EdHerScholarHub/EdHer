// import { getTranslations } from "next-intl/server";

import Categories from "../../../components/home/categories";
import EdhersChoiceScholars from "../../../components/home/edhers-choice-scholars";
import Filters from "../../../components/home/filters";
import Header from "../../../components/home/header";
import Hero from "../../../components/home/hero";
import PopularScholars from "../../../components/home/popular-scholars";
// import LocaleSelect from "../../../shared/components/locale-select";

export default async function IndexPage() {
  // const t = await getTranslations("HomePage");
  return (
    <div className="bg-silver">
      {/* <LocaleSelect />
      <h2 className={"text-green-500 text-xl font-bold"}>{t("Title")}</h2> */}
      <Hero />

      <section className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-20 lg:gap-24 pb-10">
        <section className="">
          <h1 className="header">Search Scholarship</h1>
          <div className="mt-6 lg:mt-10 ">
            <Filters />
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
