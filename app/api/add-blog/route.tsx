import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const author = searchParams.get("author");
  const title = searchParams.get("title");
  const content = searchParams.get("content");

  try {
    if (!author || !title || !content)
      throw new Error("title, author, and content required");
    await sql`INSERT INTO Blogs (Title, Author, Content) VALUES (${title}, ${author}, ${content});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const blogs = await sql`SELECT * FROM Blogs;`;
  return NextResponse.json({ blogs }, { status: 200 });
}
