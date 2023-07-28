import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const author = searchParams.get("author");
  const title = searchParams.get("title");

  try {
    if (!author || !title) {
      throw new Error("author and title required");
    }
    await sql`DELETE FROM Blogs WHERE author = ${author} AND title = ${title};`;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json(
        { error: "error is not type Error" },
        { status: 500 }
      );
    }
  }

  const blogs = await sql`SELECT * FROM Blogs;`;
  return NextResponse.json({ blogs }, { status: 200 });
}
