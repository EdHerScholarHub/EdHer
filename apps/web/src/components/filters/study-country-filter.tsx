"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";

type StudyCountryFilterProps = {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
};

const StudyCountryFilter = ({ value, onChange }: StudyCountryFilterProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full  p-7 border-2 border-muted-navy/30 *:text-navy/60 *:font-medium">
        <SelectValue placeholder="Country of Study" className={"w-full"} />
      </SelectTrigger>
      <SelectContent className="text-navy bg-silver">
        <SelectItem value="country1">Country 1</SelectItem>
        <SelectItem value="country2">Country 2</SelectItem>
        <SelectItem value="country3">Country 3</SelectItem>
        <SelectItem value="country4">Country 4</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default StudyCountryFilter;
