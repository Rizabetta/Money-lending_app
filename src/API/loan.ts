import { TScoring } from "../components/ApplicationIdPage/Scoring/Scoring";
import { PathNames, apiFormData, apiOptions } from "./loan.const";

async function postPrescoring(data: any) {
  const options = apiOptions.requestOptions(
    "POST",
    apiFormData.prescoringData(data)
  );
  const responce = await fetch(`${PathNames.APPLICATION}`, options);
  return responce;
}

async function postOffer({ offer }: any) {
  const options = apiOptions.requestOptions(
    "POST",
    apiFormData.offerData(offer)
  );
  const responce = await fetch(`${PathNames.APPLICATION}/apply`, options);
  return responce;
}

const applicationId = localStorage.getItem("applicationId");
async function putScoring(data: TScoring) {
  const options = apiOptions.requestOptions(
    "PUT",
    apiFormData.scoringData(data)
  );
  const responce = await fetch(
    `${PathNames.APPLICATION}/registration/${applicationId}`,
    options
  );
  return responce;
}

async function getDevices() {
  try {
    const fetchResponse = await fetch(`${PathNames.ADMIN}/application/120`, {
      method: "GET",
    });
    const data = await fetchResponse.json();
    return data.credit.paymentSchedule;
  } catch (e) {
    return e;
  }
}

export const api_loan = { postPrescoring, postOffer, putScoring, getDevices };
