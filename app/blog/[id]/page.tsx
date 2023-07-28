"use client";

import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";

function BlogPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl w-full flex flex-col">
      Hello this is the blog with an id of {params.id}
    </div>
  );
}

export default BlogPage;
