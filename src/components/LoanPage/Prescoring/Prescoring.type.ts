import { TState } from "../../../pages/Loan/Loan";
import { Action, Store } from "redux";

export type Tinputs = {
  amount: number;
  term: number;
  firstName: string;
  lastName: string;
  patronymic: string | null;
  email: string;
  birthdate: string | Date;
  passportSeries: string;
  passportNumber: string;
};

export type TResponceOffers = {
  applicationId: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
  monthlyPayment: number;
  rate: number;
  requestedAmount: number;
  term: number;
  totalAmount: number;
};

export type TPrescoring = {
  store: Store<TState, Action>;
  setOffers: React.Dispatch<React.SetStateAction<TResponceOffers[]>>;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
};
