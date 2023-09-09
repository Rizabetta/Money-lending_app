async function putScoring(data: any) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
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
    }),
  };

  const responce = await fetch(
    `http://localhost:8080/application/registration/${data.id}`,
    requestOptions
  );

  return responce;
}

export const api_applicationId = { putScoring };
