import { numeric, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const Book = pgTable("book", {
  id: uuid("id").primaryKey().notNull(),
  title: text("title").notNull(),
  author: text("author").notNull().default("unknown"),
  genre: text("genre").default("Misc"),
  rating: numeric("rating"),
  total_copies: numeric("total_copies"),
  available_copies: numeric("available_copies"),
  description: text("description"),
  color: text("color"),
  cover: text("cover"),
  video: text("video"),
  summary: text("summary"),
});
