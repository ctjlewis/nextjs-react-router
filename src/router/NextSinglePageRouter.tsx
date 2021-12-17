import { useReducer, useRef } from "react";
import { MemoryHistoryInstance } from "./createNextHistory";
import { Router } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Update } from "history";
import { createNextHistory } from "./createNextHistory";

export interface NextSinglePageRouterProps {
  asPath: string
}

export function NextSinglePageRouter({ children, asPath }: React.PropsWithChildren<NextSinglePageRouterProps>) {
  const historyRef = useRef<MemoryHistoryInstance>();

  if (historyRef.current == null) {
    historyRef.current = createNextHistory(asPath);
    historyRef.current.listen(update => dispatch(update));
  }

  const history = historyRef.current;

  const [state, dispatch] = useReducer(
    (_: Update, action: Update) => action,
    {
      action: history.action,
      location: history.location,
    }
  );

  if (process.browser) {
    return (
      <Router location={state.location} navigator={history}>
        {children}
      </Router>
    );
  } else {
    return <StaticRouter location={asPath}>{children}</StaticRouter>;
  }
}