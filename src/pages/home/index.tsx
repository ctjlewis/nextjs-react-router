import Link from "next/link";

export default function IndexPage() {
  return (
    <ul>
      <h1>Pages</h1>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/topics">Topics</Link>
      </li>
      <li>
        <Link href="/subdir/subdir">Subdirectory</Link>
      </li>
      <li>
        <Link href="/settings">Settings (SSR)</Link>
      </li>
    </ul>
  );
}
