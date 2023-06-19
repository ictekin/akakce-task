import { cssBundleHref } from "@remix-run/css-bundle";

import theme from "slick-carousel/slick/slick-theme.css";
import deneme from "slick-carousel/slick/slick.css";

export const links = () => {
  return [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
    { rel: "stylesheet", href: theme },
    { rel: "stylesheet", href: deneme },
  ];
};

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <Provider store={store}>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </Provider>
    </html>
  );
}
