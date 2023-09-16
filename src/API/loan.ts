import { apiFormData, apiOptions } from "./loan.const";

async function postPrescoring(data: any) {
  const options = apiOptions.requestOptions(
    "POST",
    apiFormData.prescoringData(data)
  );
  const responce = await fetch(`${apiOptions.path}`, options);
  return responce;
}

async function postOffer({ offer }: any) {
  const options = apiOptions.requestOptions(
    "POST",
    apiFormData.offerData(offer)
  );
  const responce = await fetch(`${apiOptions.path}/apply`, options);
  return responce;
}

export const api_loan = { postPrescoring, postOffer };
