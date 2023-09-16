async function postPrescoring(data: any) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: Number(data.amount),
      term: Number(data.term),
      firstName: data.firstName,
      lastName: data.lastName,
      patronymic: data.patronymic,
      email: data.email,
      birthdate: data.birthdate,
      passportSeries: data.passportSeries,
      passportNumber: data.passportNumber,
    }),
  };
  const responce = await fetch(
    "http://localhost:8080/application",
    requestOptions
  );
  return responce;
}

async function postOffer({
  offer
}: any) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      applicationId: offer.applicationId,
      requestedAmount: offer.requestedAmount,
      totalAmount: offer.totalAmount,
      term: offer.term,
      monthlyPayment: offer.monthlyPayment,
      rate: offer.rate,
      isInsuranceEnabled: offer.isInsuranceEnabled,
      isSalaryClient: offer.isSalaryClient,
    }),
  };

  const responce = await fetch(
    "http://localhost:8080/application/apply",
    requestOptions
  );
  return responce;
}

export const api_loan = { postPrescoring, postOffer };
