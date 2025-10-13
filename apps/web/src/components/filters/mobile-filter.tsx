import type { ReactNode } from "react";

import { Button } from "@repo/ui/components/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/sheet";
import { Filter } from "lucide-react";

import FilterCountBubble from "./filter-count-bubble";

// This is the header component for sheet header
const Header = () => {
  return (
    <div className={"flex items-center gap-x-3"}>
      <h3 className={"text-xl font-bold text-navy"}>Filter</h3>
      <FilterCountBubble className={"size-6"} />
    </div>
  );
};

const MobileFilter = ({ children }: { children: ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild={true}>
        <button
          type="button"
          aria-label="filter"
          className="relative border-2 border-muted-navy/30 p-4 rounded-xl md:hidden text-navy"
        >
          <Filter />
          <FilterCountBubble
            className={
              "absolute right-0 top-0 size-6 -translate-y-1/2 translate-x-1/4"
            }
          />
        </button>
      </SheetTrigger>
      <SheetContent
        className={"px-4 py-6 rounded-sm"}
        side={"bottom"}
        headerComponent={<Header />}
      >
        <SheetHeader className={"sr-only"}>
          <SheetTitle>Filter Sheet For MobileView</SheetTitle>
          <SheetDescription>
            This component is to used to filter the desired scholarship by user
          </SheetDescription>
        </SheetHeader>
        <div className={"mt-6"}>{children}</div>
        <SheetClose asChild={true}>
          <Button
            type={"button"}
            className={
              "my-6 flex justify-center items-center py-4 bg-navy text-white font-semibold"
            }
          >
            <span>Apply Filter</span>
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilter;
