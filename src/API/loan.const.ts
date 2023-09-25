import { TResponceOffers } from "../components/LoanPage/Prescoring/Prescoring.type";

export enum PathNames {
  APPLICATION = "http://localhost:8080/application",
  ADMIN = "http://localhost:8080/admin",
  DOCUMENT = "http://localhost:8080/document",
}

const requestOptions = (method: string, data: any) => {
  return {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
};

const prescoringData = (data: any) => {
  return {
    amount: Number(data.amount),
    term: Number(data.term),
    firstName: data.firstName,
    lastName: data.lastName,
    patronymic: data.patronymic,
    email: data.email,
    birthdate: data.birthdate,
    passportSeries: data.passportSeries,
    passportNumber: data.passportNumber,
  };
};

const offerData = (offer: TResponceOffers) => {
  return {
    applicationId: offer.applicationId,
    requestedAmount: offer.requestedAmount,
    totalAmount: offer.totalAmount,
    term: offer.term,
    monthlyPayment: offer.monthlyPayment,
    rate: offer.rate,
    isInsuranceEnabled: offer.isInsuranceEnabled,
    isSalaryClient: offer.isSalaryClient,
  };
};

const scoringData = (data: any) => {
  return {
    gender: data.gender,
    maritalStatus: data.maritalStatus,
    dependentAmount: Number(data.dependentAmount),
    passportIssueDate: data.passportIssueDate,
    passportIssueBranch: data.passportIssueBranch,
    employment: {
      employmentStatus: data.employmentStatus,
      employerINN: data.employerINN,
      salary: Number(data.salary),
      position: data.position,
      workExperienceTotal: Number(data.workExperienceTotal),
      workExperienceCurrent: Number(data.workExperienceCurrent),
    },
    account: "11223344556677889900",
  };
};

export const apiFormData = { prescoringData, offerData, scoringData };
export const apiOptions = { requestOptions };
