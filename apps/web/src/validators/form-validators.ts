import { z } from "zod/v4";

export const SearchFormSchema = z
  .object({
    name: z.string().optional(),
    studyLevel: z.string().optional(),
    countryOfStudy: z.string().optional(),
    fieldOfStudy: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    if (
      !val.name
      && !val.studyLevel
      && !val.countryOfStudy
      && !val.fieldOfStudy
    ) {
      ctx.addIssue({
        code: "invalid_format",
        minimum: 1,
        origin: "string",
        message: "Input must be present",
        input: val.name,
        format: "includes",
      });
    }
  });

export type FTSearchFormSchema = z.infer<typeof SearchFormSchema>;
