import { db } from "@/lib/schema";
import { blogTable } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    if (!id) {
      throw new Error("id required");
    } else if (Number.isNaN(Number(id))) {
      throw new Error("id must be integer");
    }

    const selectedBlog = await db
      .select()
      .from(blogTable)
      .where(eq(blogTable.id, Number(id)));
    if (selectedBlog.length == 0) {
      throw new Error("no blog with given id");
    }
    return NextResponse.json({ selectedBlog }, { status: 200 });
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
