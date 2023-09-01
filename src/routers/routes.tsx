import { Home, Loan } from "../pages";

export enum RouteNames {
  NOT = "*",
  HOME = "/",
  LOAN = "/loan",
}

export const routes = [
  { path: RouteNames.HOME, element: <Home /> },
  { path: RouteNames.LOAN, element: <Loan /> },
  { path: RouteNames.NOT, element: "" },
];
