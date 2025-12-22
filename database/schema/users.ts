import { numeric, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const ROLE_ENUM = pgEnum("userRole", ["USER", "ADMIN"]);

export const STATUS_ENUM = pgEnum("status", [
  "PENDING",
  "APPROVED",
  "REJECTED",
]);

export const Users = pgTable("users", {
  id: uuid("id").notNull().defaultRandom().primaryKey().unique(),
  fullName: text("fullName").notNull(),
  email: text("email").notNull().unique(),
  universityId: text("universityId").notNull().default("0"),
  universityCard: text("universityCard").notNull().unique(),
  password: text("password").notNull(),
  userRole: ROLE_ENUM("userRole").default("USER"),
  status: STATUS_ENUM("status").default("PENDING"),
});
