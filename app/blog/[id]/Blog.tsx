import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
import { getBlog } from "@/lib/api";

async function Blog({ id }: { id: string }) {
  const blogData = await getBlog(id);
  const { author, title, content, likes } = blogData.selectedBlog[0];

  return (
    <div className="max-w-3xl w-full">
      <BlogHeader author={author} title={title} likes={likes}></BlogHeader>
      <BlogBody content={content}></BlogBody>
    </div>
  );
}

export default Blog;
