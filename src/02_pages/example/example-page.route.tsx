import {RouteObject} from "react-router-dom";
import {createElement} from "react";
import {ExamplePageComponent} from "./example-page.component.tsx";

export const examplePageRoute: RouteObject = {
  path: "/example",
  element: createElement(ExamplePageComponent),
};
