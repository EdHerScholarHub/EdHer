import { Suspense } from "react";

import MobileSearch from "../../../components/filters/mobile-search";
import SearchForm from "../../../components/filters/search-form";
import SearchLoading from "../../../components/search/search-loading";
import SearchResult from "../../../components/search/search-result";

export type FilterCategory = Promise<{
  name?: string;
  studyLevel?: string;
  countryOfStudy: string;
  fieldOfStudy: string;
}>;
type SearchPageProps = {
  searchParams: FilterCategory;
};
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10 pb-10">
      <section className="">
        <h1 className="header">Search Scholarship</h1>
        <div className="mt-6  md:hidden ">
          <MobileSearch defaultValues={params} />
        </div>
        <div className="mt-6 hidden md:block lg:mt-10">
          <SearchForm defaultValues={params} />
        </div>
      </section>
      <Suspense fallback={<SearchLoading />}>
        <SearchResult category={params} />
      </Suspense>
    </div>
  );
};

export default SearchPage;
