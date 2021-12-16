import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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

        <div suppressHydrationWarning>
          <Component {...pageProps} />
        </div>
      </BrowserRouter>
  );
};
export default App;
