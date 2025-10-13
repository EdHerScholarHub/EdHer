import { cache } from "react";

import type { FilterCategory } from "../../app/[locale]/search/page";

import { EDHERSSCHOLARS, POPULARSCHOLARS } from "../../constants";
import { searchParamsToString } from "../../util/util";
import Post from "../home/post";

type SearchResultProps = {
  category: Awaited<FilterCategory>;
};

const cachedSearchString = cache(searchParamsToString);
const SearchResult = async ({ category }: SearchResultProps) => {
  const searchString = cachedSearchString(category);
  return (
    <section>
      <p className={"mb-8 text-muted-navy"}>Search Result for {searchString}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
        {POPULARSCHOLARS.map(scholar => (
          <Post {...scholar} key={scholar.id} className={"w-full"} />
        ))}
        {EDHERSSCHOLARS.map(scholar => (
          <Post {...scholar} key={scholar.id} className={"w-full"} />
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
