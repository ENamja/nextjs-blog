"use client";

import Blogs from "./Blogs";
import OrderButton from "./OrderButton";
import { useState } from "react";
import { BlogData } from "@/lib/schema";

function BlogList(blogs: { blogs: Array<BlogData> }) {
  const [aToZ, setAToZ] = useState(true);

  return (
    <div className="max-w-5xl w-full flex flex-col">
      <div className="flex justify-between px-4 py-3">
        <h1 className="font-quicksand font-bold text-xl">Blogs:</h1>
        <OrderButton aToZ={aToZ} setAToZ={setAToZ}></OrderButton>
      </div>
      <Blogs blogs={blogs.blogs} aToZ={aToZ}></Blogs>
    </div>
  );
}

export default BlogList;
