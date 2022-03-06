import styles from "./styles/app.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import TopBar from "./components/TopBar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { getUser } from "./util/session.server";

export const meta: MetaFunction = () => {
  return { title: "Devfolio" };
};

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  const data: LoaderData = {
    user,
  };

  return data;
};

export default function App() {
  const data = useLoaderData<LoaderData>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        className={`text-black flex justify-center h-full ${"bg-gray-100"}`}
      >
        <div className="max-w-screen-lg w-full">
          <TopBar data={data} />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <Footer />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </div>
      </body>
    </html>
  );
}
