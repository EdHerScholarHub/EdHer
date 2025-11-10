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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import { Textarea } from "@repo/ui/components/textarea";
import Image from "next/image";
import { useForm } from "react-hook-form";

import type { FTJoinVolunteerSchema } from "../../validators/form-validators";

import { VOLUNTEERPOSITION } from "../../constants";
import { joinVolunteerSchema } from "../../validators/form-validators";

export default function JoinVolunteer() {
  const form = useForm<FTJoinVolunteerSchema>({
    resolver: zodResolver(joinVolunteerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: undefined,
      message: "",
    },
  });

  function onSubmit(data: FTJoinVolunteerSchema) {
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
            name="position"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem data-invalid={fieldState.invalid}>
                <FormLabel htmlFor={field.name}>
                  Choose Position That Want To Work*
                  {fieldState.invalid && <FormMessage className="inline" />}
                </FormLabel>

                <Select
                  {...field}
                  onValueChange={field.onChange}
                  name={field.name}
                  value={field.value}
                >
                  <SelectTrigger className="w-full border border-navy *:[svg]:!text-navy !h-12 text-base text-navy placeholder:!text-red-500 data-[placeholder]:!text-navy/50">
                    <SelectValue placeholder="Choose a position" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      VOLUNTEERPOSITION.map(position => (
                        <SelectItem value={position} key={position}>
                          {position}
                        </SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>

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

          <button type="submit" role="button" className="px-4 py-2 md:py-3 bg-papaya rounded-xs w-fit text-sm text-navy font-medium">
            Apply Now
          </button>
        </form>
      </Form>

      <div className="py-10 px-20 hidden md:block relative max-h-[560px]">
        <div className="absolute left-20 top-10 right-20 bottom-10 translate-x-5 -translate-y-5 rounded-xl border-2 border-papaya bg-white/20 z-[0]" />
        <Image src="/assets/get-involve-join-volunteer.jpg" alt="join volunteer" width={624} height={646} className="max-h-[460px] min-h-full object-cover object-top rounded-xl z-[1] relative" />
        <div className="absolute left-20 top-10 right-20 bottom-10 -translate-x-5 translate-y-5 rounded-xl border-2 border-papaya bg-white/20 z-[2]" />
      </div>
    </div>
  );
}
