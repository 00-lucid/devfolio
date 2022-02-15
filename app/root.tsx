import styles from "./styles/app.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import TopBar from "./components/TopBar";

export const meta: MetaFunction = () => {
  return { title: "Devfolio" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="text-main-black flex justify-center">
        <div className="max-w-screen-lg w-full">
          <TopBar />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </div>
      </body>
    </html>
  );
}
