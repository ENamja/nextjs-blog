"use client";

import { Button } from "@material-tailwind/react";
import Link from "next/link";

interface BlogProps {
  title: string;
  author: string;
  id: string;
  content: string;
}

function Blog({ title, author, id, content }: BlogProps) {
  return (
    <Link href={`/blog/${id}`}>
      <Button
        variant="text"
        color="white"
        className="flex flex-col my-4 w-full text-left hover:shadow-lg"
      >
        <span className="text-[#f1356d] font-quicksand font-bold text-lg">
          {title}
        </span>
        <span className="text-black font-quicksand font-light">
          Written by: <span className="text-[#f1356d]">{author}</span>
        </span>
        <span className="max-h-8 pt-4 text-gray-500 font-quicksand font-semibold overflow-hidden">
          {content}
        </span>
      </Button>
    </Link>
  );
}

export default Blog;
