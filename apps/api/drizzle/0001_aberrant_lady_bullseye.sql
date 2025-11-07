CREATE TYPE "public"."lang_enum" AS ENUM('en', 'mm', 'my');--> statement-breakpoint
CREATE TABLE "scholar_detail" (
	"id" text NOT NULL,
	"lang" "lang_enum" NOT NULL,
	"country" text NOT NULL,
	"provider" text NOT NULL,
	"study_filed" text[] NOT NULL,
	"deadline" date NOT NULL,
	"benefits" text[] NOT NULL,
	"requirements" text[] NOT NULL,
	"necessary_documents" text[] NOT NULL,
	"guidelines" text[] NOT NULL,
	"footer" text NOT NULL,
	"official_link" text NOT NULL,
	"additional_link" text[],
	CONSTRAINT "scholar_detail_id_lang_pk" PRIMARY KEY("id","lang")
);
--> statement-breakpoint
DROP TABLE "test" CASCADE;