CREATE TABLE IF NOT EXISTS "issue" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" text,
	"status" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
