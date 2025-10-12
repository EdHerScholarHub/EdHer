"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/accordion";
import { cn } from "@repo/ui/lib/utils";

import { useFilterCountStore } from "../../store/filter-count-store";

type AccordionSelectProps = {
  data: string[];
  title: string;
  onChange: (value: string | undefined) => void;
  value: string | undefined;
};

const AccordionSelect = ({
  data,
  title,
  onChange,
  value,
}: AccordionSelectProps) => {
  const setFilterCategory = useFilterCountStore(
    state => state.setFilterCategory,
  );
  const onValueChange = (value: string) => {
    onChange(value);
    setFilterCategory(title);
  };
  return (
    <Accordion type={"single"} collapsible={true}>
      <AccordionItem value={"item-1"}>
        <AccordionTrigger
          className={"font-semibold text-black"}
          closeCompClass={"text-navy font-bold size-6"}
        >
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            {data.map(item => (
              <li
                key={item}
                onClick={() => onValueChange(item)}
                className={cn(
                  "py-2 px-4 capitalize text-navy",
                  value === item && "bg-[#dae5ee]  font-normal ",
                )}
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
        <hr />
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionSelect;
