import { db, blogTable } from "@/lib/schema";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const allBlogs = await db.select().from(blogTable);
    revalidateTag("blogs");
    return NextResponse.json({ allBlogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
