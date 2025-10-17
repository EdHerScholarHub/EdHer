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
import { Input } from "@repo/ui/components/input";
import { Textarea } from "@repo/ui/components/textarea";
import Image from "next/image";
import { useForm } from "react-hook-form";

import type { FTContactSchema } from "../../validators/form-validators";

import { contactSchema } from "../../validators/form-validators";

export default function Contact() {
  const form = useForm<FTContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: FTContactSchema) {
    // eslint-disable-next-line no-alert
    alert(`Submitted Data: ${JSON.stringify(data, null, 2)}`);
  }
  return (
    <div className="flex flex-col md:flex-row gap-2 *:basis-1/2 my-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex text-navy flex-col gap-5 [&_input]:py-6 [&_input,textarea]:border-navy [&_input,textarea]:placeholder-navy/50 [&_label]:-mb-1 md:[&_p]:text-base [&_p]:font-normal [&_p]:opacity-70">

          <FormField
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem data-invalid={fieldState.invalid}>
                <FormLabel htmlFor={field.name}>
                  Name*
                  {fieldState.invalid && <FormMessage className="inline" />}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter Your Name"
                    autoComplete="off"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem data-invalid={fieldState.invalid}>
                <FormLabel htmlFor={field.name}>
                  Enter your Email*
                  {fieldState.invalid && <FormMessage className="inline" />}
                </FormLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
              </FormItem>
            )}
          />

          <FormField
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem data-invalid={fieldState.invalid}>
                <FormLabel htmlFor={field.name}>
                  Phone Number*
                  {fieldState.invalid && <FormMessage className="inline" />}
                </FormLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your Phone Number"
                  autoComplete="off"
                />
              </FormItem>
            )}
          />

          <FormField
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem data-invalid={fieldState.invalid}>
                <FormLabel htmlFor={field.name}>
                  Enter Message*
                  {fieldState.invalid && <FormMessage className="inline" /> }
                </FormLabel>
                <Textarea
                  rows={10}
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Your Message"
                  autoComplete="off"
                  className="min-h-52 selection:bg-foreground selection:text-background"
                />
              </FormItem>
            )}
          />

          <button type="submit" role="button" className="px-4 py-2 bg-papaya rounded-md w-fit text-sm text-navy font-medium">
            Send Message Now
          </button>
        </form>
      </Form>

      <div className="px-10 hidden md:block">
        <Image src="/assets/contact-form.png" alt="Contact" width={624} height={646} className="max-h-[460px] min-h-full object-contain object-top" />
      </div>
    </div>
  );
}
