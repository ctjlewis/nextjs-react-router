import Link from "next/link";

export default function SettingsPage({ message = "Settings" }) {
  return (
    <div>
      <p>{message}</p>
      <Link href="/">Home</Link>
    </div>
  );
}

// export const getStaticProps = () => {
//   return { props: { message: "This page is rendered on the server!" } };
// };

/**
 * Won't work with `next export`.
 */
// export const getServerSideProps = () => {
//   return { props: { message: "This page is rendered on the server!" } };
// };
