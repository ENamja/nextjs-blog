import { db, blogTable } from "@/lib/schema";
import { revalidatePath } from "next/cache";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const allBlogs = await db.select().from(blogTable);
    const path = request.nextUrl.searchParams.get("path") || "/";
    revalidatePath(path);
    return NextResponse.json({ allBlogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
