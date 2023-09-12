import { Home, Loan, ApplicationId, Document, Sign, Code } from "../pages";

export enum RouteNames {
  NOT = "*",
  HOME = "/",
  LOAN = "/loan",
}

export const routes = [
  { path: RouteNames.HOME, element: <Home /> },
  { path: RouteNames.LOAN, element: <Loan /> },
  { path: RouteNames.NOT, element: "" },
  { path: RouteNames.LOAN + "/:id", element: <ApplicationId /> },
  { path: RouteNames.LOAN + "/:id/document", element: <Document /> },
  { path: RouteNames.LOAN + "/:id/document/sign", element: <Sign /> },
  { path: RouteNames.LOAN + "/:id/code", element: <Code /> },
];
