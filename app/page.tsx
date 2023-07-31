import type { Metadata } from "next";
import BlogList from "./BlogList";
import { getBlogs } from "@/lib/api";

async function allBlogs() {
  const blogs = await getBlogs();
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
