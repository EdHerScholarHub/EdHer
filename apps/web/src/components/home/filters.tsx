import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/components/select";
import { Filter, Search } from "lucide-react";

export default function Filters() {
  return (
    <div className="flex items-center justify-between gap-4 lg:gap-6">
      <label htmlFor="search" className="w-full relative lg:basis-2/5 text-navy">
        <input type="search" name="search" id="search" placeholder="Search by name" className="peer border-2 w-full border-muted-navy/30 p-4 rounded-xl placeholder:text-muted-navy/80" />
        <Search className="absolute top-1/2 -translate-y-1/2 right-4 peer-focus-within:hidden" />
      </label>
      <button type="button" aria-label="filter" className="border-2 border-muted-navy/30 p-4 rounded-xl md:hidden text-navy">
        <Filter />
      </button>

      <div className="[&_svg]:size-6 hidden md:flex text-navy gap-4 lg:gap-6 lg:basis-3/5 *:w-full *:rounded-xl">
        <Filter1 />
        <Filter2 />
        <Filter3 />
      </div>
    </div>

  );
}

function Filter1() {
  return (
    <Select>
      <SelectTrigger className="p-7 border-2 border-muted-navy/30 *:text-navy/60 *:font-medium">
        <SelectValue placeholder="All categories" />
      </SelectTrigger>
      <SelectContent className="text-navy bg-silver">
        <SelectItem value="category1">Category 1</SelectItem>
        <SelectItem value="category2">Category 2</SelectItem>
        <SelectItem value="category3">Category 3</SelectItem>
        <SelectItem value="category4">Category 4</SelectItem>
      </SelectContent>
    </Select>
  );
}

function Filter2() {
  return (
    <Select>
      <SelectTrigger className="p-7 border-2 border-muted-navy/30 *:text-navy/60 *:font-medium">
        <SelectValue placeholder="All Countries" />
      </SelectTrigger>
      <SelectContent className="text-navy bg-silver">
        <SelectItem value="country1">Country 1</SelectItem>
        <SelectItem value="country2">Country 2</SelectItem>
        <SelectItem value="country3">Country 3</SelectItem>
        <SelectItem value="country4">Country 4</SelectItem>
      </SelectContent>
    </Select>
  );
}

function Filter3() {
  return (
    <Select>
      <SelectTrigger className="p-7 border-2 border-muted-navy/30 *:text-navy/60 *:font-medium">
        <SelectValue placeholder="All Types" />
      </SelectTrigger>
      <SelectContent className="text-navy bg-silver">
        <SelectItem value="type1">Type 1</SelectItem>
        <SelectItem value="type2">Type 2</SelectItem>
        <SelectItem value="type3">Type 3</SelectItem>
        <SelectItem value="type4">Type 4</SelectItem>
      </SelectContent>
    </Select>
  );
}
