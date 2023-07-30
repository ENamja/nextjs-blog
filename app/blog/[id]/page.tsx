"use client";

import React from "react";
import Blog from "./Blog";

function BlogPage({ params }: { params: { id: string } }) {
  return <Blog id={params.id}></Blog>;
}

export default BlogPage;
