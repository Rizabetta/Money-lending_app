import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export enum RouteNames {
  NOT = "*",
  HOME = "/",
  LOAN = "/loan",
}

function Routers() {
  return (
    <Routes>
      {routes.map((route) => {
        return <Route path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}

export { Routers };
