import type { Metadata } from "next";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Elisha Blogs",
  description: "Create and view blogs",
};

function Page() {
  return <BlogList></BlogList>;
}

export default Page;
