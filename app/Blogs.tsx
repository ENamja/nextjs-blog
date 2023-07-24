"use client";

import Blog from "./Blog";

const _CONTENT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const _AUTHORS = ["a", "b", "c", "d", "e", "f"];
const _TITLES = [
  "a title",
  "b title",
  "c title",
  "d title",
  "e title",
  "f title",
];

function Blogs() {
  return (
    <div className="flex flex-col">
      {Array.from({ length: _AUTHORS.length }).map((_, i) => {
        return (
          <Blog key={_TITLES[i]} title={_TITLES[i]} author={_AUTHORS[i]}></Blog>
        );
      })}
    </div>
  );
}

export default Blogs;
