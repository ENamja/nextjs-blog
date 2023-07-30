"use client";

import React from "react";
import { useState } from "react";
import Blog from "./Blog";

function BlogPage({ params }: { params: { id: string } }) {
  const [aToZ, setAToZ] = useState(true);

  return <Blog id={params.id}></Blog>;
}

export default BlogPage;
