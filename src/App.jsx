import React from "react";
import { ClassComponent } from "./ClassComponent.jsx";
import { HookComponent } from "./HookComponent.jsx";

export const App = () => {
  return <React.Fragment>
    <ClassComponent />
    <HookComponent />
  </React.Fragment>;
};