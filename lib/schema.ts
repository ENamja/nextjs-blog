import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  PgSerial,
  PgSmallInt,
  PgText,
  PgTimestamp,
  PgVarchar,
  pgTable,
  serial,
  smallint,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export interface BlogData {
  id: PgSerial<any>;
  author: PgVarchar<any>;
  title: PgVarchar<any>;
  content: PgText<any>;
  likes: PgSmallInt<any>;
  createdAt: PgTimestamp<any>;
}

// Use drizzle to send sql queries to the DB
export const db = drizzle(sql);
// BlogTable that maps to the blogs table in the DB
export const blogTable = pgTable("blogs", {
  id: serial("id").primaryKey(),
  author: varchar("author", { length: 256 }).notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  content: text("content").notNull(),
  likes: smallint("likes").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
