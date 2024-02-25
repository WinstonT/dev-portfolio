import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-end space-x-4">
      <Link href="/">Work</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
