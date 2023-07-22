'use client'

import Link from 'next/link'

export default function NavBarLink({ href, title }) {
    return (
        <Link href={href} className="font-sans-serif font-light ml-10 text-lg hover:text-[#f5739a] transition-colors">{title}</Link>
    )
};
