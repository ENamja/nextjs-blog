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
    await db.delete(blogTable).where(eq(blogTable.id, Number(id)));
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
  return NextResponse.redirect(`http://localhost:3000`);
}
