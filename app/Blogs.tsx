import Blog from "./Blog";
import { BlogData } from "@/lib/schema";

interface BlogsProps {
  blogs: Array<BlogData>;
  aToZ: boolean;
}

function Blogs({ blogs, aToZ }: BlogsProps) {
  blogs.sort((a: BlogData, b: BlogData) => {
    let aTitle = a.title;
    let bTitle = b.title;

    if (aTitle < bTitle) {
      return aToZ ? -1 : 1;
    } else if (aTitle > bTitle) {
      return aToZ ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="flex flex-col">
      {Array.from({ length: blogs.length }).map((_, i) => {
        return (
          <Blog
            key={String(blogs[i].id)}
            title={String(blogs[i].title)}
            author={String(blogs[i].author)}
          ></Blog>
        );
      })}
    </div>
  );
}

export default Blogs;
