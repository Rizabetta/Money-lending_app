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
  await fetch("http://localhost:8080/application", requestOptions);
}

export const api_loan = { postPrescoring };
