import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-end space-x-4">
      <Link href="/" legacyBehavior>
        <a className={"no-underline hover:underline"}>Work</a>
      </Link>
      <Link href="/projects" legacyBehavior>
        <a className={"no-underline hover:underline"}>Projects</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={"no-underline hover:underline"}>About</a>
      </Link>
    </div>
  );
}
