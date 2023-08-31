import { Routes, Route } from "react-router-dom";
import { Home, Loan } from "../../pages";

export enum RouteNames {
  NOT = '*',
  HOME = '/',
  LOAN = '/loan',
};

function Routers() {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<Home />} />
      <Route path={RouteNames.LOAN} element={<Loan />} />
      <Route path={RouteNames.NOT} element={<></>} />
    </Routes>
  );
}

export { Routers };
