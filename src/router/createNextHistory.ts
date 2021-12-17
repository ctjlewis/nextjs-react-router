import { parsePath, createMemoryHistory, MemoryHistory, To } from "history";
import NextRouter from "next/router";

export type MemoryHistoryInstance = MemoryHistory;

function fromReactRouterToNextUrl(to: To) {
  const path = typeof to === "string" ? parsePath(to) : to;
  const nextPath = {
    hash: path.hash,
    pathname: path.pathname,
    search: path.search,
  };
  return nextPath;
}

export function createNextHistory(asPath: string): MemoryHistoryInstance {
  const historyMemory = createMemoryHistory({ initialEntries: [asPath] }) as MemoryHistoryInstance;

  const enhancedHistory: MemoryHistoryInstance = {
    createHref: historyMemory.createHref,
  

    push(to, state) {
      const path = fromReactRouterToNextUrl(to);
      historyMemory.push(to, state);
      NextRouter.push(path, void 0, state);
    },

    replace(to, state) {
      const path = fromReactRouterToNextUrl(to);
      historyMemory.replace(to, state);
      NextRouter.replace(path, void 0, state);
    },

    back() {
      historyMemory.go(-1);
      NextRouter.back();
    },

    listen(listener) {
      function handleRouteChange() {
        listener({
          action: historyMemory.action,
          location: historyMemory.location,
        });
      }
      
      NextRouter.events.on("routeChangeComplete", handleRouteChange);
      NextRouter.events.on("hashChangeComplete", handleRouteChange);

      return () => {
        NextRouter.events.off("routeChangeComplete", handleRouteChange);
        NextRouter.events.off("hashChangeComplete", handleRouteChange);
      };
    },

    get index() {
      return historyMemory.index;
    },

    get action() {
      return historyMemory.action;
    },

    get location() {
      return historyMemory.location;
    },

    go() {
      throw new Error("history.go isn't supported");
    },

    forward() {
      throw new Error("history.forward isn't supported");
    },

    block() {
      throw new Error("history.block isn't supported");
    },
  };

  function handleRouteChangeFromNext(url: string) {
    const to = parsePath(url);
    historyMemory.push(to, { locale: NextRouter.locale });
  }

  NextRouter.events.on("routeChangeComplete", handleRouteChangeFromNext);
  NextRouter.events.on("hashChangeComplete", handleRouteChangeFromNext);

  return enhancedHistory;
}
