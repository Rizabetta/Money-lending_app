import { Home, Loan, NotFound } from "../pages";
import {
  SigningDocuments,
  ContinuationApplication,
  PaymentSchedule,
  LoanPinCode,
} from "../pages/LoanStepPages";

export enum RouteNames {
  NOT = "*",
  HOME = "/",
  LOAN = "/loan",
}

const applicationId = localStorage.getItem("applicationId");

export const routes = [
  { path: RouteNames.HOME, element: <Home /> },
  { path: RouteNames.LOAN, element: <Loan /> },
  {
    path: RouteNames.LOAN + `/${applicationId}`,
    element: <ContinuationApplication />,
  },
  {
    path: RouteNames.LOAN + `/${applicationId}/document`,
    element: <PaymentSchedule />,
  },
  {
    path: RouteNames.LOAN + `/${applicationId}/document/sign`,
    element: <SigningDocuments />,
  },
  {
    path: RouteNames.LOAN + `/${applicationId}/code`,
    element: <LoanPinCode />,
  },
  { path: RouteNames.NOT, element: <NotFound /> },
];
