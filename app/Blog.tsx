"use client";

export default function Blog({
  title,
  author,
  content,
}: {
  title: String;
  author: String;
  content: String;
}) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{content}</p>
    </div>
  );
}
