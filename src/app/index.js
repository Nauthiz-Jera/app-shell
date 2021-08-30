import React from "react";
import { BootStrapper } from "@workshop/app-components";

import { routes } from "../pages/routes";
import { reducer } from "./../state";

const App = () => (
  <BootStrapper appName="home" routes={routes} store={reducer} />
);

export default App;
