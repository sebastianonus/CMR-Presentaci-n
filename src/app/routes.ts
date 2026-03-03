import { createBrowserRouter } from "react-router";
import Presentation from "./components/presentation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Presentation,
  },
  {
    path: "/:slideNumber",
    Component: Presentation,
  },
]);
