import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createElement, useEffect, useState } from "react";
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
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/topics">
            <h1>Topics</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>

        {/* Render the given component. */}
        <Component {...pageProps} />
      </BrowserRouter>
  );
};
export default SPA;
