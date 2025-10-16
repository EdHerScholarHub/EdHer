"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@repo/ui/components/field";
import { Input } from "@repo/ui/components/input";
import { Textarea } from "@repo/ui/components/textarea";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

export default function Contact() {
  const contactSchema = z.object({
    name: z.string().nonempty("Name is required!"),
    email: z.email({ error: iss => !iss.input ? "Email is required!" : "Invalid Email" }),
    phone: z.string().nonempty("Phone Number is required!").regex(/^\+?\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4,6}$/, "Invalid Phone Number"),
    message: z.string().nonempty("Message is required!").min(8, "at least 8 chars").max(1024, "maximum 1024 chars"),
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    // eslint-disable-next-line no-alert
    alert(`Submitted Data: ${JSON.stringify(data, null, 2)}`);
  }
  return (
    <div className="flex flex-col md:flex-row gap-2 *:basis-1/2 my-4">
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex text-navy flex-col gap-5 [&_input]:py-6 [&_input,textarea]:border-navy [&_input,textarea]:placeholder-navy/50 [&_label]:-mb-2 md:[&_label]:text-base ">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Name
                {fieldState.invalid
                  && (
                    <span>
                      *<FieldError className="inline" errors={[fieldState.error]} />
                    </span>
                  )}
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Name"
                autoComplete="off"
              />
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Enter your Email
                {fieldState.invalid
                  && (
                    <span>
                      *<FieldError className="inline" errors={[fieldState.error]} />
                    </span>
                  )}
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Email"
                autoComplete="off"
              />
            </Field>
          )}
        />
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Phone Number
                {fieldState.invalid
                  && (
                    <span>
                      *<FieldError className="inline" errors={[fieldState.error]} />
                    </span>
                  )}
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Phone Number"
                autoComplete="off"
              />
            </Field>
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Enter Message
                {fieldState.invalid
                  && (
                    <span>
                      *<FieldError className="inline" errors={[fieldState.error]} />
                    </span>
                  )}
              </FieldLabel>
              <Textarea
                rows={10}
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Message"
                autoComplete="off"
                className="min-h-52 selection:bg-foreground selection:text-background"
              />
            </Field>
          )}
        />
        <button type="submit" role="button" className="px-4 py-2 bg-papaya rounded-md w-fit text-sm text-navy font-medium">
          Send Message Now
        </button>
      </form>

      <div className="px-10 hidden md:block">
        <Image src="/assets/contact-form.png" alt="Contact" width={624} height={646} className="max-h-[460px] min-h-full object-contain object-top" />
      </div>
    </div>
  );
}
