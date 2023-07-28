import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

// Use drizzle to send sql queries to the DB
export const db = drizzle(sql);
// BlogTable that maps to the blogs table in the DB
export const BlogTable = pgTable("blogs", {
  id: serial("id").primaryKey(),
  author: varchar("author", { length: 256 }).notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const getBlogTable = async () => {
  const selectResult = await db.select().from(BlogTable);
  console.log("Results", selectResult);
};
