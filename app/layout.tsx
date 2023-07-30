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
      <body className="max-w-3xl mx-auto">
        <NavBar></NavBar>
        <div className="flex justify-center my-10">{children}</div>
      </body>
    </html>
  );
}
