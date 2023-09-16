const path = "http://localhost:8080/application";

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

const offerData = (offer: any) => {
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

export const apiFormData = { prescoringData, offerData };
export const apiOptions = { path, requestOptions };
