"use client";

import { Ripple, initTE } from "tw-elements";

initTE({ Ripple });

interface BlogProps {
  title: string;
  author: string;
}

function Blog({ title, author }: BlogProps) {
  return (
    <button
      //   data-ripple-dark="true"
      //   className="bg-black px-8 py-4 my-4 mx-4 text-left hover:shadow-lg hover:transition-shadow active:shadow-none disabled:shadow-none"
      className="middle none center mr-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <div className="text-[#f1356d] font-quicksand font-bold text-lg">
        {title}
      </div>
      <div className="font-sans-serif font-light">Written by: {author}</div>
    </button>
  );
}

export default Blog;
