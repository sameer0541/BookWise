import { defineConfig } from "drizzle-kit";
import { config } from "./lib/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in the .env file");
}

export default defineConfig({
  schema: ["./database/schema/users.ts", "./database/schema/book.ts"], // Your schema file path
  out: "./drizzle", // Your migrations folder
  dialect: "postgresql",
  dbCredentials: {
    url: config.database.url,
  },
});
