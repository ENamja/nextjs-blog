"use client";

import { Button } from "@material-tailwind/react";
import Link from "next/link";

interface BlogProps {
  title: string;
  author: string;
  id: string;
}

function Blog({ title, author, id }: BlogProps) {
  return (
    <Link className="" href={`/blog/${id}`}>
      <Button
        variant="text"
        color="white"
        className="flex flex-col w-full my-4 text-left hover:shadow-lg"
      >
        <span className="text-[#f1356d] font-quicksand font-bold text-lg">
          {title}
        </span>
        <span className="text-black font-quicksand font-light">
          Written by: {author}
        </span>
      </Button>
    </Link>
  );
}

export default Blog;
