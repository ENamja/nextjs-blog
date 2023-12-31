"use client";

import { Button } from "@material-tailwind/react";

interface BlogHeaderProps {
  author: string;
  title: string;
  likes: number;
}

function BlogHeader({ author, title, likes }: BlogHeaderProps) {
  return (
    <div className="flex justify-between items-center font-quicksand p-4">
      <div className="flex flex-col">
        <div className="text-black text-2xl font-bold mb-2">{title}</div>
        <div className="text-black">
          Written by: <span className="text-[#f1356d]">{author}</span>
        </div>
      </div>
      <div>
        <div className="mb-2 text-lg font-light">
          <span>{likes}</span> Likes ❤️
        </div>
        <Button variant="text" color="gray" size="sm">
          Like 👍
        </Button>
      </div>
    </div>
  );
}

export default BlogHeader;
