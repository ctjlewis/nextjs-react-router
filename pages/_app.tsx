import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {

  if (typeof window === "undefined") return null;

  return (
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
