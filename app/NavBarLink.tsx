"use client";

import Link from "next/link";
import { Path } from "typescript";

function NavBarLink({ href, title }: { href: string; title: String }) {
  return (
    <Link
      href={href}
      className="font-sans-serif font-light ml-10 text-lg hover:text-[#f5739a] transition-colors"
    >
      {title}
    </Link>
  );
}

export default NavBarLink;
