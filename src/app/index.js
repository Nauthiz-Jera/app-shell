import React from "react";
import { routes } from "../pages/routes";
import { BootStrapper } from "@workshop/app-components";
import { reducer } from "./../state";

const App = () => (
  <BootStrapper appName="home" routes={routes} store={reducer} />
);

export default App;
