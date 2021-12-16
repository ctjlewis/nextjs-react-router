import { Link } from "react-router-dom";
import NextLink from "next/link";

export default function IndexPage() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <NextLink href="/settings">Settings (SSR)</NextLink>
      </li>
    </ul>
  );
}
