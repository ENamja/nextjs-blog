import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/retrieve-blog?id=${id}`);
  return res.json();
}

async function BlogPage({ params }: { params: { id: string } }) {
  const blogData = await getData(params.id);
  const { author, title, content, likes } = blogData.selectedBlog[0];

  return (
    <div className="max-w-3xl w-full flex flex-col">
      <BlogHeader author={author} title={title} likes={likes}></BlogHeader>
      <BlogBody content={content}></BlogBody>
    </div>
  );
}

export default BlogPage;
