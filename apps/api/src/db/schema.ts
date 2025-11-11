import type { InferSelectModel } from "drizzle-orm";

import { date, pgTable, primaryKey, text } from "drizzle-orm/pg-core";

import { LANG_ENUM } from "./enum";

export const scholarDetail = pgTable(
  "scholar_detail",
  {
    id: text("id").notNull(),
    name: text("name").notNull(),
    lang: LANG_ENUM("lang").notNull(),
    country: text("country").notNull(),
    provider: text("provider").notNull(),
    studyLevel: text("study_level").array().notNull(),
    deadline: date("deadline").notNull(),
    benefits: text("benefits").array().notNull(),
    requirements: text("requirements").array().notNull(),
    necessaryDocuments: text("necessary_documents").array().notNull(),
    guidelines: text("guidelines").array().notNull(),
    additionalInfo: text("footer").notNull(),
    officialLink: text("official_link").notNull(),
    additionalLink: text("additional_link").array(),
  },
  table => [primaryKey({ columns: [table.id, table.lang] })],
);

export type TScholarDetail = InferSelectModel<typeof scholarDetail>;
