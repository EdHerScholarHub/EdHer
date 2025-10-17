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

export const contactSchema = z.object({
  name: z.string().nonempty("Name is required!"),
  email: z.email({ error: iss => !iss.input ? "Email is required!" : "Invalid Email" }),
  phone: z.string().nonempty("Phone Number is required!").regex(/^\+?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4,6}$/, "Invalid Phone Number"),
  message: z.string().nonempty("Message is required!").min(8, "at least 8 chars").max(1024, "maximum 1024 chars"),
});

export type FTContactSchema = z.infer<typeof contactSchema>;
