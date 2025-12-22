CREATE TYPE "public"."userRole" AS ENUM('USER', 'ADMIN');--> statement-breakpoint
CREATE TYPE "public"."status" AS ENUM('PENDING', 'APPROVED', 'REJECTED');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fullName" text NOT NULL,
	"email" text NOT NULL,
	"universityId" text DEFAULT '0' NOT NULL,
	"universityCard" text NOT NULL,
	"password" text NOT NULL,
	"userRole" "userRole" DEFAULT 'USER',
	"status" "status" DEFAULT 'PENDING',
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_universityCard_unique" UNIQUE("universityCard")
);
--> statement-breakpoint
CREATE TABLE "book" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"author" text DEFAULT 'unknown' NOT NULL,
	"genre" text DEFAULT 'Misc',
	"rating" numeric,
	"total_copies" numeric,
	"available_copies" numeric,
	"description" text,
	"color" text,
	"cover" text,
	"video" text,
	"summary" text
);
