import type { Metadata } from "next";
import Blogs from "./Blogs";

export const metadata: Metadata = {
  title: "Elisha Blogs",
  description: "Create and view blogs",
};

function Page() {
  return (
    <div className="max-w-5xl w-full flex flex-col">
      <h1 className="font-quicksand font-bold text-xl pl-4 py-3 pr-auto">
        Blogs:
      </h1>
      <Blogs></Blogs>
    </div>
  );
}

export default Page;
