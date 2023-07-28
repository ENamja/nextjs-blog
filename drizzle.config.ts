import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.development.local",
});

if (!process.env.POSTGRES_PRISMA_URL) {
  throw new Error("POSTGRES_URL undefined");
}

export default {
  schema: "./lib/schema.ts",
  driver: "pg",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.POSTGRES_PRISMA_URL,
  },
} satisfies Config;
