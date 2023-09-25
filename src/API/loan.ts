import {
  TResponceOffers,
  Tinputs,
} from "../components/LoanPage/Prescoring/Prescoring.type";
import { TScoring } from "../components/LoanStepPages/Scoring/Scoring";
import { PathNames, apiFormData, apiOptions } from "./loan.const";

async function sendPrescoring(data: Tinputs) {
  const options = apiOptions.requestOptions(
    "POST",
    apiFormData.prescoringData(data)
  );
  const responce = await fetch(`${PathNames.APPLICATION}`, options);
  return responce;
}

async function sendOffer(offer: TResponceOffers) {
  const options = apiOptions.requestOptions(
    "POST",
    apiFormData.offerData(offer)
  );
  const responce = await fetch(`${PathNames.APPLICATION}/apply`, options);
  return responce;
}

const applicationId = localStorage.getItem("applicationId");
async function sendScoring(data: TScoring) {
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
    const fetchResponse = await fetch(
      `${PathNames.ADMIN}/application/${applicationId}`,
      {
        method: "GET",
      }
    );
    const data = await fetchResponse.json();
    return data.credit.paymentSchedule;
  } catch (e) {
    return e;
  }
}

async function createDocuments() {
  const options = apiOptions.requestOptions("POST", {
    applicationId: applicationId,
  });
  const responce = await fetch(
    `${PathNames.DOCUMENT}/${applicationId}`,
    options
  );
  return responce;
}

async function signDocuments() {
  const options = apiOptions.requestOptions("POST", {});
  const responce = await fetch(
    `${PathNames.DOCUMENT}/${applicationId}/sign`,
    options
  );
  return responce;
}

async function sendSESCode(pinCode: number) {
  const options = apiOptions.requestOptions("POST", `${pinCode}`);
  const responce = await fetch(
    `${PathNames.DOCUMENT}/${applicationId}/sign/code`,
    options
  );
  return responce;
}

export const api_loan = {
  sendPrescoring,
  sendOffer,
  sendScoring,
  getDevices,
  createDocuments,
  signDocuments,
  sendSESCode,
};
