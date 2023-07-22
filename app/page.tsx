import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elisha Blogs',
  description: 'Create and view blogs',
}

export default function Page() {
  return (
    <h1 className="font-quicksand text-xl text-[#f1356d] mr-auto">Blogs:</h1>
  )
}