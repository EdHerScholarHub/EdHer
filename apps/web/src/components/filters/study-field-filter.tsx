"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";

import AccordionSelect from "./accordion-select";

type StudyFieldFilterProps = {
  mode?: "accordion" | "select";
  value: string | undefined;
  onChange: (value: string | undefined) => void;
};

// Later this will be replaced with dynamic data fetched from database
const dummyData = ["Level 1", "Level 2", "Level 3", "Level 4"];

const StudyFieldFilter = ({
  mode = "select",
  value,
  onChange,
}: StudyFieldFilterProps) => {
  if (mode === "accordion") {
    return (
      <AccordionSelect
        data={dummyData}
        title={"Study Field"}
        onChange={onChange}
        value={value}
      />
    );
  }
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full  p-7 border-2 border-muted-navy/30 *:text-navy/60 *:font-medium">
        <SelectValue placeholder="Study Field" className={"w-full"} />
      </SelectTrigger>
      <SelectContent className="text-navy bg-silver">
        <SelectItem value="country1">Level 1</SelectItem>
        <SelectItem value="country2">Level 2</SelectItem>
        <SelectItem value="country3">Level 3</SelectItem>
        <SelectItem value="country4">Level 4</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default StudyFieldFilter;
