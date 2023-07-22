'use client'

import Blog from './Blog.js'

const _CONTENT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const _AUTHORS = ['a', 'b', 'c', 'd', 'e', 'f'];
const _TITLES = ['a title', 'b title', 'c title', 'd title', 'e title', 'f title'];

export default function Blogs() {
    return (
        <div>
          {
            Array.from({ length: _AUTHORS.length }).map((_, i) => {
              <Blog title={_TITLES[i]} author={_AUTHORS[i]} content={_CONTENT}></Blog>
            })
          }
        </div>
    )
};
