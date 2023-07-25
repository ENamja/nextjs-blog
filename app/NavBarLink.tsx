"use client";

import Link from "next/link";

interface NavBarLinkProps {
  href: string;
  title: string;
}

function NavBarLink({ href, title }: NavBarLinkProps) {
  return (
    <Link
      href={href}
      className="font-quicksand font-light ml-10 text-lg hover:text-[#f5739a] transition-colors"
    >
      {title}
    </Link>
  );
}

export default NavBarLink;
