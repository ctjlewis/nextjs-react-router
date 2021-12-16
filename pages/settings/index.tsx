import Link from "next/link";
import React from "react";

export default function SettingsPage(props: { message: string }) {
  return (
    <div>
      <p>{props.message}</p>
      <Link href="/">Home</Link>
    </div>
  );
}

export const getStaticProps = () => {
  return { props: { message: "This page is rendered on the server!" } };
};

/**
 * Won't work with `next export`.
 */
// export const getServerSideProps = () => {
//   return { props: { message: "This page is rendered on the server!" } };
// };
