DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('OPEN', 'IN_PROGRESS', 'CLOSED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "issue" ALTER COLUMN "title" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "issue" ALTER COLUMN "status" SET DATA TYPE status;--> statement-breakpoint
ALTER TABLE "issue" ALTER COLUMN "status" SET DEFAULT 'OPEN';