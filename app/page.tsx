import type { Metadata } from "next";
import BlogList from "./BlogList";
import { getBlogs } from "@/lib/api";
import { headers } from "next/headers";

async function allBlogs() {
  const headersList = headers();
  const host = headersList.get("host");
  const blogs = await getBlogs(host);
  return blogs.allBlogs;
}

export const metadata: Metadata = {
  title: "Elisha Blogs",
  description: "Create and view blogs",
};

async function Page() {
  const _BLOGS = await allBlogs();
  return <BlogList blogs={_BLOGS}></BlogList>;
}

export default Page;
