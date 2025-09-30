import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "my", "mm"],
  defaultLocale: "en",
});
