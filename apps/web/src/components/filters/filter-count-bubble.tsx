"use client";
import { cn } from "@repo/ui/lib/utils";

import { useFilterCountStore } from "../../store/filter-count-store";

const FilterCountBubble = ({ className }: { className?: string }) => {
  const filterCount = useFilterCountStore((state) => state.filterCount);
  return (
    <div
      className={cn(
        "flex items-center justify-center aspect-square bg-navy rounded-full text-white font-medium",
        className,
      )}
    >
      <span className={"sr-only"}>Filtered Category Count: {filterCount}</span>
      <span>{filterCount}</span>
    </div>
  );
};

export default FilterCountBubble;
