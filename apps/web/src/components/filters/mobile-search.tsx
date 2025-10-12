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

import type { FTSearchFormSchema } from "../../validators/form-validators";

import { redirect } from "../../i18n/navigation";
import { extractValidSearchParams } from "../../util/util";
import { SearchFormSchema } from "../../validators/form-validators";
import MobileFilter from "./mobile-filter";
import StudyCountryFilter from "./study-country-filter";
import StudyFieldFilter from "./study-field-filter";
import StudyLevelFilter from "./study-level-filter";

const MobileSearch = () => {
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={"flex items-center gap-4"}>
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

          <MobileFilter>
            {/* Study Level Filter */}
            <FormField
              control={form.control}
              name={"studyLevel"}
              render={({ field }) => (
                <FormItem
                  className={"flex-1 md:max-w-[220px] lg:max-w-[unset]"}
                >
                  <FormLabel className={"sr-only"}>Study Level</FormLabel>
                  <FormControl>
                    <StudyLevelFilter
                      mode={"accordion"}
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
                <FormItem
                  className={"flex-1 md:max-w-[220px] lg:max-w-[unset]"}
                >
                  <FormLabel className={"sr-only"}>Country of Study</FormLabel>
                  <FormControl>
                    <StudyCountryFilter
                      mode={"accordion"}
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
                <FormItem
                  className={"flex-1 md:max-w-[220px] lg:max-w-[unset]"}
                >
                  <FormLabel className={"sr-only"}>Field of Study</FormLabel>
                  <FormControl>
                    <StudyFieldFilter
                      mode={"accordion"}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </MobileFilter>
        </div>
        <button
          type={"submit"}
          className={
            "w-full h-[56px] mt-4 p-4 bg-navy text-white flex justify-center items-center rounded-sm text-md font-medium cursor-pointer disabled:bg-navy/80 disabled:cursor-not-allowed"
          }
          disabled={!form.formState.isValid}
        >
          <span>Search Now</span>
        </button>
      </form>
    </Form>
  );
};

export default MobileSearch;
