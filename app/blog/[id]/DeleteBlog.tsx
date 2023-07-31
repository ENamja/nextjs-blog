"use client";

import { Button } from "@material-tailwind/react";
import Link from "next/link";

function DeleteBlog({ id }: { id: string }) {
  return (
    <Link className="flex justify-center" href={`/api/delete-blog?id=${id}`}>
      <Button className="" variant="text" color="red" ripple={true}>
        Delete Blog
      </Button>
    </Link>
  );
}

export default DeleteBlog;
