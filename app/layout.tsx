'use client'

import './globals.css'
import NavBar from './NavBar'

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="flex flex-col">
        <NavBar></NavBar>
        <div className="flex items-center my-10 mx-auto max-w-4xl ">
          {children}
        </div>
      </body>
    </html>
  );
}
