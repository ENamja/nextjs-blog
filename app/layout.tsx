"use client";

import React from "react";
import "./globals.css";
import NavBar from "./NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="flex flex-col">
        <NavBar></NavBar>
        <div className="flex justify-center my-10">{children}</div>
      </body>
    </html>
  );
}
