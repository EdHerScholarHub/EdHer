import { z } from "zod/v4";

import { VOLUNTEERPOSITION } from "../constants";

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
  name: z.string().min(1, { message: "Name is required!" }),
  email: z
    .email()
    .min(1, { message: "Email is required!" }),
  phone: z
    .string()
    .min(1, { message: "Phone Number is required!" })
    .regex(/^\+?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4,6}$/, {
      message: "Invalid Phone Number",
    }),
  message: z
    .string()
    .min(8, { message: "At least 8 characters" })
    .max(1024, { message: "Maximum 1024 characters" }),
});

export type FTContactSchema = z.infer<typeof contactSchema>;

export const joinVolunteerSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  email: z
    .email()
    .min(1, { message: "Email is required!" }),
  phone: z
    .string()
    .min(1, { message: "Phone Number is required!" })
    .regex(/^\+?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4,6}$/, {
      message: "Invalid Phone Number",
    }),
  position: z.enum(VOLUNTEERPOSITION, { error: "Choose a position" }),
  message: z
    .string()
    .min(8, { message: "At least 8 characters" })
    .max(1024, { message: "Maximum 1024 characters" }),
});

export type FTJoinVolunteerSchema = z.infer<typeof joinVolunteerSchema>;
