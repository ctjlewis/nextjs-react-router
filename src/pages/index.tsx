import { Navigate, Route, Routes } from "react-router-dom";
import dynamic from "next/dynamic";
import glob from "glob";

/**
 * An index page which client-side renders a page based on browser location.
 */
export default function SinglePageIndex(props: { pages: string[] }) {
  let DynamicHomepage;
  const { pages } = props;

  try {
    DynamicHomepage = dynamic(() => import("./home"));
  } catch (e) {
    throw new Error("Your SPA app must have a page defined at /home.");
  }

  const routes = pages.map(
    (page) => {
      const DynamicPage = dynamic(() => import(`./${page}`));
      return (
        <Route key={page} path={page} element={<DynamicPage />} />
      );
    }
  );

  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<DynamicHomepage />} />
      {routes}
    </Routes>
  );
}

// export default dynamic(() => Promise.resolve(SinglePageIndex));

const NEXT_INTERNAL_ROUTES = [
  "_app",
  "_document",
  "_error",
  "index"
];

export const getStaticProps = async () => {
  if (typeof window === "undefined") {
    const files = glob.sync("**/*.js", { cwd: __dirname });
    const pages =
      files
        .map((file) => file.replace(/\.js$/, ""))
        .filter(file => !NEXT_INTERNAL_ROUTES.includes(file));

    return {
      props: {
        pages
      }
    };
  }

  return {
    props: {},
  };
};