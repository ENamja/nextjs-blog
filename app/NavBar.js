'use client'

import NavBarLink from './NavBarLink.js'

export default function NavBar() {
    return (
        <div className="flex justify-center max-w-2xl mx-auto p-5 items-center">
            <h1 className="font-quicksand font-bold text-[#f1356d] text-2xl mr-32">Elisha Blogs</h1>
            <div>
                <NavBarLink href="/" title="Home"></NavBarLink>
                <NavBarLink href="/create" title="Create Blog"></NavBarLink>
            </div>
        </div>
    )
};
