import { lazy } from "react";

const Home = {
  path: "/",
  Component: lazy(() => import("./index")),
};

export { Home };
