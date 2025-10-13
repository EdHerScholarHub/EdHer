import { pgEnum } from "drizzle-orm/pg-core";

export const LANG_ENUM = pgEnum("lang_enum", ["en", "mm", "my"]);
