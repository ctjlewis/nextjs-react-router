import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { BrowserRouter } from "react-router-dom";

/**
 * A single-page application with full next/link support.
 */
const SPA = ({ Component, pageProps }: AppProps) => {
  /**
   * Mark the component as mounted once it has rendered in the browser.
   */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  /**
   * If the component is being rendered in the browser, it is wrapped with a
   * BrowserRouter to override link clicks.
   */
  return (
    mounted &&
      <BrowserRouter>
        <Component {...pageProps} />
      </BrowserRouter>
  );
};

export default SPA;
