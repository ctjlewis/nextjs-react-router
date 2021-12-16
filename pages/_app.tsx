import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { BrowserRouter } from "react-router-dom";

/**
 * A single-page application with full next/link support.
 */
const SPA = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);
  /**
   * Whether or not the component is rendering in the browser.
   */
  useEffect(() => setMounted(true), []);
  /**
   * If the component is being rendered in the browser, it is wrapped with a
   * BrowserRouter to override link clicks.
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
