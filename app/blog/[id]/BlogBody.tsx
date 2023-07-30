"use client";

function BlogBody({ content }: { content: string }) {
  return <div className="text-left max-w-2xl mx-auto my-4">{content}</div>;
}

export default BlogBody;
