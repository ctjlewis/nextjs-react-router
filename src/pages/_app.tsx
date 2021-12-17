import { AppProps } from "next/app";
import { NextSinglePageRouter } from "../router/NextSinglePageRouter";

/**
 * Wrap the entire application in a single page router that integrates
 * next/link.
 */
export default function SPA({ Component, pageProps, router }: AppProps) {
  return (
    <NextSinglePageRouter asPath={router.asPath}>
      <Component {...pageProps} />
    </NextSinglePageRouter>
  );
}