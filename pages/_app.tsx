import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppProps } from "next/app";

const SPA = ({ Component, pageProps }: AppProps) => {
  /**
   * Whether or not the component is rendering in the DOM.
   */
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
