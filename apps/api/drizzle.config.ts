import type { Config } from "drizzle-kit";

import { config } from "dotenv";

config({ path: ".env.local" });

export default {
  schema: ["./src/db/enum.ts", "./src/db/schema.ts"],
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL!, // from Neon dashboard
  },
} satisfies Config;
