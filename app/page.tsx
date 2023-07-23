import type { Metadata } from "next";
import Blogs from "./Blogs";

export const metadata: Metadata = {
  title: "Elisha Blogs",
  description: "Create and view blogs",
};

export default function Page() {
  return (
    <div className="max-w-5xl border-solid border-black border-2">
      <h1 className="font-quicksand font-bold text-xl text-[#f1356d] mr-auto">
        Blogs:
      </h1>
      <Blogs></Blogs>
    </div>
  );
}
