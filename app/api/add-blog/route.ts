import { db } from "@/lib/schema";
import { blogTable } from "@/lib/schema";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const author = searchParams.get("author");
  const title = searchParams.get("title");
  const content = searchParams.get("content");

  try {
    if (!author || !title || !content)
      throw new Error("title, author, and content required");
    const insertedBlog = await db
      .insert(blogTable)
      .values({ author: author, title: title, content: content })
      .returning();
    return NextResponse.redirect(
      `http://localhost:3000/blog/${insertedBlog[0].id}`
    );
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
}
