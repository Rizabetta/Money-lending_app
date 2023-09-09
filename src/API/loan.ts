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
  amount,
  id,
  term,
  rate,
  insurance,
  salary,
}: any) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      applicationId: id,
      requestedAmount: amount,
      totalAmount: amount,
      term: term,
      monthlyPayment: amount / term + (amount / 100) * rate,
      rate: rate,
      isInsuranceEnabled: insurance,
      isSalaryClient: salary,
    }),
  };

  const responce = await fetch(
    "http://localhost:8080/application/apply",
    requestOptions
  );
  return responce;
}

export const api_loan = { postPrescoring, postOffer };
