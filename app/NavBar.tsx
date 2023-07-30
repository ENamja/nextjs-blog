"use client";

import NavBarLink from "./NavBarLink";

function NavBar() {
  return (
    <div className="flex justify-center p-4 items-center">
      <h1 className="font-quicksand font-bold text-[#f1356d] text-2xl mr-auto">
        BlogSite
      </h1>
      <div>
        <NavBarLink href="/" title="Home"></NavBarLink>
        <NavBarLink href="/create" title="Create Blog"></NavBarLink>
      </div>
    </div>
  );
}

export default NavBar;
