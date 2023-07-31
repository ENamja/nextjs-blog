"use client";

import { Button } from "@material-tailwind/react";

interface BlogProps {
  title: string;
  author: string;
}

function Blog({ title, author }: BlogProps) {
  return (
    <Button
      variant="text"
      color="white"
      className="flex flex-col px-8 py-4 my-4 mx-4 text-left hover:shadow-lg"
    >
      <span className="text-[#f1356d] font-quicksand font-bold text-lg">
        {title}
      </span>
      <span className="text-black font-quicksand font-light">
        Written by: {author}
      </span>
    </Button>
  );
}

export default Blog;
