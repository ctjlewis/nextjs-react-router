import NextLink from "next/link";
import React from "react";

export default function App(props: { message: string }) {
  return (
    <div>
      <p>{props.message}</p>
      <NextLink href="/">Home</NextLink>
    </div>
  );
}

export const getServerSideProps = () => {
  return { props: { message: "This page is rendered on the server!" } };
};
