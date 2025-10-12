"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/form";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

import type {
  FTSearchFormSchema,
} from "../../validators/form-validators";

import { redirect } from "../../i18n/navigation";
import {
  SearchFormSchema,
} from "../../validators/form-validators";
import StudyCountryFilter from "./study-country-filter";
import StudyFieldFilter from "./study-field-filter";
import StudyLevelFilter from "./study-level-filter";

const extractValidSearchParams = (input: FTSearchFormSchema) => {
  return Object.entries(input)
    .reduce((acc, curr) => {
      const [key, value] = curr;
      console.log(acc, curr);
      if (value) {
        return [...acc, `${key}=${value}`];
      }
      return acc;
    }, [] as string[])
    .join("&");
};

const SearchForm = () => {
  const form = useForm<FTSearchFormSchema>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      countryOfStudy: undefined,
      fieldOfStudy: undefined,
      name: undefined,
      studyLevel: undefined,
    },
  });
  const onSubmit = async (values: FTSearchFormSchema) => {
    const params = extractValidSearchParams(values);
    return redirect({
      href: `/search?${params}`,
      forcePrefix: false,
      locale: "",
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={
          "flex items-center justify-between gap-4 md:flex-wrap md:justify-center  lg:flex-nowrap lg:gap-6"
        }
      >
        {/* Scholarship name field */}
        <FormField
          control={form.control}
          name={"name"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"sr-only"}>Scholarship name</FormLabel>
              <FormControl>
                <div className={"relative"}>
                  <input
                    type="search"
                    name={field.name}
                    onChange={field.onChange}
                    placeholder="Search by name"
                    className="peer border-2 w-full border-muted-navy/30 p-4 rounded-xl placeholder:text-muted-navy/80"
                  />
                  <Search className="absolute top-1/2 -translate-y-1/2 right-4 peer-focus-within:hidden" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Study Level Filter */}
        <FormField
          control={form.control}
          name={"studyLevel"}
          render={({ field }) => (
            <FormItem className={"flex-1 md:max-w-[220px] lg:max-w-[unset]"}>
              <FormLabel className={"sr-only"}>Study Level</FormLabel>
              <FormControl>
                <StudyLevelFilter
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Country of Study Filter */}
        <FormField
          control={form.control}
          name={"countryOfStudy"}
          render={({ field }) => (
            <FormItem className={"flex-1 md:max-w-[220px] lg:max-w-[unset]"}>
              <FormLabel className={"sr-only"}>Country of Study</FormLabel>
              <FormControl>
                <StudyCountryFilter
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field of Study Filter */}
        <FormField
          control={form.control}
          name={"fieldOfStudy"}
          render={({ field }) => (
            <FormItem className={"flex-1 md:max-w-[220px] lg:max-w-[unset]"}>
              <FormLabel className={"sr-only"}>Field of Study</FormLabel>
              <FormControl>
                <StudyFieldFilter
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          className={
            "w-[148px] h-[56px] p-4 bg-navy text-white flex justify-center items-center rounded-sm text-md font-medium cursor-pointer disabled:bg-navy/80 disabled:cursor-not-allowed"
          }
          disabled={!form.formState.isValid}
        >
          <span>Search Now</span>
        </button>
      </form>
    </Form>
  );
};

export default SearchForm;
