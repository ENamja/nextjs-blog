"use client";

import Blogs from "./Blogs";
import OrderButton from "./OrderButton";
import { useState } from "react";

function BlogList() {
  const [aToZ, setAToZ] = useState(true);

  return (
    <div className="max-w-5xl w-full flex flex-col">
      <div className="flex justify-between px-4 py-3">
        <h1 className="font-quicksand font-bold text-xl">Blogs:</h1>
        <OrderButton aToZ={aToZ} setAToZ={setAToZ}></OrderButton>
      </div>
      <Blogs></Blogs>
    </div>
  );
}

export default BlogList;
