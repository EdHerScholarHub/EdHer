"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";

import AccordionSelect from "./accordion-select";

type StudyLevelFilterProps = {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  mode?: "accordion" | "select";
};

// Later this will be replaced with dynamic data from database

const dummyData = ["Level 1", "Level 2", "Level 3", "Level 4"];

const StudyLevelFilter = ({
  mode = "select",
  value,
  onChange,
}: StudyLevelFilterProps) => {
  if (mode === "accordion") {
    return (
      <AccordionSelect
        data={dummyData}
        title={"Study Level"}
        onChange={onChange}
        value={value}
      />
    );
  }

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full p-7 border-2 border-muted-navy/30 *:text-navy/60 *:font-medium">
        <SelectValue placeholder="Study Level" className={"w-full"} />
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

export default StudyLevelFilter;
