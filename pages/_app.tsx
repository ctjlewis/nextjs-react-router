import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { BrowserRouter } from "react-router-dom";

/**
 * A single-page application with full next/link support.
 */
const SPA = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);
  /**
   * On the first render, mark the component as mounted.
   */
  useEffect(() => setMounted(true), []);
  /**
   * If the component is mounted, it is wrapped with a BrowserRouter and passed
   * the given routes.
   */
  return (
    mounted &&
      <BrowserRouter>
        {/* Render the given component. */}
        <Component {...pageProps} />
      </BrowserRouter>
  );
};

export default SPA;
