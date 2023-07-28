import { sql } from "@vercel/postgres";
import { db } from "@/lib/schema";
import { BlogTable } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const author = searchParams.get("author");
  const title = searchParams.get("title");
  const content = searchParams.get("content");

  try {
    if (!author || !title || !content)
      throw new Error("title, author, and content required");
    await db
      .insert(BlogTable)
      .values({ author: author, title: title, content: content });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const blogs = await db.select().from(BlogTable);
  return NextResponse.json({ blogs }, { status: 200 });
}
