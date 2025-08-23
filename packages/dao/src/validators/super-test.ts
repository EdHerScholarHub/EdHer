import { z } from "zod/v4";

export const superTest = z.object({
  name: z.string(),
});
